import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {BsFront} from 'react-icons/bs'
import {BsBack} from 'react-icons/bs'
import {SiAdobe} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience" className='experience'>
      <h5>Skills Acquired</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        
          <div className="frontend">
            <h3><BsFront />Full stack Developement</h3>
            <div className="experience__content">
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>PYTHON</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>MY SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>PYTHON</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
              <div>
              <h4>PYTHON</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
            </div>
          </div>




          <div className="graphics">
            <h3><SiAdobe />Graphics Design & UI/UX Designs</h3>
            <div className="experience__content">
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
              <div>
                <h4>COREL DRAW</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
              <div>
                <h4>ADOBE PHOTOSHOP</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>ADOBE ILLUSTRATOR</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>BLENDER</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>FIGMA</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>AFTER EFFECT</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill classname='experience__details-icon'/>
                <div>
                  <h4>PREMIERE PRO</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
              <div>
              <h4>PYTHON</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience