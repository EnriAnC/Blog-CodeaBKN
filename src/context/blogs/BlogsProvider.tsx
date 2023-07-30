import React, { useEffect, useReducer, useState } from 'react';
import blogsReducer from './blogsReducer';
import { BlogsContext } from './blogsContext.js';
import { Blog, BlogState } from '../../models/Blog';

interface Props{
  children: React.ReactElement
}

const INITIAL_STATE: BlogState = { blogs: {}, loading: true };


const BlogsProvider = ({ children }:Props) => {
    const [blogsState, dispatch] = useReducer(blogsReducer, INITIAL_STATE);
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {

      if (Object.keys(blogsState.blogs).length > 0 || localStorage.getItem('blogs')) return
      
      async function fetchData(){
        try {
          const response = await fetch('https://springboot-reactive-api-production.up.railway.app/blogs');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data: Blog[] = await response.json();
          dispatch({type:'load', payload:data});
          setLoading(false)
        } catch (error) { 
          setLoading(true)
          console.error('Error fetching data:', error); 
        }
      }
      fetchData()
      
      
    }, []);
  
    return (
      <BlogsContext.Provider value={{ blogState: blogsState, dispatch, isLoading: loading }}>
        {children}
      </BlogsContext.Provider>
    );
};

export default BlogsProvider