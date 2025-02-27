export const validation = {
    name: {
        required: { value: true, message: 'Поле обязательно' },
        minLength: { value: 3, message: 'Минимум 3 символа' },
        maxLength: { value: 15, message: 'Максимум 15 символов' }
    },
    password: {
        required: { value: true, message: 'Поле обязательно' },
        minLength: { value: 5, message: 'Минимум 5 символов' },
        maxLength: { value: 20, message: 'Максимум 20 символов' },
        pattern: { 
            value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g, 
            message: 'Пароль должен содержать цифры, спецсимволы, латиницу в верхнем и нижнем регистре'
        }
    },
    email: {
        required: { value: true, message: 'Поле обязательно' },
        pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Неверный формат email'
        }
    }
}