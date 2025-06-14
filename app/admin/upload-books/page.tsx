"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, CheckCircle, AlertCircle, FileText } from "lucide-react"

interface UploadedFile {
  name: string
  url: string
  size: string
}

export default function UploadBooksPage() {
  const [uploading, setUploading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [error, setError] = useState<string>("")

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    setUploading(true)
    setError("")

    try {
      for (const file of files) {
        const formData = new FormData()
        formData.append("file", file)

        const response = await fetch("/api/upload-book", {
          method: "POST",
          body: formData,
        })

        const result = await response.json()

        if (result.success) {
          setUploadedFiles((prev) => [
            ...prev,
            {
              name: result.fileName,
              url: result.url,
              size: formatFileSize(file.size),
            },
          ])
        } else {
          setError(result.error || "Upload failed")
        }
      }
    } catch (error) {
      console.error("Upload failed:", error)
      setError("Upload failed. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Upload Book PDFs to Supabase</h1>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-lg font-medium text-gray-700">Choose PDF files to upload</span>
                <p className="text-sm text-gray-500 mt-2">Select one or more PDF files</p>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
              <Button
                className="mt-4"
                disabled={uploading}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                {uploading ? "Uploading..." : "Select Files"}
              </Button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-red-700">{error}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {uploadedFiles.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Successfully Uploaded Files
              </h2>

              <div className="space-y-3">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => window.open(file.url, "_blank")}>
                        View
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(file.url)}>
                        Copy URL
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                <h3 className="font-semibold text-blue-800 mb-2">Next Steps:</h3>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. Copy the URLs above</li>
                  <li>2. Update your book pages to use these Supabase URLs</li>
                  <li>3. Test the download links</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                <strong>Step 1:</strong> Upload your PDF files using the form above
              </p>
              <p>
                <strong>Step 2:</strong> Copy the generated URLs
              </p>
              <p>
                <strong>Step 3:</strong> Update your book pages to use these URLs instead of local files
              </p>
              <p>
                <strong>Step 4:</strong> Test the download functionality
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
