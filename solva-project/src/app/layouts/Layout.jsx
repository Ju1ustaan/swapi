import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { PagesNavigation } from 'widgets/PagesNavigation'
import { useDispatch } from 'react-redux'
import { removePagination } from 'entities/Pagination/model/paginationSlice'
import { Footer } from 'shared/ui/Footer'

const Layout = () => {
  const token = localStorage.getItem('token')

  
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if(!token){
      navigate('/auth')
    }
  }, [token])


  useEffect(() => {
    dispatch(removePagination())
  }, [location])
  return (
    <div>
        <PagesNavigation/>
        <section>
            <Outlet/>
        </section>
        <Footer/>
    </div>
  )
}

export default Layout