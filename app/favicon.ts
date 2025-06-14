import { ImageResponse } from "next/server"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  // You would normally read the image file here and create a proper favicon
  // For this example, we're creating a simple placeholder
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "#0F3543",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      TIB
    </div>,
    {
      ...size,
    },
  )
}
