import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { useScrollContext } from '../context/scroll/ScrollContext';
import useViewTransition from '../hooks/useViewTransition';
import { Blog } from '../models/Blog';

interface Props {
    blog: Blog
}

const BlogCard = ({blog}: Props) => {

    let { id, title, description, img, author, date, tags, likes, comments } = blog;
    if (tags[0] === 'JavaScript'){
        img = 'javascript-logo.svg'
      }
    const { setScrollY } = useScrollContext();

    const {handleViewTransition} = useViewTransition()
    
    const handleCardClick: React.MouseEventHandler = (ev) => {
        setScrollY(window.scrollY)
        handleViewTransition(`blogs/${id}`)(ev)
    } 

    return (
        <Link id={`blog_${id}`} 
            className="nav-link active" 
            to={`blogs/${id}`}
            onClick={handleCardClick}>
            <div id={`blog_${id}`} className="card p-0" 
            style={{cursor: "pointer", height:"auto", width:"100%"}}>
                <div className='d-flex flex-row'>
                    <img src={img} 
                        className="img-articulo-size card-img-top" alt={img} 
                        style={{
                            viewTransitionName: `blog-${id}`,
                        }}/>
                    <h5 className='card-title px-3 pt-2' 
                    style={{viewTransitionName:`title-${id}`}}>
                        {title}
                    </h5>
                </div>
            </div>
        </Link>
        

    )
}

export default memo(BlogCard)