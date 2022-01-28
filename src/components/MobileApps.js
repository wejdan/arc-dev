import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { borderColor, styled} from '@mui/system';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import lottie from "lottie-web";

import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import { Link } from "react-router-dom";

import integrationAnimation from "../animations/integrationAnimation/data.json";

import EstmateSection from './ui/EstmateSection';
import { useGlobalContext } from './Context'

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
const LeftContainer=styled(Grid)(({theme})=>({
    display:"flex",

 
    [theme.breakpoints.down('sm')]: {  textAlign:"center" ,flexDirection:"column",justifyContent:"center",alignItems:"center"},

    [theme.breakpoints.up('sm')]: {   textAlign:"left",flexDirection:"row" },



}))


const RightContainer=styled('div')(({theme})=>({

    [theme.breakpoints.down('sm')]: {  textAlign:"center" },

    [theme.breakpoints.up('sm')]: { 
        p:{
            marginLeft:"auto"
        },
        
        textAlign:"right"},



}))
const textStyle={
    color: "#868686",
    fontSize:"1.25rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.75",
    
    
    }
    const Icontitle={fontSize:"1.8rem",fontFamily:"Raleway",fontWeight:700}

function MobileApps() {
    const { value,setValue,selectedIndex,setSelectedIndex } = useGlobalContext();

    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#react-document"),
          animationData: integrationAnimation,
          autoplay: false,
          loop:true,
    
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
    
        });


      }, []);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const large = useMediaQuery(theme.breakpoints.only('lg'));
    const med= useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
                    <GridContainer container spacing={0}  >
                        <Grid item lg={9} md={12} sm={12}>
                            <Typography color="primary" sx={title}>
                          {matches && <Link onClick={()=>{setSelectedIndex(1)}} to="/customsoftware"><img src={backArrow} style={{marginRight:"1.5rem"}} /></Link>} 

                          iOS/Android App Development
                                                          {matches &&  <Link onClick={()=>{setSelectedIndex(3)}} to="/websites"><img src={forwardArrow} style={{marginLeft:"1.5rem"}} /></Link>}
                            </Typography>

                            <Box >


                            <Text>Mobile apps allow you to take your tools on the go.<br /></Text>
<Text>
Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.</Text>


<Text>Convenience. Connection.
</Text>
                            </Box>
                        </Grid></GridContainer>

                        <Grid container   
  justifyContent="center"
  alignItems="center" style={{padding:"3rem",marginTop:"15rem"}}>


      <LeftContainer item xs={12} sm={4}>
          <Box>
          <Typography sx={Icontitle} color="primary">Integration</Typography>
          <Typography sx={{...textStyle,marginBottom:"1rem",}}>Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.</Typography>
          <Typography sx={{...textStyle,marginBottom:"1rem",}}>This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.</Typography>
</Box>
        
      </LeftContainer>

<Grid item sm={4} >
<div id="react-document" style={{ marginLeft:"auto",marginRight:"auto",maxWidth:"20rem" }} ></div>

</Grid>
      <Grid item xs={12} sm={4}>
<RightContainer>
<Typography sx={Icontitle}  color="primary">Simultaneous Platform Support</Typography>
          <Typography sx={{...textStyle,}}>Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.</Typography>
          <Typography sx={{...textStyle,}}>This significantly reduces costs and creates a more unified brand experience across all devices.</Typography>

</RightContainer>
      </Grid>

</Grid>












<Grid container justifyContent="center" style={{padding:"4rem",marginTop:"10rem"}} >
    <Grid item lg={4} xs={12}>
        <Box style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"10rem"}}>
        <Typography sx={Icontitle} color="primary">Extend Functionality</Typography>
        <img src={swiss}  style={{maxWidth:"100%"}}/>
        </Box>
      
    </Grid>
    <Grid item  lg={4} xs={12}>
    <Box style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"10rem"}}>

        <Typography sx={Icontitle} color="primary">Extend Access</Typography>
        <img src={access}  style={{maxWidth:"100%"}}/>
        </Box>
    </Grid>

    <Grid item  lg={4} xs={12}>
    <Box style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"8rem"}}>

        <Typography sx={Icontitle} color="primary">Increase Engagement</Typography>
        <img src={engagement}  style={{maxWidth:"100%"}} />
        </Box>
    </Grid>
</Grid>













           <EstmateSection /> 
        </Box>
    )
}

export default MobileApps
