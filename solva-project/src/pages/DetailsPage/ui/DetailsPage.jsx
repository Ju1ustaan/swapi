import React, { use, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { environment } from 'shared/consts/environment'

import { DetailComponent } from 'widgets/DetailComponent'
import GoBackBtn from 'shared/ui/GoBackBtn'

import './DetailsPage.css'
import { AdditionalInfo } from 'widgets/AdditionalInfo'
import { useSelector } from 'react-redux'

const detailContent = {
  starships: [
    { text: 'Model', value: 'model' },
    { text: 'MGLT', value: 'MGLT' },
    { text: 'Cargo Capacity', value: 'cargo_capacity' },
    { text: 'Consumables', value: 'consumables' },
    { text: 'Cost in Credits', value: 'cost_in_credits' },
    { text: 'Crew', value: 'crew' },
    { text: 'Hyperdrive Rating', value: 'hyperdrive_rating' },
    { text: 'Length', value: 'length' },
    { text: 'Manufacturer', value: 'manufacturer' },
    { text: 'Max Atmosphering Speed', value: 'max_atmosphering_speed' },
    { text: 'Passengers', value: 'passengers' },
    { text: 'Starship Class', value: 'starship_class' },
  ],
  planets: [
    { text: 'Diameter', value: 'diameter' },
    { text: 'Rotation Period', value: 'rotation_period' },
    { text: 'Orbital Period', value: 'orbital_period' },
    { text: 'Gravity', value: 'gravity' },
    { text: 'Population', value: 'population' },
    { text: 'Climate', value: 'climate' },
    { text: 'Terrain', value: 'terrain' },
    { text: 'Surface Water', value: 'surface_water' },
  ],
  people: [
    { text: 'Height', value: 'height' },
    { text: 'Mass', value: 'mass' },
    { text: 'Hair Color', value: 'hair_color' },
    { text: 'Skin Color', value: 'skin_color' },
    { text: 'Eye Color', value: 'eye_color' },
    { text: 'Birth Year', value: 'birth_year' },
    { text: 'Gender', value: 'gender' },
  ]
}

// starships - films, pilots
// people - films, species, starships, vehicles
// planets - films, residents
export const DetailsPage = () => {
  const location = useLocation()
  const additionalInfo = {
    starships: [
      useSelector(state => state.details.films),
      useSelector(state => state.details.pilots),
    ],
    people: {
      films: useSelector(state => state.details.films),
      species: useSelector(state => state.details.species),
      starships: useSelector(state => state.details.starships),
      vehicles: useSelector(state => state.details.vehicles),
    },
    planets: [
      useSelector(state => state.details.films),
      useSelector(state => state.details.residents),
    ]
  }
  
  const renderAdditionalInfo = () => {
    const content = additionalInfo[location.pathname.split('/')[1]]

    if (location.pathname.split('/')[1] === 'people') {
      return (
        <div>
          <AdditionalInfo
          categories={'films'}
            films={content.films || []}
            species={content.species || []}
            starships={content.starships || []}
            vehicles={content.vehicles || []}
          />
        </div>
      )
    } else if (location.pathname === 'starships') {
      return (
        <div>
          <AdditionalInfo
          categories={'starships'}
            films={content.films || []}
            pilots={content.pilots || []}
          />
        </div>
      )
    } else {
      return (
        <div>
          <AdditionalInfo
          categories={'planets'}
            films={content.films || []}
            residents={content.residents || []}
          />
        </div>
      )
    }
  }

  return (
    <div className='details-page container'>
      
      <GoBackBtn />
      <h3 className='page-title'>{location.pathname.replace('/', '')}</h3>
      <DetailComponent params={location.pathname} content={detailContent[location.pathname.split('/')[1]]} />
      <div>
        {renderAdditionalInfo()}
      </div>
    </div>
  )
}
