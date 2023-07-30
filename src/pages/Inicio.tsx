  import React, { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
  import BlogCard from '../components/BlogCard'
  import { useBlogsContext } from '../context/blogs/blogsContext.js'
  import Carousel from '../components/Carousel'
import { useScrollContext } from '../context/scroll/ScrollContext'
import Hero from '../components/Hero'
import { Blog } from '../models/Blog'

  const Inicio = () => {

    const { scrollY, setScrollY } = useScrollContext();
    const { blogState, isLoading } = useBlogsContext()

    const voidList = ['','','','','','']

    const voidBlog = {
      id:0, title:"", author:"", body:"", comments:[], 
      date:"", description:"",img:"javascript-logo.svg", likes:0,tags:[]
    }
    
    const blogList = useMemo(() => Object.values(blogState.blogs), [blogState.blogs]);

    useLayoutEffect(()=>{
      if (!scrollY) return window.scrollTo(0, 0)
      window.scrollTo(0, scrollY)
      setScrollY(0)
    }, []) 

    return (
      <>
        <Hero />
        <div className='container pt-4 position-relative mb-5' id='articles-container'>
          {/* <Carousel/> */}
          <h2 style={{viewTransitionName:"h2-inicio"}}>Articulos recientes</h2>
          <div className="grid-width-responsive-260px400px">
              {!isLoading ? blogList.slice(0,6).map(blog=>(
                  <BlogCard key={blog.id} blog={blog}/>
              )) : voidList.map((_, i)=><BlogCard key={i} blog={voidBlog}/>)}
          </div>

        </div>
      </>
      
    )
  }

  export default memo(Inicio)