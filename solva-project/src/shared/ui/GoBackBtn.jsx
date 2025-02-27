import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeAdditional } from 'entities/Additional/model/AdditionalSlice'
import { CaretLeftIcon } from 'shared/assets/icons'
import { persistStore } from 'redux-persist'
import { store } from 'app/store'
const GoBackBtn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goBack = () => {
        dispatch(removeAdditional())
        persistStore(store).purge()
        navigate(-1)
    }
    return (
        <button className='goback' onClick={goBack}>
            <CaretLeftIcon width='20px' height='20px'/>
            Назад
        </button>
    )
}

export default GoBackBtn