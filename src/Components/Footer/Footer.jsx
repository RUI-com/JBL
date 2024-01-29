import './Footer.css'
import logo from '../../assets/logo/logo-darkmode.svg'
import {IoIosSend} from 'react-icons/io'
import { RiInstagramFill } from "react-icons/ri";

import { FaFacebook } from "react-icons/fa";


import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  const footerlinks1 = [
    {id:1, text:'Headphones'},
    {id:2, text:'Earphones'},
    {id:3, text:'Earbuds'},
    {id:4, text:'Accesories'},
  ]
  const footerlinks2 = [
    {id:1, text:'Product Help'},
    {id:2, text:'Register'},
    {id:3, text:'Updates'},
    {id:4, text:'Provides'},
  ]
  return (
    <footer className='footer'>
     <div className='footer__container container grid'>
     <div>
        <a href='#' ><img src={logo} className='footer__logo'/></a>

      </div>
      <div className='footer__data grid'>
      
        <div>
          <h3 className='footer__title'>
          Products
          </h3>
          <ul className='footer__links'>
            {footerlinks1.map((item)=>{
              return(
                <li key={item.id}>
                <a className='footer__link'>{item.text}</a>
              </li>
              )
            })}
           

          </ul>

        </div>
        <div>
          <h3 className='footer__title'>
          Support
          </h3>
          <ul className='footer__links'>
          {footerlinks2.map((item)=>{
              return(
                <li key={item.id}>
                <a className='footer__link'>{item.text}</a>
              </li>
              )
            })}

          </ul>

        </div>
        <div className='footer__group'>
        <form className='footer__form'>
          <input type='email' className='footer__input' placeholder='Email'/>
          <button className='footer__button button'>
          Subscribe <IoIosSend className='FaCirclePlay'/>
          </button>
        </form>
        <div className='footer__social'>
        <a href='https://www.instagram.com/' target='_blank' className='footer__social-link'><RiInstagramFill /></a>
          <a href='https://www.facebook.com/' target='_blank' className='footer__social-link'><FaFacebook /></a>
          <a href='https://www.youtube.com/' target='_blank' className='footer__social-link'><FaYoutube /></a>
        </div>
       </div>
        
       
      </div>
   

     </div>
     <span className='footer__copy'>
     JBL 2024 &#169;
     </span>

    </footer>
  )
}
