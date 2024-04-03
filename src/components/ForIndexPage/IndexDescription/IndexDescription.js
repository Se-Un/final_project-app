import './IndexDescription.css';
import React from "react";
import EndCard from './EndCard/EndCard';
import Card from './Card/Card';
import home from '../../../images/IndexPage/home.svg';
import burger from '../../../images/IndexPage/burger.svg';
import gift from '../../../images/IndexPage/gift.svg';
import vector from '../../../images/IndexPage/vectormobile2.svg'



export default class IndexPage extends React.Component {
   static defaultProps = {
      endCards: [],
      blocks: []
   }
   render() {
      const start = [
         {
            "id": 0,
            "title": 'седона - небольшой городок в аризоне, заслуживающий большего!',
            "text": 'рассмотрим 5 причин, по которым седона круче, чем гранд-каньон!',
         },
         {
            "id": 1,
            "title": 'настоящий городок',
            "text": 'седона не аттракцион для туристов, там течет своя жизнь',
            "number": '— №1 —',
         },
         {
            "id": 2,
            "title": 'там есть мост дьявола',
            "text": 'да, по нему можно пройти! если вы осмелитесь, конечно',
            "number": '— №2 —'
         },
      ];
      const endCards = [
         {
            "id": 3,
            "title": 'небольшая площадь',
            "text": 'все интересные места находятся очень близко',
            "number": '— №3 —'
         },
         {
            "id": 4,
            "title": 'красивая дорога',
            "text": 'ехать в седону из лас-вегаса совсем не скучно!',
            "number": '— №4 —'
         },
         {
            "id": 5,
            "title": 'мало туристов',
            "text": 'большинство едет в гранд каньон и толпится там',
            "number": '— №5 —'
         },
      ];
      const blocks = [
         {
            "id": 1,
            "photo": home,
            "title": 'Жилье',
            "text": 'Рекомендуем пожить в настоящем мотеле, все как в кино!',
         },
         {
            "id": 2,
            "photo": burger,
            "title": 'еда',
            "text": 'всегда заказывайте фирменный бургер, вы не разочаруютесь!',
         },
         {
            "id": 3,
            "photo": gift,
            "title": 'сувениры',
            "text": 'не только китайского, но и местного производства!',
         },
      ];
      return (
         <section className='desc'>
            <div className='desc__header'>
               <h2 className='desc__header-title'>{start[0].title}</h2>
               <p className='desc__header-text'>{start[0].text}</p>
            </div>
            <div className='desc__start'>
               <div className='desc__start-card'>
                  <img className={'desc__start-vector'} src={vector} alt='Картинка' />
                  <h3 className='desc__start-title'>{start[1].title}</h3>
                  <p className='desc__start-number'>{start[1].number}</p>
                  <p className='desc__start-text'>{start[1].text}</p>
               </div>
               <div className='desc__start-img'></div>
            </div>
            <div className='desc__cards'>
               {
                  blocks.map((card2) => {
                     return (
                        <div className='desc__card' key={card2.id}>
                           <Card
                              id={card2.id}
                              title={card2.title}
                              text={card2.text}
                              photo={card2.photo} />
                        </div>
                     )
                  })
               }
            </div>

            <div className='desc__middle'>
               <div className='desc__middle-card'>
                  <h3 className='desc__middle-title'>{start[2].title}</h3>
                  <p className='desc__middle-number'>{start[2].number}</p>
                  <p className='desc__middle-text'>{start[2].text}</p>
               </div>
               <div className='desc__middle-img'></div>
            </div>
            <div className='desc__end'>
               {
                  endCards.map((card) => {
                     return (
                        <div className='desc__endcards' key={card.id}>
                           <EndCard
                              id={card.id}
                              number={card.number}
                              title={card.title}
                              text={card.text} />
                        </div>
                     )
                  })
               }
            </div>
         </section>

      )
   }
}