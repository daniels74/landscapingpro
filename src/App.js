import './App.css';
import { Box } from "@mui/material";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Contact from "./components/contact/contact";


function App() {
  return (
    <Box
    sx={{
      backgroundImage:  "url(./images/forest.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      color: "lightblue"
    }}>
      <Header />
      <Nav />
      <Services />
      <Contact />
    </Box>
  );
}

export default App;
