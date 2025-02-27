import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AngleLeftIcon } from 'shared/assets/icons'
import './PagesNavigation.css'

export const NavigationChild = ({item, close}) => {
    const [show, setShow] = useState(true)
    useEffect(() => {
        if(!close){
            setShow(false)
        }
    }, [close])
  return (
   <div className='navigation__wrapper'>
   <p onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="navigation__item navigation__item-child">
        {item.title}
        <AngleLeftIcon width={'24px'} height={'24px'}/>
    </p>
    {
        show &&
        <ul className='navigation__childs' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {
                item.child.map((link) => (
                    <li key={link.path} >
                        <NavLink className='navigation__item' to={link.path}>{link.title}</NavLink>
                    </li>
                ))
            }
        </ul>
    }
   </div>
  )
}
