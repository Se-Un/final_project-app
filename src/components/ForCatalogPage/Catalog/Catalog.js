import React from "react";
import './Catalog.css';


export default class Catalog extends React.Component {
   static defaultProps = {
      autor: []
   }
   render() {
      const autor = [
         {
            id: 0,
            title: 'неродные просторы',
            autor: 'Автор фото: Борис'
         },
         {
            id: 1,
            title: 'Местная растительность',
            autor: 'Автор фото: Сергей'
         },
         {
            id: 2,
            title: 'Дорога на север',
            autor: 'Автор фото: Петр'
         },
         {
            id: 3,
            title: 'Мост дьявола',
            autor: 'Автор фото: Антон'
         }
      ]


      return (
         <section className='catalog-page' >
            <div className='catalog__header'>
               <h2 className='catalog__header-title'>Фото и видео</h2>
               <p className='catalog__header-text'>Не можете решиться на путешествие из-за курса?<br />Фотографии помогут вам забыть о политике и экономике.</p>
            </div>
            <div className='catalog__galary'>
               <div className='catalog__galary-photo catalog__photo1'>
                  <div className='catalog__galary-style'>
                     <p className='catalog__galary-autor'>
                        <span className='catalog__galary-title'>{autor[0].title}</span>
                        <span className='catalog__galary-names'>{autor[0].autor}</span>
                     </p>
                     <figure className='catalog__galary-like'>
                        <div className='catalog__galary-icon'></div>
                        <figcaption className='catalog__galary-count'>1350</figcaption>
                     </figure>
                  </div>
               </div>
               <div className='catalog__galary-photo catalog__photo2'>
                  <div className='catalog__galary-style'>
                     <p className='catalog__galary-autor'>
                        <span className='catalog__galary-title'>{autor[1].title}</span>
                        <span className='catalog__galary-names'>{autor[1].autor}</span>
                     </p>
                     <figure className='catalog__galary-like'>
                        <div className='catalog__galary-icon'></div>
                        <figcaption className='catalog__galary-count'>143</figcaption>
                     </figure>
                  </div>
               </div>
               <div className='catalog__galary-photo catalog__photo3'>
                  <div className='catalog__galary-style'>
                     <p className='catalog__galary-autor'>
                        <span className='catalog__galary-title'>{autor[2].title}</span>
                        <span className='catalog__galary-names'>{autor[2].autor}</span>
                     </p>
                     <figure className='catalog__galary-like'>
                        <div className='catalog__galary-icon'></div>
                        <figcaption className='catalog__galary-count'>96</figcaption>
                     </figure>
                  </div>
               </div>
               <div className='catalog__galary-photo catalog__photo4'>
                  <div className='catalog__galary-style'>
                     <p className='catalog__galary-autor'>
                        <span className='catalog__galary-title'>{autor[3].title}</span>
                        <span className='catalog__galary-names'>{autor[3].autor}</span>
                     </p>
                     <figure className='catalog__galary-like'>
                        <div className='catalog__galary-icon'></div>
                        <figcaption className='catalog__galary-count'>254</figcaption>
                     </figure>
                  </div>
               </div>
            </div>
            <div className='catalog__footer'>
               <h2 className='catalog__footer-title'>Все еще сомневаетесь?</h2>
               <p className='catalog__footer-text'>Смотрите видеопрезентацию и скорее за билетами, пока они не подорожали в очередной раз</p>
            </div>

         </section>

      )
   }
}