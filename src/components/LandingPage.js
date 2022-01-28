import React from 'react'
import lottie from "lottie-web";
import animationData from "../animations/landinganimation/data";
import Hero from './ui/Hero';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ServicesSection from './ui/ServicesSection';
import RevloutionSection from './ui/RevloutionSection';
import ContactUsSection from './ui/ContactUsSection';
import EstmateSection from './ui/EstmateSection';
function LandingPage() {

    return (
        <Grid contai direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{paddingTop:"3.5rem"}}>
     
          <Grid item>  <Hero /></Grid>
          <Grid item style={{paddingTop:"5rem"}}> <ServicesSection /></Grid>
          <Grid Item ><RevloutionSection /></Grid>
          <Grid Item ><ContactUsSection /></Grid>
          <Grid Item ><EstmateSection /></Grid>



        </Grid>
    )
}

export default LandingPage
