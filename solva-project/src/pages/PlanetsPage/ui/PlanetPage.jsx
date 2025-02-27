import React from 'react'

import { useLocation } from 'react-router-dom'

import { DataTable } from 'widgets/DataTable'
import { Pagination } from 'entities/Pagination'
import GoBackBtn from 'shared/ui/GoBackBtn'

import './PlanetPage.css' 

const tableHeader = [
  { title: 'Название', value: 'name' },
  { title: 'Популяция', value: 'population' },
  { title: 'Климат', value: 'climate' },
]

export const PlanetPage = () => {
  const location = useLocation()

  return (
    <div className='planet-page container'>
      <GoBackBtn/> 
      <h3 className='page-title'>{location.pathname.replace('/', '')}</h3>
      
      <DataTable 
      header={tableHeader} 
      path={location.pathname}/>
      <Pagination/>
    </div>
  )
}

