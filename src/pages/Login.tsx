import React from 'react'
import FormLogin from '../components/FormLogin'

const Login = () => {
  
  window.scroll(0, 0)
  
  return (
    <div className='d-flex flex-row justify-content-center pb-4 h-100 align-items-center'>
        <FormLogin />
    </div>
  )
}

export default Login