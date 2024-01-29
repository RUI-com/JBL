import React from 'react'
import './SponsorPage.css'
import sponsorimg1 from '../../assets/img/sponsor-1.png'
import sponsorimg2 from '../../assets/img/sponsor-2.png'
import sponsorimg3 from '../../assets/img/sponsor-3.png'
import sponsorimg4 from '../../assets/img/sponsor-4.png'
export default function SponsorPage() {
  return (
    // <!--==================== SPONSOR ====================-->
    <section className="sponsor section">
       <div className='sponsor__container container grid'>
        <img src={sponsorimg1} className='sponsor__img'/>
        <img src={sponsorimg2} className='sponsor__img'/>
        <img src={sponsorimg3} className='sponsor__img'/>
        <img src={sponsorimg4} className='sponsor__img'/>
       </div>
    </section>
  )
}
