import React from "react";
import './Card.css';



export default class Card extends React.Component {
   static defaultProps = {
      title: '',
      text: '',
      photo: ''
   }
   render() {
      const { title, text, photo } = this.props;
      return (
         <div className={'card'} >
            <img className={'card__img'} src={photo} alt='Картинка' />
            <h3 className={'card__title'}>{title}</h3>
            <p className={'card__text'}>{text}</p>
         </div >

      )
   }
}