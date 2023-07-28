import React, { useEffect, useReducer } from 'react';
import blogsReducer from './blogsReducer';
import { BlogsContext } from './blogsContext.js';
import { Blog, BlogState } from '../../models/Blog';

interface Props{
  children: React.ReactElement
}

const INITIAL_STATE: BlogState = { blogs: {} };


const BlogsProvider = ({ children }:Props) => {
    const [blogsState, dispatch] = useReducer(blogsReducer, INITIAL_STATE, () => {
      const blogsLS = JSON.parse(localStorage.getItem('blogs') ?? '{}');
      return { blogs: blogsLS } ;
    });
  
    useEffect(() => {

      if (Object.keys(blogsState.blogs).length > 0 || localStorage.getItem('blogs')) return
      
      async function fetchData(){
        try {
          const response = await fetch('http://localhost:8080/blogs');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data: Blog[] = await response.json();
          console.log(data)
          dispatch({type:'load', payload:data});
        } catch (error) { 
          console.error('Error fetching data:', error); 
        }
      }
      fetchData()
      
      
    }, []);
  
    return (
      <BlogsContext.Provider value={{ blogState: blogsState, dispatch }}>
        {children}
      </BlogsContext.Provider>
    );
};

export default BlogsProvider