import { type NextRequest, NextResponse } from "next/server"
import { uploadFile, getPublicUrl } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file type
    if (!file.type.includes("pdf")) {
      return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 })
    }

    // Create a clean filename
    const fileName = file.name.toLowerCase().replace(/[^a-z0-9.-]/g, "-")
    const filePath = `books/${fileName}`

    // Upload to Supabase Storage
    await uploadFile(file, "ministry-files", filePath)

    // Get the public URL
    const publicUrl = getPublicUrl("ministry-files", filePath)

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: fileName,
      filePath: filePath,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      {
        error: "Upload failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
