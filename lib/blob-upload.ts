import { put } from "@vercel/blob"

export async function uploadPDFToBlob(file: File, filename: string) {
  const blob = await put(filename, file, {
    access: "public",
  })

  return blob.url
}

// Example usage:
// const url = await uploadPDFToBlob(pdfFile, 'freedom-pathways.pdf');
