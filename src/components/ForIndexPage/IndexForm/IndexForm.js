import React from "react";
import './IndexForm.css';



export default class IndexForm extends React.Component {

   render() {
      return (
         <section className='form' >
            <h2 className='form__title'>Заинтересовались?</h2>
            <p className='form__text'>Укажите предполагаемые даты поездки,и мы покажем вам лучшие предложения гостиниц в седоне</p>
            <a className='form__button-index' href='https://www.booking.com/searchresults.ru.html?aid=376376&label=bookings-name-x9XjJRNqhtTGZ30YXWfPUQS410902425082%3Apl%3Ata%3Ap1%3Ap22.563.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9047065%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf23yREhrOV9YczHwt1OUN4&sid=a6d8473ffc7dc4c26c4dded08851b4bb&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.ru.html%3Faid%3D376376%3Blabel%3Dbookings-name-x9XjJRNqhtTGZ30YXWfPUQS410902425082%253Apl%253Ata%253Ap1%253Ap22.563.000%253Aac%253Aap%253Aneg%253Afi%253Atikwd-65526620%253Alp9047065%253Ali%253Adec%253Adm%253Appccp%253DUmFuZG9tSVYkc2RlIyh9Yf23yREhrOV9YczHwt1OUN4%3Bsid%3Da6d8473ffc7dc4c26c4dded08851b4bb%3Bsb_price_type%3Dtotal%26%3B&ss=%D0%A1%D0%B5%D0%B4%D0%BE%D0%BD%D0%B0%2C+%D0%A1%D0%A8%D0%90&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=ctljyf&ac_position=0&ac_langcode=ru&ac_click_type=b&dest_id=20007140&dest_type=city&place_id_lat=34.86578&place_id_lon=-111.79299&search_pageview_id=26dd92308d7700ec&search_selected=true&search_pageview_id=26dd92308d7700ec&ac_suggestion_list_length=1&ac_suggestion_theme_list_length=0' target="blank">Найти Гостиницу</a>
         </section >

      )
   }
}