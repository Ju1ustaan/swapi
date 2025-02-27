import React from 'react'
import FooterLogo from 'shared/assets/img/Star_Wars_Logo.svg.png'

import './Footer.css'
import { GmailIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from 'shared/assets/icons'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <div className='footer__img'>
                    <img src={FooterLogo} alt="star wars logo" />
                </div>

                <div className='footer__content'>
                    <p className='footer__subtitle'>Контакты</p>
                    <ul>
                        <li className='footer__link footer__link-flex'>
                            <i><WhatsAppIcon width={'24px'} height={'24px'}/></i>
                            <span>WhatsApp:</span>
                            <span>+996 221 158 535</span>
                        </li>
                        <li className='footer__link footer__link-flex'>
                            <i><TelegramIcon width={'24px'} height={'24px'}/></i>
                            <span>Telegram:</span>
                            <span>@JulustaaL</span>
                        </li>
                        <li className='footer__link footer__link-flex'>
                            <i><GmailIcon width={'24px'} height={'24px'}/></i>
                            <span>Gmail:</span>
                            <span>luijulus@gmail.com</span>
                        </li>
                        <li className='footer__link footer__link-flex'>
                        <i className='phone__icon'><PhoneIcon width={'14px'} height={'14px'}/></i>
                        <span>Номер тел.:</span>
                        <span>+705 306 04 65</span>
                        </li>
                    </ul>
                </div>
                <div className='footer__content'>
                    <p className='footer__subtitle'>Полезные ссылки</p>
                    <ul>
                        <li className='footer__link'>GitHub</li>
                        <li className='footer__link'>SWAPI</li>
                        <li className='footer__link'>React</li>
                        <li className='footer__link'>react-router-dom</li>
                        <li className='footer__link'>react-redux</li>
                        <li className='footer__link'>@reduxjs/toolkit</li>
                        <li className='footer__link'>redux-persist</li>
                        <li className='footer__link'>axios</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
