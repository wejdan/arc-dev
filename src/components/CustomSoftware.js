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

import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";
import { Link } from "react-router-dom";


import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

import EstmateSection from './ui/EstmateSection';
import { AddBox } from '@mui/icons-material';


import { useGlobalContext } from './Context'

const title={fontSize:"2.4rem",fontFamily:"Raleway",fontWeight:700}
const GridContainer=styled(Grid)(({theme})=>({

    
    [theme.breakpoints.down('sm')]: {    paddingTop:"0.5rem",paddingLeft:"0.5rem",  paddingRight:"0.5rem",textAlign:"center"},


    [theme.breakpoints.down('md')]: {    paddingTop:"0.5rem",paddingLeft:"2rem",  paddingRight:"2rem",textAlign:"center"},

    [theme.breakpoints.up('md')]: {   paddingTop:"1.3rem",  paddingLeft:"2rem" ,textAlign:"left" },

}));

const Text=styled(Typography)(({theme})=>({

    


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

 
    [theme.breakpoints.down('md')]: {  textAlign:"center" ,flexDirection:"column",justifyContent:"center",alignItems:"center"},

    [theme.breakpoints.up('md')]: {   textAlign:"left",flexDirection:"row" },



}))


const RightContainer=styled('div')(({theme})=>({
    
    [theme.breakpoints.down('md')]: {  textAlign:"center" },

    [theme.breakpoints.up('md')]: { 
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
    var auto;
    var ux;
    var doc;
    var scale;
function CustomSoftware() {
    const { value,setValue,selectedIndex,setSelectedIndex } = useGlobalContext();


    React.useEffect(() => {
        doc=lottie.loadAnimation({
          container: document.querySelector("#react-document"),
          animationData: documentsAnimation,
          autoplay: false,
          loop:false,
    
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
    
        });
        scale=lottie.loadAnimation({
            container: document.querySelector("#react-scale"),
            animationData: scaleAnimation,
            autoplay: false,
            loop:false,
      
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
      
          });
        auto=lottie.loadAnimation({
            container: document.querySelector("#react-auto"),
            animationData: automationAnimation,
            autoplay: false,
            loop:false,
      
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
      
          });

          ux=lottie.loadAnimation({
            container: document.querySelector("#react-ux"),
            animationData: uxAnimation,
            autoplay: false,
            loop:false,
      
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
      
          });
      }, []);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const large = useMediaQuery(theme.breakpoints.only('lg'));
    const med= useMediaQuery(theme.breakpoints.down('md'));
    const small= useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
                    <GridContainer container spacing={0} justifyContent={med?"center":undefined} >
                        <Grid item  >
                            <Typography color="primary" sx={{...title,maxWidth:"45em"}}>
                          {matches && <Link onClick={()=>{setSelectedIndex(0)}} to="/services"><img src={backArrow} style={{marginRight:"1.5rem"}} /></Link>} 

                               Custom Software Development
                                {matches && <Link onClick={()=>{setSelectedIndex(2)}} to="/mobileapps"><img src={forwardArrow} style={{marginLeft:"1.5rem"}} /></Link> }
                            </Typography>

                            <Box   sx={{maxWidth:"45em"}}>


                            <Text>Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.<br /></Text>
<Text>Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.<br />
</Text>

<Text>Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.<br />
</Text>
<Text>We create exactly what you what, exactly how you want it.
</Text>
                            </Box>
                        </Grid></GridContainer>


<Grid container justifyContent="center" style={{padding:"5rem",marginTop:"10rem"}} >
    <Grid item md={4} xs={12}>
        <Box style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"10rem"}}>
        <Typography sx={Icontitle} color="primary">Save Energy</Typography>
        <img src={lightbulb} />
        </Box>
      
    </Grid>
    <Grid item  md={4} xs={12}>
    <Box style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"10rem"}}>

        <Typography sx={Icontitle} color="primary">Save Time</Typography>
        <img src={stopwatch} />
        </Box>
    </Grid>

    <Grid item  md={4} xs={12}>
    <Box style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"8rem"}}>

        <Typography sx={Icontitle} color="primary">Save Money</Typography>
        <img src={cash} />
        </Box>
    </Grid>
</Grid>



<Grid container   
  justifyContent="space-around" 
  alignItems="center" spacing={5} style={{padding:"3rem"}}>


      <LeftContainer item xs={12} sm={6}>
          <Box>
          <Typography sx={Icontitle} color="primary">Digital Documents & Data</Typography>
          <Typography sx={{...textStyle,marginBottom:"1rem",maxWidth:matches ?"20rem" :undefined}}>Reduce Errors. Reduce Waste. Reduce Costs.</Typography>
          <Typography sx={{...textStyle,marginBottom:"1rem",maxWidth:matches ?"20rem" :undefined}}>Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.</Typography>
          <Typography sx={{...textStyle,marginBottom:"1rem",maxWidth:matches ?"20rem" :undefined}}>By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
</Typography>
</Box>
<div id="react-document" style={{ width: 300, height: 300 ,maxWidth:"100%"}} onClick={()=>{doc.play()}} ></div>
        
      </LeftContainer>

      {!matches && <div style={{height:"10rem",width:"100%"}}></div>}

      <Grid item xs={12} sm={6}>
<Box sx={{display:"flex",flexDirection:med?'column':'row',justifyContent:med?'center':'flex-end',alignItems:"center"}}  >     
<Box>
    <img src={roots} style={{width:300,height:300,maxWidth:"100%"}} />
</Box>    
<Box>
<RightContainer>

<Typography sx={Icontitle}  color="primary">Scale</Typography>
          <Typography sx={{...textStyle,maxWidth:matches ?"20rem" :undefined}}>Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.</Typography>
 
</RightContainer>
</Box>
</Box > 
      </Grid>


</Grid>

<Grid container spacing={0} direction="column" justifyContent="center" alignContent="center" style={{height:"80em",textAlign:"center",padding:"10%"}}>
<Grid item>
    <img src={roots} style={{width:400,height:400}} />
</Grid>
<Grid item>
<Typography sx={{...Icontitle,marginBottom:"0rem"}} color="primary">Root-Cause Analysis</Typography>

</Grid>
<Grid item>
<Typography sx={{...textStyle,marginBottom:"1rem"}}>Many problems are merely symptoms of larger, underlying issues.</Typography>

<Typography sx={{...textStyle,maxWidth:matches?"40rem":undefined}}>We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.</Typography>


</Grid>


</Grid>



<Grid container   
  justifyContent="center"

  
   style={{padding:"3rem",marginBottom:"10em",paddingRight:small?"1rem":"3rem",paddingLeft:small?"1rem":"3rem"}}>


      <Grid item xs={12} md={6}>
          <Grid container direction={small ?"column":'row'} alignItems='center' justifyContent='center' >
          <Grid item sm  sx={{textAlign:small?"center":"left"}}> 
<Box sx={{maxWidth:small ?"23rem":undefined}}>
<Typography sx={Icontitle} color="primary">Automation</Typography>
          <Typography sx={{...textStyle}}>
          Why waste time when you don’t have to?</Typography>
          <Typography sx={{...textStyle}}>
          We can help you identify processes with time or event based actions which can now easily be automated.</Typography>
          <Typography sx={{...textStyle}}>
          Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
</Typography>
</Box>
</Grid>
<Grid item sm><div id="react-auto" style={{ width: 300, height: 300 }} onClick={()=>{auto.play()}}></div>
</Grid>
</Grid> 
      </Grid>


      <Grid item xs={12} md={6} >


<Grid container direction={small ?"column":'row'} alignItems={small ?"center":'flex-start'}   justifyContent='center' sx={{marginTop:med?"9rem":0}} >

<Grid item   sm>
<div id="react-ux" style={{ width: 150 ,marginLeft:"auto"}} onClick={()=>{ux.play()}} ></div>
</Grid>

<Grid item sm sx={{textAlign:small?"center":"right"}} >

<Typography sx={Icontitle}  color="primary">User Experience Design</Typography>
          <Typography sx={{...textStyle,maxWidth:small?"24rem":undefined}}>
          A good design that isn’t usable isn’t a good design.</Typography>

          <Typography sx={{...textStyle,maxWidth:small?"24rem":undefined}}>
          So why are so many pieces of software complicated, confusing, and frustrating?</Typography>

          <Typography sx={{...textStyle,maxWidth:small?"24rem":undefined}}>
          By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones</Typography>




</Grid>
</Grid>

      </Grid>

</Grid>




           <EstmateSection /> 
        </Box>
    )
}

export default CustomSoftware
