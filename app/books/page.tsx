import type { Metadata } from "next"
import BooksClientPage from "./BooksClientPage"

export const metadata: Metadata = {
  title: "Our Books - Together in Battle Ministry",
  description: "Explore our collection of books on spiritual growth, deliverance, and freedom in Christ.",
}

const BooksPage = () => {
  return <BooksClientPage />
}

export default BooksPage
