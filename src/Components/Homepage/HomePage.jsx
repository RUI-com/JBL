import React from 'react'
import './HomePage.css'
import Homeimg from '../../assets/img/home-img.png'
import Hometooltip from '../../assets/img/tooltip-right.svg';
import {FaCirclePlay} from 'react-icons/fa6'
// Social icon
import { RiInstagramFill } from "react-icons/ri";

import { FaFacebook } from "react-icons/fa";


import { FaYoutube } from "react-icons/fa";

export default function HomePage() {
  return (
  
    <section className="home section" id="home">
       <div className='home__container container grid'>
        <div className='home__content'>
          <img src={Homeimg} alt='' className='home__img'/>
          <h1 className='home__title'>
            <span>J</span>
            <span>B</span>
            <span>L</span>
          </h1>
          <div className='home__tooltip'>
            <img className='home__tooltip-img' src={Hometooltip}/>
            <span className='home__tooltip-text'>$150</span>
          </div>
        </div>

      <a href='#' className='home__button button'>Buy Now <FaCirclePlay className='FaCirclePlay'/></a>

      <div className='home__social'>
        <span className='home__social-text'>Follow us</span>
        <div className='home__social-links'>
          <a href='https://www.instagram.com/' target='_blank' className='home__social-link'><RiInstagramFill /></a>
          <a href='https://www.facebook.com/' target='_blank' className='home__social-link'><FaFacebook /></a>
          <a href='https://www.youtube.com/' target='_blank' className='home__social-link'><FaYoutube /></a>

        </div>
      </div>



       </div>
    </section>

   
    
    

  )
}
