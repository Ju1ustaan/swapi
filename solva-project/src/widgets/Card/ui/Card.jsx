import React from 'react'
import StarshipImg from 'shared/assets/img/starships.avif'
import CharacterImg from 'shared/assets/img/characters.webp'
import PlanetImg from 'shared/assets/img/planets.avif'

import './Card.css'
import { NavLink } from 'react-router-dom'

const cardImages = {
  starships: StarshipImg,
  people: CharacterImg,
  planets: PlanetImg
}


export const Card = ({path, title}) => {
  
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={cardImages[path.split('/').join('')]} alt={title} />
      </div>
      <div className='card__content'>
      <p className='card__title'>{title}</p>
      <NavLink className='card__link' to={path}>Перейти</NavLink>
      </div>
    </div>
  )
}
