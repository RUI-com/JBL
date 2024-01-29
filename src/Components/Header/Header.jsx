import React from 'react'
import './Header.css'
import logo from '../../assets/logo/logo-darkmode.svg'
import { Link } from 'react-router-dom';
import {IoCloseSharp} from 'react-icons/io5'
import {TiThMenu} from 'react-icons/ti'

import {ShowMenu,HeddingMenu,RmoveMenuMobile} from '../../../public/Animation/ShowMenu/ShowMenu'

export default function Header() {
  
  const mymain = [
    {id:1,href : '#home' , text:'Home',classtypename:'nav__link active-link'},
    {id:2,href : '#about' , text:'About',classtypename:'nav__link'},
    {id:3,href : '#favorite' , text:'Favorites',classtypename:'nav__link'},
    {id:4,href : '#model' , text:'Models',classtypename:'nav__link'},
  ]
  return (
  <>
  
  {/* // <!--==================== HEADER ====================--> */}
  
    <header className="header" id="header" >
      <nav className='nav container'>
        <Link to='/' className='nav__logo'><img src={logo}/></Link>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list'>
            {mymain.map((item)=>{
              return(
                <li key={item.id} className='nav__item'>
                <a href={item.href} className={item.classtypename} onClick={()=>{
                  RmoveMenuMobile()
                }}>{item.text}</a>
              </li>
              )
            })}
          </ul>
          <div className='nav__close' id='nav-close'  onClick={()=>{
          HeddingMenu();
        }}>
           <IoCloseSharp/>
          </div>
          

        </div>
        <div className='nav__toggle' id='nav-toggle' onClick={()=>{
         ShowMenu();
        }} >
           <TiThMenu/>
          </div>
      </nav>
    </header>
    <script>

    </script>
  </>

  )
}
