import React from "react";
import Carousel from "./Carousel";

import { Box } from "@mui/material";

const RecentProjectsCarousel = () => {
  return (
    <Box
    sx={{
        position: "relative",
        height: {xs: "60%",sm: "60%",md: "65%", lg: "65%"},
        width: {xs: "75%", sm: "40%", md: "35%", lg: "20%"},
        // backgroundColor: "red",
    }}>
      <Box
        component={Carousel}
      ></Box>
    </Box>
  );
};

export default RecentProjectsCarousel;
