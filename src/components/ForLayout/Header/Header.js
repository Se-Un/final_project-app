import './Header.css';
import welcome from '../../../images/HeaderImg/welcome.svg';
import gorgeus from '../../../images/HeaderImg/gorgeus.svg';
import gorgeusV from '../../../images/HeaderImg/gorgeusvector.svg';
import sedona from '../../../images/HeaderImg/sedona.svg';
import btg from '../../../images/HeaderImg/becouse.svg';
import vbtg from '../../../images/HeaderImg/vectorbecouse.svg';
import vbtg2 from '../../../images/HeaderImg/vectorbecouse2.svg';
import vector from '../../../images/HeaderImg/vector.svg';



function Header() {
   return (
      <header className='header'>
         <div className='header__block header__block-1'>
            <img className='header__block-img-1' src={welcome} alt='Картинка' />
         </div>
         <div className='header__block header__block-2'>
            <img className='header__block-img header__block-img-2 header__block-img-2-1' src={gorgeusV} alt='Картинка' />
            <img className='header__block-img header__block-img-2' src={gorgeus} alt='Картинка' />
            <img className='header__block-img header__block-img-2 header__block-img-2-1' src={gorgeusV} alt='Картинка' />
         </div>
         <div className='header__block header__block-3'>
            <img className='header__block-img header__block-img-3' src={sedona} alt='Картинка' />
         </div>
         <div className='header__block header__block-4'>
            <img className='header__block-img header__block-img-4 header__block-img-4-1' src={vbtg} alt='Картинка' />
            <img className='header__block-img header__block-img-4' src={btg} alt='Картинка' />
            <img className='header__block-img header__block-img-4 header__block-img-4-2' src={vbtg2} alt='Картинка' />
         </div>
         <div className='header__block header__block-5'>
            <img className='header__block-img header__block-img-5' src={vector} alt='Картинка' />
         </div>
      </header>
   )
}
export default Header;
