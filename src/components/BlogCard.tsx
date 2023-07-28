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
            <div id={`blog_${id}`} className="card p-0 " style={{cursor: "pointer", height:"400px", width:"100%"}}>
                {
                    img.split('.')[1] === 'webp' 
                    ? (<img src={`${img.split('.')[0]}.png`} 
                        className="img-articulo-size card-img-top" alt={img} 
                        style={{
                            viewTransitionName: `blog-${id}`,
                        }}/>)
                    : (<img src={img ??= "bg-x.png"} 
                        className="img-articulo-size card-img-top" alt={img} 
                        style={{
                            viewTransitionName: `blog-${id}`,
                        }}/>)
                }

                <h5 className='card-title px-3 pt-2' 
                style={{viewTransitionName:`title-${id}`}}>
                    {title}
                </h5>
                <div className="card-body">
                    <p className="card-text fs-6 truncated-text d-inline"
                        style={{
                            viewTransitionName: `body-${id}`,
                        }}>
                            {description.length > 100 ? description.slice(0, 100)+'...' : description}</p>
                    
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <span style={{fontSize:".75rem"}}>{author}</span> <span style={{fontSize:".75rem"}}>{date}</span>
                </div>
            </div>
        </Link>
        

    )
}

export default memo(BlogCard)