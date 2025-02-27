import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const SignInForm = () => {
    const navigate = useNavigate()
    const {formState: {errors}, register, handleSubmit} = useForm()
    const mockUserName = 'Admin'
    const mockPassword = 'password%'
    const submitForm = () => {
        localStorage.setItem('token', 'mock-token')
        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit(submitForm)} className='auth__form'>
            <div className="auth__input">
            <input {...register('name', { required: true, validate: value => value === mockUserName })} placeholder='Имя' type="text" className="auth__inp" />
            {errors.name && <p className='auth__error'>Неправильное имя, пройдите регистрацию</p>}
            </div>
            <div className="auth__input">
            <input {...register('password', { required: true, validate: value => value === mockPassword })} placeholder='Пароль' type="password" className="auth__inp" />
            {errors.password && <p className='auth__error'>Неправильный пароль, пройдите регистрацию</p>}
            </div>
            <button type='submit' className='auth__btn'>Войти</button>
        </form>
    )
}
