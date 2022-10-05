import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mee.png'
import HeaderSocials from './HeaderSocials'
import {BsArrowDownCircleFill} from 'react-icons/bs'
import Nav from '../nav/Nav'

const Header = () => {
  return (
      <header className='header'>
        <div className="container header__container">
            <h5>Hello, I'm </h5>
            <h1>Oluyemi Olamide Samuel</h1><h4>(Samgenius)</h4>
            <h5 className='text-light'>Fullstack Developer, Graphics Designer and UI/UX Designer</h5>
            <CTA/>
            <HeaderSocials/>
            
            <div className="me">
            
              
                <center><img src={ME} alt="me" /></center>
              
            </div>
            

            <center>
            <a href="#about" className="scroll__down"><BsArrowDownCircleFill/></a>
            </center>

            
        </div>
      </header>
  )
}

export default Header