import React from "react";
import emailjs from "emailjs-com";

import { Box } from "@mui/material";

const contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkxhxn8",
        "template_nsmvls6",
        e.target,
        "27hiE4vtnV9RKR81R"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        height: "100vh",
        width: "100%",
        // backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <h1 style={{ marginTop: "25px" }}>Contact Form</h1> */}
      <Box
        component="form"
        onSubmit={sendEmail}
        sx={{
          height: "70%",
          width: "70%",
          // backgroundColor: "#11244f",
          background: "rgb(8,13,42)",
          background: "linear-gradient(90deg, rgba(8,13,42,1) 0%, rgba(43,64,78,1) 50%, rgba(8,13,42,1) 100%)",
          borderStyle: "solid",
          borderWidth: "thin",
          borderRadius: "1rem",
          borderColor: "blue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            height: "20%",
            width: "70%",
            backgroundColor: "#4d6294",
            borderStyle: "solid",
            borderWidth: "thin",
            borderRadius: "1rem",
            borderColor: "blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "65%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <label>Name</label>
            <Box
              sx={{
                width: "80%",
                height: "50%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1rem",
              }}
            >
              <Box
                component="input"
                type="text"
                name="name"
                sx={{
                  height: "2rem",
                  width: "95%",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "20%",
            width: "70%",
            backgroundColor: "#4d6294",
            borderStyle: "solid",
            borderWidth: "thin",
            borderRadius: "1rem",
            borderColor: "blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "65%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <label>Email</label>
            <Box
              sx={{
                width: "80%",
                height: "50%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1rem",
              }}
            >
              <Box
                component="input"
                type="email"
                name="user_email"
                sx={{
                  height: "2rem",
                  width: "95%",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "20%",
            width: "70%",
            backgroundColor: "#4d6294",
            borderStyle: "solid",
            borderWidth: "thin",
            borderRadius: "1rem",
            borderColor: "blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "65%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <label>Message</label>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderStyle: "solid",
                borderWidth: "thin",
                borderRadius: "1rem",
                borderColor: "blue",
              }}
            >
              <Box
                component="textarea"
                name="message"
                rows="4"
                sx={{
                  height: "95%",
                  width: "95%",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "20%",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="input"
            type="submit"
            value="Send"
            sx={{
              height: "25%",
              width: "35%",
              borderRadius: "1rem",
              backgroundColor: "lightblue",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default contact;
