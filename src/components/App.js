
import React from "react";
import Header from "./ui/header";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from "./About";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import Estimate from "./Estimate";
import Services from "./Services";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";
import Revolution from "./Revolution";
import Box from '@mui/material/Box';
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";

function App() {



  return (


    
    <ThemeProvider theme={theme}>
          <BrowserRouter>

<Header  />



<Routes>
  <Route path="/" exact  element={<LandingPage />} >
  </Route>

 
  <Route path="/services" element={<Services />} >
  </Route>
  <Route path="/customsoftware" element={<CustomSoftware />} >
  </Route>
  <Route path="/mobileapps" element={<MobileApps />} >
  </Route>
  <Route path="/websites" element={<Websites />} >
  </Route>

  <Route path="/revolution" element={<Revolution />}>
  </Route>



  <Route path="/about" element={ <About />}  >
  </Route>


  <Route path="/contact" element={<Contact />}>
  </Route>


  <Route path="/estimate" element={<Estimate />} >
  </Route>


</Routes>

<Footer />
</BrowserRouter>
</ThemeProvider>

  );
}

export default App;
