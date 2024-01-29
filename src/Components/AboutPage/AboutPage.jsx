import React from 'react';
import { Link } from 'react-router-dom';
import {FaInfoCircle} from 'react-icons/fa';
import aboutimg from '../../assets/img/about-img.png';
import './AboutPage.css';
export default function AboutPage() {
  return (
    // <!--==================== ABOUT ====================-->
    <section className="about section" id="about">
       <div className='about__container container grid'>
        <div className='about__data'>
            <h2 className='section__title'>
            MORE ABOUT US
            </h2>
            <p className='about__description'>         
            Enjoy award-winning JBL sound with 
            wireless listening freedom and a sleek, 
            streamlined design with comfortable 
            cushioned earcups that deliver premium 
            playback for the user.
            </p>
            <Link to='#' className='button'>Know More <FaInfoCircle className='FaCirclePlay'/></Link>
        </div>
        <img src={aboutimg} className='about__img'/>
       </div>
    </section>
  )
}
