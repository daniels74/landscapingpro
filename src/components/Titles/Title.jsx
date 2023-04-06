import React from 'react'
import { Box } from '@mui/material'



const Title = ({titleName}) => {
  return (
    <Box
    sx={{
        position: "relative",
        height: "80%",
        width: {xs: "80%", sm: "60%", md: "50%", lg: "30%", xl: "25%"},
        // backgroundColor: "#11244f",
        borderRadius: "1rem",
        borderStyle: "solid",
        borderColor: "blue",
        borderWidth: "thin",
        display: "flex",
        flexDirection: "columb",
        alignItems: "center",
        justifyContent: "center",
    }}>
      <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "#11244f",
        borderRadius: "1rem",
        opacity: ".9",
        zIndex: "0",
      }}>

      </Box>
        <Box
        component="h4"
        sx={{
          fontSize: {xs: "1.8rem", sm: "2rem", md: "2.5rem"},
          fontWeight: "bold",
          backgroundImage: "linear-gradient(90deg, rgba(90,127,152,1) 0%, rgba(48,87,140,1) 70%, rgba(0,73,141,1) 100%)",
          backgroundClip: "text",
          color: 'transparent',
          zIndex: "1",
        }}>
           {titleName}
        </Box>
    </Box>
  )
}

export default Title