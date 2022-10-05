import React from 'react'
import './about.css'
import ME from '../../assets/meabout.jpg'
import {BsAward} from 'react-icons/bs'
import {FaProjectDiagram} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'

const about = () => {
  return (
    
    <section id="about">
      <h5>Did you know?</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="about image" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working
              </small>
            </article>
            <article className="about__card">
              <HiUserGroup className='about__icon'/>
              <h5>Clients</h5>
              <small>350+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaProjectDiagram className='about__icon'/>
              <h5>Projects</h5>
              <small>500+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis quae minus voluptatibus perspiciatis nostrum saepe harum quos
            sint fuga itaque, dolores consectetur natus qui earum debitis tenetur
            quas culpa sunt.</p>

          <center><a href="#contact" className='btn btn-primary'>Let's Chat</a></center>

        </div>
      </div>
    </section>
  )
}

export default about