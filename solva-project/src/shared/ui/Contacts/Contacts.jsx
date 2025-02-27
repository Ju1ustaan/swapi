import React from 'react'
import { useLocation } from 'react-router-dom'
import GoBackBtn from '../GoBackBtn'
import { GmailIcon, TelegramIcon, WhatsAppIcon } from 'shared/assets/icons'
import './Contacts.css'

export const Contacts = () => {
  const location = useLocation()
  return (
    <section id='contacts' className='contacts'>
    <div className="container">
    {location.pathname !== '/' && <GoBackBtn/>}
      <div className="contacts__wrapper">
        <a 
        className='contacts__link' 
        href="https://wa.me/996221158535?text=Привет,%20хочу%20узнать%20подробнее!" 
        target="_blank" 
        rel="noopener noreferrer">
        Напиши в WhatsApp
        <i><WhatsAppIcon width={'36px'} height={'36px'}/></i>
        </a>
        <a 
        className='contacts__link' 
        href="https://t.me/JulustaanL" 
        target="_blank" 
        rel="noopener noreferrer">
        Напиши в Telegram
        <i><TelegramIcon width={'36px'} height={'36px'}/></i>
        </a>
        <a 
        className='contacts__link' 
        href="https://mail.google.com/mail/?view=cm&to=luijulus@gmail.com&su=Тема&body=Текст сообщения" 
        target="_blank" 
        rel="noopener noreferrer">
        Напиши на почту
        <i><GmailIcon width={'36px'} height={'36px'}/></i>
        </a>
      </div>
    </div>
  </section>
  )
}
