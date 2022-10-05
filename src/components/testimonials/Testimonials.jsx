import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {MdSwipe} from 'react-icons/md'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    client_image: AVTR1,
    client_name: 'George Nelson',
    client_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem quibusdam aliquam sapiente earum. Illo nihil laboriosam placeat, quas error doloribus atque harum veritatis ab quam facere, provident voluptate animi.',
  },
  {
    client_image: AVTR2,
    client_name: 'Sam Thompson',
    client_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem quibusdam aliquam sapiente earum. Illo nihil laboriosam placeat, quas error doloribus atque harum veritatis ab quam facere, provident voluptate animi.',
  },
  {
    client_image: AVTR3,
    client_name: 'Robin Newton',
    client_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem quibusdam aliquam sapiente earum. Illo nihil laboriosam placeat, quas error doloribus atque harum veritatis ab quam facere, provident voluptate animi.',
  },
  {
    client_image: AVTR4,
    client_name: 'Adams Desmond',
    client_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem quibusdam aliquam sapiente earum. Illo nihil laboriosam placeat, quas error doloribus atque harum veritatis ab quam facere, provident voluptate animi.',
  },
]

const Testimonials = () => {
  return (
    <center>
    <section id="testimonial" className='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      modules={[ Pagination ]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({client_image, client_name, client_review}, index) => {
              return(
                <SwiperSlide key={index} className='testimonials'>
                  <div className="client__avatar">
                    <center>
                    <img src={client_image} alt="" className="client__image" />
                    </center>
                  </div>

                      <h5 className='client_name'>{client_name}</h5>
                  <div className="client__review">
                        {client_review}
                        <br></br><br></br>
                        <MdSwipe className='swipe'/>
                  </div>
                </SwiperSlide>
              )
          })
        }
      </Swiper>
    </section>
    </center>
  )
}

export default Testimonials