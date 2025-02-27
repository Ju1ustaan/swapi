import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { validation } from '../model/validation'

export const SignUpForm = () => {
    const [succes, setSucces] = useState(false)
    const { register, formState: { errors }, handleSubmit, getValues } = useForm()
    useEffect(() => {
        console.log(errors);
    }, [errors])
    const submitForm = (data) => {
        setSucces(true)
        console.log(data);


    }
    return (
        <form onSubmit={handleSubmit(submitForm)} className='auth__form'>
            <div className={`auth__input ${errors.name && 'auth__input-error'}`}>
                <input {...register('name', validation.name)} placeholder='Имя' type="text" className="auth__inp" />
                {errors.name && <p className='auth__error'>{errors.name.message}</p>}
            </div>
            <div className={`auth__input ${errors.email && 'auth__input-error'}`}>
                <input {...register('email', validation.email)} placeholder='Укажите эл.почту' type="email" onInvalid={(e) => e.preventDefault()} className="auth__inp" />
                {errors.email && <p className='auth__error'>{errors.email.message}</p>}
            </div>
            <div className={`auth__input ${errors.password && 'auth__input-error'}`}>
                <input {...register('password', validation.password)} placeholder='Придумайте пароль' type="password" className="auth__inp" />
                {errors.password && <p className='auth__error'>{errors.password.message}</p>}
            </div>
            <div className={`auth__input ${errors['correct-password'] && 'auth__input-error'}`}>
                <input {...register('correct-password', { required: true, validate: value => value === getValues('password') })} placeholder='Повторите пароль' type="password" className="auth__inp" />
                {errors['correct-password'] && <p className='auth__error'>Не соответвует паролю</p>}
            </div>
            <button type='submit' className='auth__btn'>Зарегистрироваться</button>
            {
                succes &&
                <div className='auth__succes'>
                    <p>Логин: <span>Admin</span></p>
                    <p>Пароль: <span>password%</span></p>
                </div>
            }
        </form>
    )
}
