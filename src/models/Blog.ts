import { Comment } from "./Comment"

export interface Blog {
    id: number
    title: string
    description: string
    body: string
    img: string
    author: string
    date: string
    tags: string[]
    likes: number
    comments: Comment[]
}

export interface IndexBlogs {
    [id:number]: Blog
}

export interface BlogState {
    blogs: IndexBlogs
}