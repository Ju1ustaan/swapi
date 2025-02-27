import React from 'react'
import { ROUTES_CONST } from 'shared/consts/routes'
import { Card } from 'widgets/Card'
import { AboutPage } from 'pages/AboutPage'

import './HomePage.css'
import { Contacts } from 'shared/ui/Contacts'
export const HomePage = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        {
          ROUTES_CONST.map((item) => (
              item.title && item.path !== '/' ?
              <Card key={item.path} title={item.title} path={item.path} />: null
            )) 
        }

      </div>
      <AboutPage/>
      <Contacts/>
    </div>
  )
}
