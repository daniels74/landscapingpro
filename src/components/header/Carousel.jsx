import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {Box} from "@mui/material";

const Carousel = () => {
  // const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Box component="img" src="./images/pavers.JPG" 
    sx={{
      borderRadius: "1rem",
    }}/>,
    <Box component="img" src="./images/stairfont.JPG" 
    sx={{
      borderRadius: "1rem",
    }}/>,
  ];

  return (
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        autoPlay
        items={items}
      />
  );
};

export default Carousel;
