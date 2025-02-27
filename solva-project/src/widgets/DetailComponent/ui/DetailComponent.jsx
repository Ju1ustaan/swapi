import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchDetails } from 'entities/Details/model/detailsSlice'
import { PenInSquareIcon } from 'shared/assets/icons'

import { Loader } from 'shared/ui/Loader'

import './DetailComponent.css'

export const DetailComponent = ({ params, content }) => {
    const dispatch = useDispatch();
    const { details, loading, error } = useSelector(state => state.details);

    useEffect(() => {
        dispatch(fetchDetails(params))
    }, [params, dispatch])
    if (loading) {
        return <Loader />
    } else if (error) {
        return <div className='error'>{error}</div>
    }
    return (
        <div className='details__wrapper'>
            <div className="details__row">
                <h3 className='details__title'>{details?.name}</h3>
                <button className='details__edit'>
                    <PenInSquareIcon width={'24px'} height={'24px'} />
                </button>
            </div>
            {
                details && content.map((item) => (
                    <div className='details__row' key={item.value}>
                        <p className='details__cell'>{item.text}</p>
                        <p className='details__cell'>{details[item.value]}</p>
                    </div>
                ))
            }
        </div>

    )
}
