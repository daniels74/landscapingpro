import React from 'react'

import {Box} from "@mui/material";

const Title = () => {
  return (
    <Box
    sx={{
        height: "8%",
        width: "50%",
        background: "rgb(23,30,74)",
        background: "linear-gradient(90deg, rgba(23,30,74,1) 0%, rgba(85,125,153,1) 50%, rgba(23,30,74,1) 100%)",
        borderRadius: "1rem",
        borderColor: "blue",
        borderStyle: "solid",
        borderWidth: "thin",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    }}>
        <Box
        sx={{
          fontSize: {xs: "1.3rem", sm: "1.8rem", md: "2.5rem"},
          fontWeight: "bold"
        }}>
            Alpha Land Pros
        </Box>
    </Box>
  )
}

export default Title