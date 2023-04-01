import React from 'react'
import ME from "../../assets/banner2.jpg"
import {FaAward} from "react-icons/fa"

import "./About.css"

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />  
          </div> 
        </div>
        <div className="about__content">
         <div className="about__cards">
           
           <article className="about__card">
             <FaAward className="about__icon"/>
             <h5>React</h5>
             <small>1+ year</small>
           </article>

           <article className="about__card">
             <FaAward className="about__icon"/>
             <h5>Node</h5>
             <small>3+ Years Working</small>
           </article>

           <article className="about__card">
             <FaAward className="about__icon"/>
             <h5>Redux</h5>
             <small>3+ Years Working</small>
           </article>

         </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque illum quia earum porro repudiandae maiores, unde, hic delectus expedita odio facere voluptate nemo consectetur laudantium, similique amet animi aperiam possimus.
          </p>
        </div>
      </div>
    </section>
  )
}

export default about