import React from 'react'
import "./Portfolio.css"
import ME from "../../assets/banner2.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div>
        <article className="portfolio__item">
          <div className="portfolio__item-image"> <img src={ME} alt="img" />  </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> <img src={ME} alt="img" /> </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> <img src={ME} alt="img" /> </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

 
      </div>
    </section>
  )
}

export default Portfolio