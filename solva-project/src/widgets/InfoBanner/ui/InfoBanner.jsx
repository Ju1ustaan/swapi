import React from 'react'
import DeathStar from 'shared/assets/img/DeathStar.avif'
import './InfoBanner.css'
export const InfoBanner = ({info}) => {
  return (
    <div className='info'>
        <div className='info__img'>
            <img src={DeathStar} alt="Death Star" />
        </div>
        <div className='info__desc'>
            <p className='info__title'>{info?.name}</p>
            <p className='info__text'>{info?.manufacturer}</p>
            <p className='info__text'>{info?.model}</p>
            <p className='info__text'>{info?.starship_class}</p>
        </div>
    </div>
  )
}
