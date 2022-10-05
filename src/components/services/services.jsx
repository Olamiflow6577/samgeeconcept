import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services" className='services'>
      <h5>What I offer?</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <center><h3>WEB/APP DEVELOPMENT</h3></center>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
          
        </article>

        <article className="service">
        <div className="service__head">
          <center><h3>GRAPHICS DESIGN</h3></center>
        </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
          
        </article>

        <article className="service">
        <div className="service__head">
          <center><h3>UI/UX Design</h3></center>
        </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
          
        </article>
      </div>
    </section>
  )
}

export default services