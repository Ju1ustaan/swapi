import React from 'react'

import { useLocation } from 'react-router-dom'

import { DataTable } from 'widgets/DataTable'
import { Pagination } from 'entities/Pagination'
import GoBackBtn from 'shared/ui/GoBackBtn'

import { FavoriteSlider } from 'widgets/FavoriteSlider'

import DarthVader from 'shared/assets/img/DarthVader.webp'
import LukeSkywalker from 'shared/assets/img/LukeSkywalker.jpeg'
import LeiaOrgana from 'shared/assets/img/LeiaOrgana.webp'
import ObiWanKenobi from 'shared/assets/img/Obi-WanKenobi.webp'
import AnakinSkywalker from 'shared/assets/img/AnakinSkywalker.webp'
import HanSolo from 'shared/assets/img/HanSolo.webp'
import droid from 'shared/assets/img/C-3PO.webp'
import droid2 from 'shared/assets/img/R5-D4.webp'
import './PeoplePage.css'


export const tableHeader = [
  { title: 'Имя', value: 'name' },
  { title: 'Пол', value: 'gender' },
  { title: 'Дата рождения', value: 'birth_year' },
]

export const SliderContent = [
  { img: DarthVader, path: '4/' },
  { img: LukeSkywalker, path: '1/' },
  { img: LeiaOrgana, path: '5/' },
  { img: HanSolo, path: '14/' },
  { img: ObiWanKenobi, path: '10/' },
  { img: droid, path: '2/' },
  { img: droid2, path: '8/' },
  { img: AnakinSkywalker, path: '11/' },
]


export const PeoplePage = () => {
  const location = useLocation()
  
  return (
    <div className='people-page container'>
      <GoBackBtn/>
      <h3 className='page-title'>{location.pathname.replace('/', '')}</h3>
      
      <FavoriteSlider content={SliderContent}/>
      
      <DataTable 
      header={tableHeader} 
      path={location.pathname}/>
      <Pagination/>
    </div>
  )
}
