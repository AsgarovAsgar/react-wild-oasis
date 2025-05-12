import supabase, { supabaseUrl } from "./supabase"
import { fromSnakeToCamel, fromCamelToSnake } from "../utils/transformKeys"

export async function getCabins(){
  const { data, error } = await supabase
    .from('cabins').select('*')

  if(error) {
    console.log(error)
    throw new Error('Cabins could not be loaded.')
  }

  return fromSnakeToCamel(data)
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // https://iroivpqgotnwcsjscmxs.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

  const formattedCabin = fromCamelToSnake(newCabin)

  // 1. create cabin
  const { data, error } = await supabase
    .from('cabins').insert([{
      ...formattedCabin, image: imagePath
    }]).select()

  if(error) {
    console.log(error)
    throw new Error('Cabins could not be loaded.')
  }

  // 2. upload image
  const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image)
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.log(storageError)
    throw new Error('Cabins image could not be uploaded and the cabin was not created.')
  }

  return fromSnakeToCamel(data)
}

export async function deleteCabin(id) {
  const { error } = await supabase
    .from('cabins').delete().eq('id', id)

  if(error) {
    console.log(error)
    throw new Error('Cabin could not be deleted.')
  }
}