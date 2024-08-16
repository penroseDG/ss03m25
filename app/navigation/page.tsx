import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div> menu thanh điều hướng 
      <Link href={"/navigation/about"}> about</Link>
      <Link href={"/navigation/news"}> news </Link>

    </div>
  )
}