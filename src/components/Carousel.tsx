import React, { memo, useMemo } from 'react'
import CarouselItem from './CarouselItem';
import { useBlogsContext } from '../context/blogs/blogsContext';

const Carousel = () => {

    const { blogState } = useBlogsContext()

    const memoizedRandomBlogs = useMemo(() => {
        return Object.values(blogState.blogs ?? {}).slice(0,3)
    }, [blogState.blogs]);
    
    return (

        <div id="blogsCarousel" className="carousel carousel-dark slide object-fit-contain z-0">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#blogsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#blogsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#blogsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner d-flex align-items-center"
            style={{aspectRatio: "16 / 8", }}>
                {
                    memoizedRandomBlogs.map((blog, i)=>(
                        <CarouselItem key={i} blog={blog} index={i}/>
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#blogsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#blogsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    )
}

export default memo(Carousel)