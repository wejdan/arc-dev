import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import footerAdornment from "../../assets/Footer Adornment.svg";

import { routes } from '../Data';
import { Typography } from '@mui/material';

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { styled} from '@mui/system';
import { useGlobalContext } from '../Context'


const FooterIng=styled('div')(({theme})=>({

    zIndex:0,
    height: "100%",
    "img":{height: "100%",width:"100%"},
     position:"absolute",
     bottom:0,
     top:"0",
     margin:"0",
     left:"0"

}));

const footer={
    zIndex:2,
    overflow:"hidden",
     height: { lg: "244px", sm: "205px",xs:"145px" },
     pt:7,backgroundColor: 'primary.main',
     fontFamily:"Arial",fontWeight:'bold',fontSize:"0.75rem",color:"white",position:"relative",width:"100%"}

     const IconsContainer=styled('div')(({theme})=>({
     
     
        display:"inline-block",
        width:'2.5rem',
        height:'2.5rem',
        [theme.breakpoints.up('sm')]: {   
            
            height:"4rem", 
            width:'4rem'
          },


    
    }));

      
function Footer(props) {
    const { value,setValue,selectedIndex,setSelectedIndex } = useGlobalContext();
    return (
        <Box sx={footer}>
    <FooterIng>

        <img src={footerAdornment}  />

    </FooterIng>
    
        <Container sx={{postion:"relative", display: { lg: "block", xs: "none" } }}>
            <Grid container justifyContent="flex-end"  >
                {routes.slice(0,-1).map((route,index)=>{
                    return <Grid  sx={{zIndex:1000,"a":{textDecoration:"none",color:"white"}}}   item   
                 
                     xs={(index==0 || index==3)?1.3:(index==1||index==4)?2.7:2}>    
                      
                     


<Grid container rowSpacing={1}   direction="column" >
    <Grid item>
        <Link  to={route.link} onClick={()=>{setValue(index);index==1&&setSelectedIndex(0)}} >{route.name} </Link>
        </Grid>
                    {route.options.map((subroute,subindex)=>{return <Grid   item >
                        <Link onClick={()=>{setValue(index);setSelectedIndex(subindex+1)}} to={subroute.link}>{subroute.name}</Link>
                        
                        </Grid>})}
                        </Grid>
                    </Grid>
                })}
            </Grid>
        </Container>

        <Box sx={{position:"absolute",bottom:{sm:"10px",xs:"40px"},right:"12px"}}>
            <IconsContainer>
                <a href="https://www.facebook.com/"><img src={facebook}  /></a>
            </IconsContainer>          
            
            <IconsContainer sx={{marginRight:2,marginLeft:2}}>
            <a href="https://twitter.com/"><img src={twitter} /></a>
            </IconsContainer>    
           <IconsContainer sx={{marginRight:2}}>
            <a href="https://www.instagram.com/"><img src={instagram}  /></a>
            </IconsContainer>    
            
             
            

        </Box>

        </Box>
    )
}

export default Footer

