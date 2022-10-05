import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {BsFillSuitHeartFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className='footer__logo'>SAMGENIUS CONCEPT</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com/samgenius13/"><BsFacebook/></a>
          <a href="https://instagram.com/samgenius_s.m.g/"><BsInstagram/></a>
          <a href="https://twitter.com/olamide_sax"><BsTwitter /></a>
          <a href="https://wa.me/08165772049"><BsWhatsapp/></a>
          <a href="https://github.com/Olamiflow6577"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/samgenius/"><BsLinkedin /></a>
          <a href="https://github.com/Olamiflow6577"><BsDribbble/></a>
        </div>

       
        <p class="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script>  All rights reserved | This template is made <BsFillSuitHeartFill /> by <a href="#" target="_blank">Sam-Genius</a> </p>
      </footer>
    </section>
  )
}

export default Footer