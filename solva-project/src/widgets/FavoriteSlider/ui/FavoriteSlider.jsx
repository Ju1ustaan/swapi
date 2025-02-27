import React from 'react'

import './FavoriteSlider.css'
import { NavLink } from 'react-router-dom'

export const FavoriteSlider = ({content}) => {
  return (
    <div className='favorite'>
        
     <div className="favorite__wrapper">
     {
            content.map((item) => (
                <NavLink to={item.path} key={item.path} className='favorite__card'>
                    <div className='favorite__img'>
                    <img src={item.img} alt={item.path} />
                    </div>
                </NavLink>
            ))
        }
     </div>
     <div className="favorite__wrapper favorite__wrapper-absolute">
     {
            content.map((item) => (
                <NavLink to={item.path} key={item.path} className='favorite__card'>
                    <div className='favorite__img'>
                    <img src={item.img} alt={item.path} />
                    </div>
                </NavLink>
            ))
        }
     </div>
    </div>
  )
}
