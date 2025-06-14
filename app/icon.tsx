import { ImageResponse } from "next/og" // Updated import from next/server to next/og

// Route segment config
export const runtime = "edge"

// Image metadata - increased size for larger favicon
export const size = {
  width: 48,
  height: 48,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 32, // Increased font size
        background: "#0F3543",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold", // Added bold for better visibility
      }}
    >
      TIB
    </div>,
    {
      ...size,
    },
  )
}
