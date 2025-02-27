import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { SignInForm, SignUpForm } from '..'
export const AuthPage = () => {
    const navigate = useNavigate()
    const [toggleForm, setToggleForm] = useState(false)
    const token = localStorage.getItem('token')
    useEffect(() => {
        if(token){
            navigate('/')
        }
    }, [token])
  return (
    <div className='auth'>
        <div className="auth__wrapper">
            
        <p className='auth__title auth__title-register'>{toggleForm? 'Регистрация': 'Авторизация'}</p>
            {toggleForm? <SignUpForm/>: <SignInForm/>}
            <div className='auth__action'>
                <button onClick={() => setToggleForm(!toggleForm)} type='button' className='auth__helper'>{toggleForm? 'Войти': 'Регистрация'}</button>
                <button className='auth__helper'>Забыли пароль?</button>
            </div>
        </div>
    </div>
  )
}
