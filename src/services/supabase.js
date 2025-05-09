
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://iroivpqgotnwcsjscmxs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyb2l2cHFnb3Rud2NzanNjbXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3Njg5NTUsImV4cCI6MjA2MjM0NDk1NX0.60cLgEFuN6WIDYfujXac12s1DTN5JRj6RgFHBrlnTyg'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase