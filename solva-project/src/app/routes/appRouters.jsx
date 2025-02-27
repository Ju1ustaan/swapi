import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ROUTES_CONST } from 'shared/consts/routes'
import Layout from 'app/layouts/Layout'
import { NotFoundPage } from 'pages/NotFoundPage'
import { AuthPage } from 'pages/AuthPage'

const AppRouters = () => {


  return (
    <Router>
        <Routes>
            <Route element={<Layout/>}>
            {
                ROUTES_CONST.map((item) => (
                    <Route 
                    index={item.path === '/'} 
                    key={item.path} 
                    path={item.path} 
                    element={item.element} />
                ))
            }
            <Route path='/*' element={<NotFoundPage/>}/>
            </Route>
            <Route path='/auth' element={<AuthPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouters