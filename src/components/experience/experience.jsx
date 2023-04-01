import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"
import "./Experience.css";
import {Box} from "@mui/material";

const experience = () => {
  return (
    <Box component="section" id="experience"
    sx={{
      height:"100vh",
      width: "100vw",
    }}>
      <h5>What skills</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>
            Frontend Development
          </h3>
         <div className="experience__content">
           <article className="experience__details">
             <BsPatchCheckFill className="experience__detail-icon"/>
             <h4>HTML</h4>
             <small className="text-light">Experienced</small>
           </article>
           <article className="experience__details">
             <BsPatchCheckFill className="experience__detail-icon"/>
             <h4>HTML</h4>
             <small className="text-light">Experienced</small>
           </article>
           <article className="experience__details">
             <BsPatchCheckFill className="experience__detail-icon"/>
             <h4>HTML</h4>
             <small className="text-light">Experienced</small>
           </article>
           <article className="experience__details">
             <BsPatchCheckFill className="experience__detail-icon"/>
             <h4>HTML</h4>
             <small className="text-light">Experienced</small>
           </article>
         </div>
        </div>

        <div className="experience__backend">

        </div>
      </div>
    </Box>
  )
}

export default experience