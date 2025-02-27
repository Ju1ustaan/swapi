import React from 'react'
import NotFoundImg from 'shared/assets/img/starwars-404.webp'

import './NotFoundPage.css'
export const NotFoundPage = () => {
  return (
    <div className='notfound'>
      <img src={NotFoundImg} alt="not found" />
      </div>
  )
}
