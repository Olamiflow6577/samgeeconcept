import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {GrSend} from 'react-icons/gr'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6av2thj', 'template_bz7susg', form.current, 'oxj-Sw-2UERJxwrwx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact" className='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <center>
              <HiOutlineMail className='social_icons'/>
              <h3>Email</h3>
              <h5>olamiflowsamsax13@gmail.com</h5>
              <a href="mailto:olamiflowsamsax13@gmail.com" target='_blank'>Send a message</a>
            </center>
          </article>
          <article className="contact_option">
            <center>
              <FaInstagram className='social_icons'/>
              <h3>Instagram</h3>
              <h5>samgenius_s.m.g</h5>
              <a href="https://instagram.com/samgenius_s.m.g/" target='_blank'>Send a message</a>
            </center>
          </article>
          <article className="contact_option">
            <center>
              <FaWhatsapp className='social_icons'/>
              <h3>Whatsapp</h3>
              <h5>+234 816 577 2049</h5>
              <a href="https://wa.me/2348165772049" target='_blank'>Send a message</a>
            </center>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your Name' required />
          <input type="email" name='email' placeholder='Enter your Email Address' required />
          <textarea name='message' rows="7" placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn'><GrSend /></button>
        </form>
      </div>
    </section>
  )
}

export default Contact