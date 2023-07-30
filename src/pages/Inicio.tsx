  import React, { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
  import BlogCard from '../components/BlogCard'
  import { useBlogsContext } from '../context/blogs/blogsContext.js'
  import Carousel from '../components/Carousel'
import { useScrollContext } from '../context/scroll/ScrollContext'
import Hero from '../components/Hero'

  const Inicio = () => {

    const { scrollY, setScrollY } = useScrollContext();

    const { blogState } = useBlogsContext()
    
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
              {blogList.map(blog=>(
                  <BlogCard key={blog.id} blog={blog}/>
              ))}
          </div>

        </div>
      </>
      
    )
  }

  export default memo(Inicio)