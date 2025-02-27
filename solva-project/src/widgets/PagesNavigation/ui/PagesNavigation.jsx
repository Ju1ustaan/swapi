import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION_CONST } from "shared/consts/routes";
import { LogOutIcon } from "shared/assets/icons";
import { NavigationChild } from "..";
import "./PagesNavigation.css";



export const PagesNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [show, setShow] = useState(false);

  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/auth')
  }
  
  return (
    <nav className={`navigation ${show ? "navigation__show" : "navigation__hide"}`}>
      <p className="navigation__title">
        Навигация по страницам <span>swapi</span> 
      </p>
      <button onClick={logOut} className="navigation__logout-btn">
        <span>Выйти</span>
      <i className="navigation__logout-icon"><LogOutIcon width={'18px'} height={'18px'}/></i>
      </button>
      <ul className="navigation__list">
        {NAVIGATION_CONST.map((item) => (
          item.title ?
            <li key={item.title} >
              {
                !item.child ?
                (item.href === '#contacts' || item.href === '#about' || item.href === '#') && location.pathname === '/'
                  ?
                  <a className="navigation__item" href={`${item.href}`}>
                    {item.title}
                  </a>
                  :
                  <NavLink className="navigation__item" to={item.path}>
                    {item.title}
                  </NavLink> :
                  <NavigationChild item={item} close={show}/>
              }
            </li> : null
        ))}
      </ul>
      <button onClick={() => setShow(!show)} className="navigation__hidden">
        {show ? "Скрыть" : "Показать"}
      </button>
    </nav>
  );
};
