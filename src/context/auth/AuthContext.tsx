import React, { createContext, useContext, useState } from 'react';
import { InputLogin } from '../../models/Login';

interface AuthContext{
    loggedIn: boolean
    isLogging: boolean
    login: ({email, password}: InputLogin) => void
    logout: () => void
}

const AuthContext = createContext({} as AuthContext);

export const useAuthContext = () => useContext(AuthContext);

interface Props{
    children: React.ReactElement
}

export const AuthProvider = ({ children }: Props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLogging, setLogging] = useState(false)

    const login = async ({email, password}:InputLogin) => {
        setLogging(true)
        // Realiza la solicitud HTTP de inicio de sesión y actualiza el estado loggedIn según la respuesta del servidor
        try {
            // const res = await fetch('...', {
            //     headers:{"Content-Type":"application/json"},
            //     body:JSON.stringify({email, password})
            // })
            // const data = await res.json()
            const token = 'token' || ''
            if (!Boolean(token)) return alert('Fallido')
            setTimeout(() => {
                localStorage.setItem('token', token)
                setLoggedIn(true);
            }, 2000);
        } catch (error) {
            setLoggedIn(false)
            localStorage.removeItem('token')
        // Manejar errores de red u otros errores
        } finally {
            setTimeout(() => {
                setLogging(false)
            }, 2000);
        }
    };

    const logout = () => {
        try {
            localStorage.removeItem('token')
            setLoggedIn(false);
        } catch (error) {
            // Manejar errores de red u otros errores.
        }
    };

    const authData = {
        loggedIn,
        isLogging,
        login,
        logout
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};
