import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { borderColor, styled} from '@mui/system';
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import ServiceItem from './ui/ServiceItem';
import { Link } from "react-router-dom";

import { servicesitems } from './Data';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const title={fontSize:"2.4rem",fontFamily:"Raleway",fontWeight:700}
const GridContainer=styled(Grid)(({theme})=>({

    

    [theme.breakpoints.down('md')]: {    paddingTop:"0.5rem", paddingLeft:"2rem",  paddingRight:"2rem",textAlign:"center",justifyContent:"center"},

    [theme.breakpoints.up('md')]: {   paddingTop:"1.3rem",  paddingLeft:"5rem" ,textAlign:"left" },

}));
function Services() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (


        <Box>
           <GridContainer container spacing={0}  >
                        <Grid item >
                            <Typography color="primary" sx={title}>Services</Typography>
                        </Grid></GridContainer>


            {servicesitems.map((service,index)=>{
                    return   <Grid key={index}  container spacing={1} justifyContent={matches?"center":(index==0||index==2)?"flex-end":'flex-start'}  >
                        <Grid item >
                        
                        <ServiceItem {...service}   />
                        </Grid>
                    </Grid>
            })}
            
        </Box>
    )
}

export default Services
