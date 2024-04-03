import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";
import logo from '../../../images/MenuImg/logotype.svg';
import bgi from '../../../images/MenuImg/background.svg';



export default class Menu extends React.Component {

   render() {
      return (
         <nav className='menu'>
            <input className="menu__button" type="checkbox" id='checkbox' />
            <label className='menu__label' htmlFor='checkbox'>
               <span className='menu__button-style'></span>
            </label>
            <div className='menu__list'>
               <div className='menu__item menu__item-style'>
                  <Link to={'/'} className={'menu__link menu__link_color_brown'}>главная</Link>
               </div>
               <div className='menu__item menu__item-style'>
                  <Link to={'catalog'} className={'menu__link'}>фото и видео</Link>
               </div>
               <div className='menu__item menu__item-style menu__item-flex'>
                  <Link to={'form'} className={'menu__link'}>форма отзыва</Link>
               </div>
               <div className='menu__item menu__item-style menu__item-flex'>
                  <a href='https://htmlacademy.ru/' className='menu__link' target='blank'>html academy</a>
               </div>
               <div className='menu__item menu__item-img'>
                  <Link to={'/'} className={'menu__link-img'}>
                     <img className='menu__item-bg' src={bgi} alt={'logotype'} />
                     <img className='menu__item-logo' src={logo} alt={'logotype'} />
                  </Link>
               </div>
            </div>
         </nav>


      )
   }
}