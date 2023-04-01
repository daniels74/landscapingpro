import React from "react";

//----UI-------
import { Box } from "@mui/material";

const Services = () => {
  const skills = [
    "Tree Trimming",
    "Grass Work",
    "Sprinkler Installation",
    "Road Pavers",
    "Stone Paths/Walls",
    "Property Maintenance",
    "Fences",
    "Weather Damage",
  ];

  const skillsDisplay = skills.map((item, i) => {
    return (
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="h4">
          {item}
        </Box>
        
      </Box>
    );
  });

  return (
    <Box
      sx={{
        backgroundColor: "#11244f",
        height: "30%",
        width: "90%",
        borderRadius: "1rem",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#4d6294",
          height: "90%",
          width: "90%",
          borderRadius: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(2, 50%)",
          gridTemplateRows: "repeat(4, 25%)",
        }}
      >
        {skillsDisplay}
      </Box>
    </Box>
  );
};

export default Services;
