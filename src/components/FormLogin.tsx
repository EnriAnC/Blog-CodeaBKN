import React, { useRef } from 'react'
import { useAuthContext } from '../context/auth/AuthContext'
import SpinnerLoader from './SpinnerLoader'

const FormLogin = () => {

    const { loggedIn, isLogging, login } = useAuthContext()

    const formRef = useRef({} as HTMLFormElement)

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        login({
            email: formRef.current.inputEmail.value,
            password: formRef.current.inputPassword.value
        })
    }

    return (
        <form className="card shadow p-4 position-relative" 
        style={{maxWidth: "400px", backgroundColor:"#ffffff50"}} 
        ref={formRef}
        onSubmit={handleSubmit}>
            <legend className='mb-4'>Inicio de sesión</legend>
            <div className="row align-items-center">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail" 
                aria-describedby="emailHelp" />
                <p id="emailHelp" className="form-text mb-3">Nunca compartiremos tu correo, con nadie!</p>
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" id="inputPassword" 
                className="form-control" aria-describedby="passwordHelpBlock" />
                <p id="passwordHelpBlock" className="form-text mb-4">
                    Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
                </p>
                <button type="submit" className="btn btn-light border">Iniciar sesión</button>
            </div>
            
                { isLogging 
                    ?   <div className='position-absolute top-0 start-0 end-0 bottom-0 bg-opacity-25 bg-black'>
                            <SpinnerLoader />
                        </div>
                    :   ''
                }
        </form>
    )
}

export default FormLogin