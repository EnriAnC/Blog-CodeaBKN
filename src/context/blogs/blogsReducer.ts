import { Blog, BlogState } from "../../models/Blog";

export type BlogAction =   { type: "added"; payload: Blog } 
                  | { type: "load", payload: Blog[]  }
                  | { type: "changed", payload: Blog }
                  | { type: "deleted", payload: { id: number } }

export const blogsReducer = ( state: BlogState, action: BlogAction ):BlogState => {

  switch (action.type) {
    case 'load': {
      const loadedBlogs = action.payload.reduce((blogs, blog) => {
        return { ...blogs, [blog.id]: blog };
      }, {});
      return {
        ...state,
        blogs: { ...state.blogs, ...loadedBlogs }
      };
    }
    case 'added': {
      const nextId = Object.keys(state.blogs).length > 0 ? Math.max(...Object.keys(state.blogs).map(Number)) + 1 : 0;
      const newBlog = { ...action.payload, id: nextId };
      const updatedBlogs = { ...state.blogs, [nextId]: newBlog };
      return { ...state, blogs: updatedBlogs };
    }
    case 'changed': { 
      const updatedBlogs = { ...state.blogs, [action.payload.id]: action.payload };
      return { ...state, blogs: updatedBlogs };
    }
    case 'deleted': {
      const { [action.payload.id]: deletedBlog, ...remainingBlogs } = state.blogs;
      return { ...state, ...remainingBlogs };
    }
    default: {
      return state;
    }
  }
}

export default blogsReducer