import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://zcnlqhdimljmsuilobyw.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjbmxxaGRpbWxqbXN1aWxvYnl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NzAwNTEsImV4cCI6MjA2NTQ0NjA1MX0.f6T1LazimkuiMpCCjkBDZRxl6W5F-0d20VxuedAuZ4M"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Upload a file to Supabase Storage
export async function uploadFile(file: File, bucket: string, path: string) {
  const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "3600",
    upsert: true,
  })

  if (error) {
    throw error
  }

  return data
}

// Get public URL for a file
export function getPublicUrl(bucket: string, path: string) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)

  return data.publicUrl
}

// List files in a bucket
export async function listFiles(bucket: string, folder?: string) {
  const { data, error } = await supabase.storage.from(bucket).list(folder)

  if (error) {
    throw error
  }

  return data
}
