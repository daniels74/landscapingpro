import React from "react";
import { Box } from "@mui/material";

const Services = () => {
  const projects = [
    {
      img: "./images/Six.jpg",
      title: "helloTitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima recusandae voluptatem dolore! Autem, consectetur modi? Vitae, natus cum ipsam molestias sed, est cupiditate beatae maiores similique explicabo et? Porro!",
    },
    {
      img: "./images/Six.jpg",
      title: "helloTitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima recusandae voluptatem dolore! Autem, consectetur modi? Vitae, natus cum ipsam molestias sed, est cupiditate beatae maiores similique explicabo et? Porro!",
    },
    {
      img: "./images/Six.jpg",
      title: "helloTitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima recusandae voluptatem dolore! Autem, consectetur modi? Vitae, natus cum ipsam molestias sed, est cupiditate beatae maiores similique explicabo et? Porro!",
    },
    {
      img: "./images/Six.jpg",
      title: "helloTitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima recusandae voluptatem dolore! Autem, consectetur modi? Vitae, natus cum ipsam molestias sed, est cupiditate beatae maiores similique explicabo et? Porro!",
    },
    {
      img: "./images/Six.jpg",
      title: "helloTitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima recusandae voluptatem dolore! Autem, consectetur modi? Vitae, natus cum ipsam molestias sed, est cupiditate beatae maiores similique explicabo et? Porro!",
    },
    {
      img: "./images/Six.jpg",
      title: "helloTitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima recusandae voluptatem dolore! Autem, consectetur modi? Vitae, natus cum ipsam molestias sed, est cupiditate beatae maiores similique explicabo et? Porro!",
    },
    {
      img: "./images/Six.jpg",
      title: "helloTitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima recusandae voluptatem dolore! Autem, consectetur modi? Vitae, natus cum ipsam molestias sed, est cupiditate beatae maiores similique explicabo et? Porro!",
    },
    {
      img: "./images/Six.jpg",
      title: "helloTitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima recusandae voluptatem dolore! Autem, consectetur modi? Vitae, natus cum ipsam molestias sed, est cupiditate beatae maiores similique explicabo et? Porro!",
    },
  ];

  const projectCards = projects.map((item, i) => {
    return (
      <Box
        sx={{
          height: "100%",
          width: "100%",
          // backgroundColor: "#02101f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "95%",
            width: "85%",
            backgroundColor: "#4d6294",
            borderStyle: "solid",
            borderColor: "blue",
            borderWidth: ".2px",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={item.img}
            sx={{
              height: "50%",
              width: "100%",
              borderRadius: "1rem",
              // backgroundColor: "purple",
            }}
          ></Box>
          <Box
            sx={{
              height: "50%",
              width: "95%",
              // backgroundColor: "purple",
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {item.title}
            </Box>
            <Box
              sx={{
                height: "80%",
                width: "100%",
                // backgroundColor: "red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.description}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <Box
      component="section"
      id="services"
      sx={{
        height: "100vh",
        width: "100%",
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Services
      <Box
        sx={{
          height: "90%",
          width: "90%",
          background: "rgb(8,13,42)",
          //background: "linear-gradient(90deg, rgba(8,13,42,1) 0%, rgba(43,64,78,1) 50%, rgba(8,13,42,1) 100%)",
          borderStyle: "solid",
          borderColor: "blue",
          borderWidth: "thin",
          borderRadius: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(4,50%)",
          gridTemplateRows: "repeat(2,50%)",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        {projectCards}
      </Box>
    </Box>
  );
};

export default Services;
