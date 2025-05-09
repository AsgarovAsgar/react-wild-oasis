import supabase from "./supabase"
import { fromSnakeToCamel } from "../utils/transformKeys"

export async function getCabins(){
  const { data, error } = await supabase
  .from('cabins')
  .select('*')

  if(error) {
    console.log(error)
    throw new Error('Cabins could not be loaded.')
  }

  return fromSnakeToCamel(data)
}