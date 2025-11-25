import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://hrqulljlrwnvfnrajvgw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhycXVsbGpscndudmZucmFqdmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NTY2NTcsImV4cCI6MjA3OTUzMjY1N30.y-s0aAh9sshdvunupyoz8mR68H4l5F3D0T3dOJrERkk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
