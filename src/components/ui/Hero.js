import React from 'react'
import lottie from "lottie-web";
import animationData from '../../animations/landinganimation/data';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { borderColor, styled} from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const OrangeBtn=styled(Button)(({theme})=>({
    ...theme.typography.estmaite,
    backgroundColor:theme.palette.secondary.main,
    borderRadius:"50px",

    marginRight:"25px",
   borderWidth:"10px",
    height:"45px",
    paddingLeft:"18px",
    paddingRight:"18px",
   
    fontSize:"1.1rem"


}));
const BlueBtn=styled(Button)(({theme})=>({

    borderRadius:"50px",
    marginLeft:"15px",


    height:"45px",
    textTransform: 'none',
    paddingLeft:"18px",
    paddingRight:"18px",
    borderWidth:"2px",
    fontWeight:700,
    borderColor:theme.palette.primary.main,
    "&:hover":{
        paddingLeft:"18px",
        paddingRight:"18px",
        borderWidth:"2px",
        borderColor:theme.palette.primary.main,
    }

}));
function Hero() {
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#react-logo"),
          animationData: animationData,
    
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
    
        });
      }, []);
    return (
        <Grid container spacing={2 }alignItems="center"  justifyContent="center">
            <Grid item xs={12} md={6} >
<Grid container   direction="column"
  justifyContent="center"
  alignItems="center" spacing={2}>
<Grid item >
<Typography  color='primary' sx={{fontSize:"2.5rem",textAlign:"center",fontFamily:"Raleway",maxWidth:{xs:"38rem",sm:"50rem",md:"25rem",lg:"42rem"},fontWeight:700,lineHeight:1.5}}>Bringing West Coast Technology
<br /> to the Midwest</Typography>
</Grid>
<Grid item   style={{
    paddingLeft:0
  }}>

<OrangeBtn color="secondary" variant='contained'>free estimate</OrangeBtn>
<BlueBtn color="primary" variant='outlined'>Learn More
<ArrowForwardIcon  sx={{marginLeft:"8px",width:"12px"}}/>
</BlueBtn>
</Grid>
</Grid>

            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{maxWidth:{xs:"25rem",sm:"30rem",md:"33.5rem",lg:"42rem"},marginLeft:"auto"}}>
              <div id="react-logo" style={{width:"100%",marginLeft:"auto"}} ></div>

              </Box>

            </Grid>
 
        </Grid>
    )
}

export default Hero
