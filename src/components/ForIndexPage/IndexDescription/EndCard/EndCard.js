import React from "react";
import './EndCard.css';



export default class EndCard extends React.Component {
   static defaultProps = {
      title: '',
      text: '',
      number: '',
   }
   render() {
      const { title, text, number, } = this.props;
      return (
         <div className={'endcard'} >
            <h3 className={'endcard__title'}>{title}</h3>
            <p className={'endcard__number'}>{number}</p>
            <p className={'endcard__text'}>{text}</p>
         </div >

      )
   }
}