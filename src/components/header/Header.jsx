import React from "react";
// import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Services from "./Services";
import RecentProjectsCarousel from "./RecentProjectsCarousel";

import "./Header.css";
import Title from "../Titles/Title";

//-----------------UI
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      component="header"
      id="header"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          height: "10%",
          width: "100%",
          // backgroundColor: "yellow",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title titleName="Land Pros"/>
      </Box>

      <Box
        sx={{
          height: "90%",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            height: "80%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            // background: "rgb(8,13,42)",
          }}
        >
          <Box
            component={Services}
            // sx={{
            //   height: "40%",
            //   width: "100%",
            //   backgroundColor: "yellow",
            // }}
          />
          <Box
            component={RecentProjectsCarousel}
            // sx={{
            //   position: "relative",
            //   height: "60%",
            //   width: "100%",
            //   backgroundColor: "yellow",
            // }}
          ></Box>
          {/* <CTA /> */}
          <HeaderSocials />
          {/* <a href="#contact" className="scroll__down">
            Scroll Down
          </a> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
