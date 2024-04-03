import React, { useEffect, useState } from "react";
import './Form.css'
import phone from '../../../images/Form/phone.svg';
import email from '../../../images/Form/mail.svg';


function Form() {
   const [tel, setTel] = useState('');
   const [mail, setMail] = useState('');

   const [telDirty, setTelDirty] = useState(false);
   const [mailDirty, setMailDirty] = useState(false);

   const [telError, setTelError] = useState('Что-то пошло не так');
   const [mailError, setMailError] = useState('Что-то пошло не так');

   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if (mailError || telError) {
         setFormValid(false)
      } else {
         setFormValid(true)
      }
   }, [mailError, telError])

   const mailHandler = (e) => {
      setMail(e.target.value)
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(e.target.value).toLowerCase())) {
         setMailError('Невверно введен email')
      } else {
         setMailError('')
      }
   };

   const telHandler = (e) => {
      setTel(e.target.value)
      if (e.target.value.length < 11 || e.target.value.length > 11) {
         setTelError('Невверно введен телефон');
         if (e.target.value) {
            setTelError('Что-то пошло не так')
         }
      } else {
         setTelError('')
      }
   };


   const blurHandler = (e) => {
      // eslint-disable-next-line default-case
      switch (e.target.name) {
         case 'tel':
            setTelDirty(true);
            break;
         case 'mail':
            setMailDirty(true);
            break;
      }
   }

   return (
      <section className='form'>
         <div className='form__header'>
            <h2 className='form__title'>Оставьте свой отзыв</h2>
            <p className='form__text'>Помогите нашим отелям стать лучше! оставьте отзыв о них, а также о посещенных вами достопримечательностях</p>
         </div>
         <form className='form__container'>

            <div className='form__block'>
               <div className='form__checkbox'>
                  <h2 className='form__checkbox-title'>Ваше Общее впечатление: </h2>

                  <label className='form__checkbox-label form__label'>
                     <input className='form__checkbox-item' type='checkbox' />
                     <span className='form__checkbox-style'></span>
                     <span className='form__checkbox-span'>Скорее положительное</span>
                  </label>

                  <label className='form__checkbox-label'>
                     <input className='form__checkbox-item' type='checkbox' />
                     <span className='form__checkbox-style'></span>
                     <span className='form__checkbox-span'>Скорее отрицательное</span>
                  </label>

                  <label className='form__checkbox-label'>
                     <input className='form__checkbox-item' type='checkbox' />
                     <span className='form__checkbox-style'></span>
                     <span className='form__checkbox-span'>Затрудняюсь ответить</span>
                  </label>
               </div>

               <div className='form__line'></div>

               <div className='form__input'>
                  <h2 className='form__input-title'>Представьтесь: </h2>

                  <label className='form__input-label form__label-1'>
                     <span className='form__input-span'>ИМЯ*: </span>
                     <input className='form__input-item' type='text' placeholder='Ваше Имя' name='firstName' />
                  </label>

                  <label className='form__input-label'>
                     <span className='form__input-span'>ФАМИЛИЯ*:</span>
                     <input className='form__input-item' type='text' placeholder='Ваша Фамилия' name='LastName' />
                  </label>

                  <label className='form__input-label'>
                     <span className='form__input-span'>Отчество:</span>
                     <input className='form__input-item' type='text' placeholder='Ваше Отчество' />
                  </label>
               </div>
            </div>

            <div className='form__contact'>

               <div className='form__contact-title'>
                  <div className='form__contact-line'></div>
                  <h2 className='form__contact-h2'>Контактная информация: </h2>
                  <div className='form__contact-line'></div>
               </div>

               <div className='form__contact-content'>
                  <label className='form__contact-label'>
                     <span className='form__contact-span form__contact2'><span className='form__span-tablet'>Контактный</span>Телефон*: </span>
                     <div className='form__contact-tablet'>
                        {(telDirty && telError) && <div style={{ color: 'red' }}>{telError}</div>}
                        <input value={tel} onChange={e => telHandler(e)} onBlur={e => blurHandler(e)} className='form__contact-item' type='tel' placeholder='Введите ваш телефон' name='tel' />
                        <span className='form__contact-block'>
                           <img className='form__contact-img' src={phone} alt='Картинка' />
                        </span>
                     </div>
                  </label>

                  <label className='form__contact-label'>
                     <span className='form__contact-span'>Электронная почта*: </span>
                     <div className='form__contact-tablet'>
                        {(mailDirty && mailError) && <div style={{ color: 'red' }}>{mailError}</div>}
                        <input value={mail} onChange={e => mailHandler(e)} onBlur={e => blurHandler(e)} className='form__contact-item' type='email' placeholder='Введите ваш email' name='mail' />
                        <span className='form__contact-block'>
                           <img className='form__contact-img' src={email} alt='Картинка' />
                        </span>
                     </div>
                  </label>
               </div>

            </div>

            <div className='form__attraction'>

               <div className='form__attraction-title'>
                  <div className='form__attraction-line'></div>
                  <h2 className='form__attraction-h2'>посещенные достопримечательности: </h2>
                  <div className='form__attraction-line'></div>
               </div>

               <div className='form__attraction-content'>
                  <label className='form__attraction-label form__attraction-grid1'>
                     <input className='form__attraction-item' type='checkbox' />
                     <span className='form__attraction-style'></span>
                     <span className='form__attraction-span'>Мост Дьявола</span>
                  </label>

                  <label className='form__attraction-label form__attraction-grid2'>
                     <input className='form__attraction-item' type='checkbox' />
                     <span className='form__attraction-style'></span>
                     <span className='form__attraction-span'>Гора-Колокол</span>
                  </label>

                  <label className='form__attraction-label form__attraction-grid3'>
                     <input className='form__attraction-item' type='checkbox' />
                     <span className='form__attraction-style'></span>
                     <span className='form__attraction-span'>Слайд-парк</span>
                  </label>

                  <label className='form__attraction-label form__attraction-grid4'>
                     <input className='form__attraction-item' type='checkbox' />
                     <span className='form__attraction-style'></span>
                     <span className='form__attraction-span'>Красные скалы</span>
                  </label>
               </div>
            </div>

            <div className='form__emotion'>
               <div className='form__emotion-title'>
                  <div className='form__emotion-line'></div>
                  <h2 className='form__emotion-h2'>Опишите свои эмоции: </h2>
                  <div className='form__emotion-line'></div>
               </div>

               <textarea className='form__emotion-textarea' placeholder='Опишите подробно все свои восторги'></textarea>
            </div>

            <div className='form__button'>
               <button className='form__button-submit' type='submit' disabled={!formValid}>отправить отзыв</button>
               <p className='form__button-text'>* — обязательные поля</p>
            </div>
         </form>
      </section>

   )
}
export default Form;