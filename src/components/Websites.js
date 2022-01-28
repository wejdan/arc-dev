import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import EstmateSection from './ui/EstmateSection';
import { borderColor, styled} from '@mui/system';

import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import { Link } from "react-router-dom";


import Feature from './ui/Feature';
import Estimate from './Estimate';
import { useGlobalContext } from './Context'


const services=[{title:"Analytics",subtitle:"",detailes:`
Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.`,icon:analytics},
{title:"E-Commerce",subtitle:"It’s no secret that people like to shop online.",detailes:`
In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie`,icon:ecommerce},
{title:"Outreach",subtitle:".",detailes:`
Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.`,icon:outreach},
{title:`Search Engine `,newLine:'Optimization',subtitle:"How often have you ever been to the second page of Google results?",
detailes:`If you’re like us, probably never.

Customers don’t go there either, so we make sure your website is designed to end up on top.`,icon:seo}

]


const title={fontSize:"2.4rem",fontFamily:"Raleway",fontWeight:700}

const GridContainer=styled(Grid)(({theme})=>({

    


    [theme.breakpoints.up('xs')]: {    paddingTop:"0.5rem", paddingLeft:"2rem",  paddingRight:"2rem",textAlign:"center"},

    [theme.breakpoints.up('md')]: {   paddingTop:"1.3rem",  paddingLeft:"2rem" ,textAlign:"left" },

}));

const Text=styled(Typography)(({theme})=>({

    


    [theme.breakpoints.only('xs')]: {  paddingLeft:"1rem",paddingRight:"1rem"},
    [theme.breakpoints.only('sm')]: {  paddingLeft:"3rem",paddingRight:"3rem"},
    [theme.breakpoints.up('md')]: {  paddingLeft:"3rem",maxWidth:"44rem" },
    color: "#868686",
    fontSize:"1.25rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.4",
    
    
    marginBottom:"0.5rem"

}));
const textStyle={
    color: "#868686",
    fontSize:"1.25rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.75",
    
    
    }
function Websites() {

    const { value,setValue,selectedIndex,setSelectedIndex } = useGlobalContext();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const large = useMediaQuery(theme.breakpoints.only('lg'));
    const med= useMediaQuery(theme.breakpoints.down('lg'));
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
                               <GridContainer container spacing={0}  >
                        <Grid item lg={9} md={12} sm={12}>
                            <Typography color="primary" sx={title}>
                          {matches &&<Link onClick={()=>{setSelectedIndex(2)}} to="/mobileapps"> <img src={backArrow} style={{marginRight:"1.5rem"}} /></Link>} 

                          <span style={{minWidth:matches?"37rem":undefined,display:"inline-block"}}>Website Development</span>
                                                          {matches && <Link onClick={()=>{setSelectedIndex(0)}} to="/services"><img src={forwardArrow} style={{marginLeft:"1.5rem"}} /></Link> }
                            </Typography>

                            <Box >


                         
<Text>
Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.</Text>

<Text>
From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.</Text>

                            </Box>
                        </Grid></GridContainer> 




                        <Box sx={{marginTop:"12rem",paddingLeft:small?"2em":"5em",paddingRight:small?"2em":"5em"}}>
           
           {services.map((service,index)=>{
                   return   <Grid container spacing={1} justifyContent={small?'center':(index%2)==1?"flex-end":"flex-start"}  >
                       <Grid item  >
                       <Feature {...service}  />
                       </Grid>
                   </Grid>
           })}
           
       </Box>


       <EstmateSection />


        </Box>
    )
}

export default Websites
