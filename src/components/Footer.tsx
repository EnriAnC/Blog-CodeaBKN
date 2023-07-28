import React from 'react'
import { Link } from 'react-router-dom'
import useViewTransition from '../hooks/useViewTransition'

const Footer = () => {

  const {handleViewTransition} = useViewTransition()

  return (
    <footer className="py-3 position-relative bottom-0 mt-5" style={{backgroundColor:"orange"}}>
      <ul className="nav justify-content-center pb-3 mb-3">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted"
            onClick={handleViewTransition('/')}>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/crear-articulo" className="nav-link px-2 text-muted"
            onClick={handleViewTransition('/crear-articulo')}>Crear blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/calculadora-factorial" className="nav-link px-2 text-muted"
            onClick={handleViewTransition('/calculadora-factorial')}>Calculadora</Link>
        </li>
      </ul>
      <p className="text-center text-muted">© 2023 EnriAnC, Dev</p>
    </footer>
  )
}

export default Footer