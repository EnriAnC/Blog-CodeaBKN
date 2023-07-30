import React from 'react'

const Hero = () => {
  return (
    <div className='custom-hero position-relative' style={{viewTransitionName: "hero"}}>
        {/* <h2 style={{color:"#b294e2", left:'5vw', top:'12.5vh'}} className='position-absolute'>TENDENCIA</h2> */}
        <div className='d-flex flex-column justify-content-center align-items-center mb-4' style={{marginTop:'56px'}}>
            
            <div className='p-3' style={{color: "#ff6b97", textShadow: "0 0 4px black"}}>
                
                <h1><span style={{color:"#ff008d"}}>¡</span><span className='text' style={{color:"#fff"}}>View-transition-api</span> 
                <span className='fs-3 ms-2'>va ganando espacio<span style={{color:"#ff008d"}}>!</span></span></h1>
                <h5 style={{color:"#ffb1e4"}}>¿Es el comienzo de una nueva ui web?</h5>
            </div>
        </div>
        <div className='position-absolute bottom-0 start-0 end-0'>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>
    </div>
  )
}

export default Hero