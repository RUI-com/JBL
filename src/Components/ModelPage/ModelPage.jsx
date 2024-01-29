import React from 'react'
import modelimg from '../../assets/img/model-img.png'
import tooltipimg from '../../assets/img/tooltip-right.svg'
import {FaCirclePlay} from 'react-icons/fa6'
import'./ModelPage.css'
export default function ModelPage() {
  const mytooltip = [
    {id:1,text : 'Best Comfort',classthename:'model__tooltip model__tooltip-1'},
    {id:2,text : 'Easy Adjustment',classthename:'model__tooltip model__tooltip-2'},
    {id:3,text : 'Fast Charge',classthename:'model__tooltip model__tooltip-3'},
    {id:4,text : 'Custom Audio',classthename:'model__tooltip model__tooltip-4'},
  ]
  return (
    // <!--==================== MODEL ====================-->
    <section className="model section" id="model">
       <h2 className='section__title'>
       MODEL SPECIFICATIONS
       </h2>
       <div className='model__container container grid'>
        <div className='model__content'>
          <img src={modelimg} className='model__img'/>
        {mytooltip.map((item)=>{
          return(
          <div key={item.id} className={item.classthename}>
            <img src={tooltipimg} className='model__tooltip-img'/>
            <span className='model__tooltip-text'>{item.text}</span>
          </div>
          )
        })}
          

        </div>
        <a href='' className='model__button button'>Buy Now <FaCirclePlay className='FaCirclePlay'/></a>
       </div>
    </section>
  )
}
