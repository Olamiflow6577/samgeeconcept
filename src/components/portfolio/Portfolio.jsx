import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Creative Food website',
    github: '#',
    demo: 'https://motunskitchen.netlify.app',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Creative Food website',
    github: '#',
    demo: 'https://motunskitchen.netlify.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Creative Food website',
    github: '#',
    demo: 'https://motunskitchen.netlify.app',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Creative Food website',
    github: '#',
    demo: 'https://motunskitchen.netlify.app',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Creative Food website',
    github: '#',
    demo: 'https://motunskitchen.netlify.app',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Creative Food website',
    github: '#',
    demo: 'https://motunskitchen.netlify.app',
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              <center>
                <img src={image} alt={title} className="item-image" />
              </center>
              </div>
              <center>
                <h3>{title}</h3>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </center> 
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio