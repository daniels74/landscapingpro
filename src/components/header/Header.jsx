import React from "react";
// import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Services from "./Services";
import RecentProjectsCarousel from "./RecentProjectsCarousel";

import "./Header.css";

//-----------------UI
import { Box } from "@mui/material";
import Title from "./Title";

const Header = () => {
  return (
    <Box sx={{
      position: "relative",
      height: "90vh",
      width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}>
      <Box
      component="header"
      id="header"
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        overflow: "hidden",
        // backgroundColor: "blue"
      }}
    >
      <Title />
      <Box
        sx={{
          // position: "relative",
          // top: "2rem",
          height: "85%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          background: "rgb(8,13,42)",
          background: "linear-gradient(90deg, rgba(8,13,42,1) 0%, rgba(43,64,78,1) 50%, rgba(8,13,42,1) 100%)",
          borderRadius: "1rem",
          borderStyle: "solid",
          borderWidth: ".2px",
          borderColor: "blue",
        }}
      >
         <Box 
          component={Services}
          sx={{
          height: "40%",
          width: "100%",
          backgroundColor: "yellow"
        }}/>
        <Box
         component={RecentProjectsCarousel}
         sx={{
          position: "relative",
          height: "40%",
          width: "100%",
          backgroundColor: "yellow"
        }}></Box>
        {/* <CTA /> */}
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </Box>
      </Box>
    </Box>
  );
};

export default Header;
