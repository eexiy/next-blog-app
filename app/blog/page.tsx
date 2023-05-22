import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export type Data = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })

  if (!response.ok) throw new Error("Unable to fetch posts!")

  return response.json()
}

const Blog = async () => {

  const posts = await getData()

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: Data) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog