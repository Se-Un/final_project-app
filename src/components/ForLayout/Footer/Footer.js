import React from "react";
import './Footer.css';
import twitter from '../../../images/FooterImg/twitter.svg';
import youto from '../../../images/FooterImg/youtube.svg';
import face from '../../../images/FooterImg/facebook.svg';
import html from '../../../images/FooterImg/academy.svg';



export default class Footer extends React.Component {
   render() {
      return (
         <footer className='footer'>
            <a href='https://visitsedona.com/' className='footer__p'>
               <p className='footer__p-text'>#visitsedona</p>
            </a>
            <div className='footer__buttons'>
               <a className='footer__links' href='https://twitter.com/?lang=ru'><img className='footer__img' src={twitter} alt='Картинка' /></a>
               <a className='footer__links' href='https://www.youtube.com/'><img className='footer__img' src={youto} alt='Картинка' /></a>
               <a className='footer__links' href='https://ru-ru.facebook.com/'><img className='footer__img' src={face} alt='Картинка' /></a>
            </div>
            <a href='https://htmlacademy.ru/about' className='footer__autor'>
               <p className='footer__text'>Разработано</p>
               <img className='footer__img' src={html} alt='Картинка' />
            </a>
         </footer>

      )
   }
}