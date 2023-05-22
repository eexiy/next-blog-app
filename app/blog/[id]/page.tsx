import { Metadata } from 'next'
import React from 'react'
import { Data } from '../page'

type Props = {
    params: {
        id: string
    }
}

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
    const post: Data = await getData(id)

    return {
        title: post.title
    }
}


const getData = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })

    return response.json()
}

const Post = async ({ params: { id } }: Props) => {
    const post: Data = await getData(id)

     return (
        <>
            <h1>Post {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post