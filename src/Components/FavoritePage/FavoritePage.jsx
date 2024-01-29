import React from 'react'
import './FavoritePage.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';


export default function FavoritePage() {
    const breackpoint = {
     
        768:{
            slidesPerView:3,
            spaceBetweenSlides:30
        },
        480:{
            slidesPerView:2,
            spaceBetweenSlides:10
        },
        0:{
            slidesPerView:1,
            spaceBetweenSlides:0
        },
        
        
    }
    const myprodect = [
        {id:1,text : 'Black Model' , image:'./assets/img/favorite-1.png'},
        {id:2,text : 'White Model' , image:'./assets/img/favorite-2.png'},
        {id:3,text : 'Red Model' , image:'./assets/img/favorite-3.png'},
        {id:4,text : 'Teal Model' , image:'./assets/img/favorite-4.png'},
      ]
  return (
    // <!--==================== FAVORITE ====================-->
  
    <section className="favorite section" id="favorite">
       <h2 className='section__title'>
       CHOOSE YOUR FAVORITE
       </h2>
       <div className='favorite__container'>
        
        <Swiper className='favorite__swiper'
      // install Swiper modules
      
      
      slidesPerView='auto'
     
    
      loop={true}
      centeredSlides='auto'
      grabCursor={true}
      breakpoints={breackpoint}
      
      
      
      
      
   
    >
        
            {myprodect.map((item)=>{
                return(
                
                     <SwiperSlide className='favorite__article'  key={item.id}>
              
              <img src={item.image} className='favorite__img'/>
              <span className='favorite__model'>{item.text}</span>
             

            
         
          </SwiperSlide>
              
            
                )
            })}
                

                
       
    </Swiper>
          </div>  
       
    </section>
   
   
  )
}
