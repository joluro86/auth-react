import React, { useState } from 'react'
import {auth} from '../firebase.js'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [esRegistro, setEsRegistro] = useState(true)

    const procesarDatos = (e) => {
        e.preventDefault()
        if (!email.trim()) {
            console.log('Ingrese email')
            setError('Ingrese email')
            return
        }
        if (!password.trim()) {
            console.log('Ingrese la contraseña')
            setError('Ingrese la contraseña')
            return
        }
        if (password.length < 6) {
            console.log('Contraseña debe ser mayor a 5 caracteres')
            setError('Contraseña debe ser mayor a 5 caracteres')
            return
        }

        setError(null)

        if(esRegistro){
            registrarUsuario()
        }
    }

    const registrarUsuario = React.useCallback( async ()=>{
        try {
            const res = await auth.createUserWithEmailAndPassword(email.trim(), password.trim())
            console.log(res)
        } catch (error) {
            console.log(error)
            if(error.code==='auth/invalid-email'){
                setError('Correo no valido')
            }  
            if(error.code==='auth/email-already-in-use'){
                setError('Correo ya está registrado')
            }              
        }
    }, [email, password])




    return (
        <div className='mt-5'>
            <h3 className='text-center'>{
                esRegistro ? 'Registro' : 'Inicio de sisón'
            }
            </h3>

            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className='alert alert-danger'>
                                    {error}
                                </div>
                            )
                        }
                        <input
                            className='form-control mb-3'
                            type="email"
                            placeholder='Ingrese un email'
                            onChange={e => { setEmail(e.target.value) }}
                            value={email}
                        />
                        <input
                            className='form-control mb-3'
                            type="password"
                            placeholder='Ingrese la contraseña'
                            onChange={e => { setPassword(e.target.value) }}
                            value={password}
                        />
                        <div className="d-grid gap-2">
                            <button className="btn btn-dark btn-lg btn-block" type="submit"> {
                                esRegistro ? 'Registrarse?' : 'Acceder'
                            }</button>
                            <button className="btn btn-info btn-sm btn-block "
                                onClick={() => setEsRegistro(!esRegistro)}
                                type="button">
                                {
                                    esRegistro ? '¿Ya estás registrado?' : 'No tienes cuenta'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login