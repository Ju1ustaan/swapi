import React from 'react'
import { useLocation } from 'react-router-dom'
import GoBackBtn from 'shared/ui/GoBackBtn'


import './AboutPage.css'

export const AboutPage = () => {
  const location = useLocation()
  console.log(location.pathname);
  
  return (
    <section id='about' className='about'>
      <div className="container">
      {location.pathname !== '/' && <GoBackBtn/>}
        <div className="about__wrapper">
          
          <h3 className='about__title'>О сайте</h3>
          <p className='about__text'>Этот веб-приложение разработано на основе SWAPI (The Star Wars API) — открытого API, предоставляющего доступ к информации о вселенной "Звёздных войн". Оно позволяет пользователям просматривать сведения о персонажах, космических кораблях и планетах в удобном интерактивном формате.
          </p>
          <h3 className='about__title'>Функциональные возможности</h3>
          <p className='about__text'>
            Главная страница содержит три интерактивные карточки, позволяющие перейти к разделам "Персонажи" (People), "Корабли" (Starships) и "Планеты" (Planets).
            Каталоговые страницы реализованы в формате таблиц с пагинацией, обеспечивающей удобную навигацию по данным.
            Детальные страницы предоставляют расширенную информацию по каждому объекту, доступ к которым осуществляется по клику на соответствующую строку в таблице.
            Многоуровневая навигация, реализованная с использованием react-router-dom, позволяет удобно перемещаться между разделами и их дочерними страницами.
          </p>
          <h3 className='about__title'>
            Технологический стек
          </h3>
          <p className='about__text'>
            Приложение построено на React с использованием современного инструментария для управления состоянием и асинхронного взаимодействия с API:
          </p>
          <ul className='about__list'>
            <li className='about__lists'><span>-react-router-dom</span> – для клиентской маршрутизации с поддержкой вложенных маршрутов.</li>
            <li className='about__lists'><span>-@reduxjs/toolkit и react-redux</span> – для централизованного управления состоянием и хранения загруженных данных.</li>
            <li className='about__lists'><span>-axios</span> – для выполнения HTTP-запросов к SWAPI.</li>
            <li className='about__lists'><span>-redux-persist</span> – для сохранения состояния в локальном хранилище и минимизации повторных запросов.</li>
            <li className='about__lists'><span>-@testing-library/react</span> – для модульного и интеграционного тестирования компонентов.</li>
          </ul>
          <p className='about__text'>
            Благодаря использованию современных подходов в разработке, приложение обеспечивает высокую производительность, удобную навигацию и быструю загрузку данных.
          </p>
        </div>
      </div>
    </section>
  )
}
