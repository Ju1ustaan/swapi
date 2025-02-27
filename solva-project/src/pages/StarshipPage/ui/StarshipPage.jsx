import React, { useEffect } from 'react'

import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDetails } from 'entities/Details/model/detailsSlice'

import { Pagination } from 'entities/Pagination'
import { DataTable } from 'widgets/DataTable'
import { InfoBanner } from 'widgets/InfoBanner'
import GoBackBtn from 'shared/ui/GoBackBtn'

import './StarshipPage.css'

export const tableHeader = [
  { title: 'Имя', value: 'name' },
  { title: 'Стоимость в кредитах', value: 'cost_in_credits' },
]

export const StarshipPage = () => {
  const dispatch = useDispatch()
  const detailDeathStar = useSelector((state) => state.details.details)
  useEffect(() => {
    dispatch(fetchDetails('https://swapi.dev/api/starships/9/'))
  }, [])
  const location = useLocation()
  return (
    <div className='starships-page container'>
      <GoBackBtn/>
      <h3 className='page-title'>{location.pathname.replace('/', '')}</h3>
      
      <InfoBanner info={detailDeathStar}/>
      
      <DataTable 
      header={tableHeader} 
      path={location.pathname}/>
      <Pagination />
      
    </div>
  )
}
