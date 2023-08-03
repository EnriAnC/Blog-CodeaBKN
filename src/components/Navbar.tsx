import React, { useEffect, useRef, useState } from 'react'
import OffcanvasNavbar from './OffcanvasNavbar';
import useViewTransition from '../hooks/useViewTransition';
import { Link } from 'react-router-dom';

const Navbar = () => { 

    const {handleViewTransition} = useViewTransition()

    // const [isScrolling, setIsScrolling] = useState(false)

    // const navRef = useRef({} as HTMLDivElement)

    // const btnRef = useRef({} as HTMLButtonElement)

    // const collapseNavRef = useRef({} as HTMLDivElement)


    // useEffect(()=>{
    //     window.addEventListener('scroll', e=>{
    //         if (window.scrollY > 48) {
    //             setIsScrolling(true)
    //             return
    //         }
    //         setIsScrolling(false)
    //     })
    // }, [])

    // useEffect(()=>{
        
    // }, [isScrolling])

    return (
        <>
            {/* <div className="bg-white-blur fixed-top navbar" style={{zIndex:"-1"}} ></div> */}
            {/* <nav className="navbar navbar-expand-lg fixed-top z-3 navbar-custom "
                style={{viewTransitionName:"nav"}}
                ref={navRef}
                >   
                <div className="container-fluid">
                    <Link className="navbar-brand logo_blog me-0" to="/"
                    onClick={handleViewTransition('/')}
                    style={{viewTransitionName:"nav-title"}}>
                        <span>Blog</span> 
                        <span className="blinking-text top-500"> | </span> 
                        {!isScrolling ? <span>Codea_BKN</span> : ''} 
                    </Link>
                    <button ref={btnRef} className={`navbar-toggler p-lg-0 ${isScrolling ? 'd-block' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ms-md-3 position-relative ${isScrolling ? 'd-none' : ''}`} id="navbarNav" ref={collapseNavRef}>
                        <ul className="navbar-nav w-100 d-flex justify-content-start">
                            <li className="nav-item">
                                <Link className="nav-link " to="/" 
                                onClick={handleViewTransition('/')}
                                >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="crear-articulo"
                                onClick={handleViewTransition('/crear-articulo')}
                                >Crear articulo</Link>
                            </li>
                            <li className="nav-item position-absolute end-0">
                                <Link className="nav-link" to="login"
                                onClick={handleViewTransition('/login')}
                                >Iniciar sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <OffcanvasNavbar /> 
        
        </>
    )
}

export default Navbar