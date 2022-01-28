import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { borderColor, styled} from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const SectionContainer=styled('div')(({theme})=>({

    height:"64em",

  
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    [theme.breakpoints.down('md')]: {      backgroundImage:`url(${mobileBackground})`, 
    textAlign:"center" },

    [theme.breakpoints.up('md')]: {     backgroundImage:`url(${background})`, backgroundAttachment:"fixed",
    textAlign:"left" },

}))
const BlueBtn=styled(Button)(({theme})=>({

    borderRadius:"50px",

    fontSize:"0.7rem",
    paddingTop:"1px",
    paddingBottom:"1px",


    height:"35px",
    textTransform: 'none',
    paddingLeft:"5px",
    paddingRight:"5px",
    borderWidth:"2px",
    fontWeight:700,
    borderColor:theme.palette.primary.main,
    "&:hover":{
        paddingLeft:"5px",
        paddingRight:"5px",
        borderWidth:"2px",
        borderColor:theme.palette.primary.main,
    }

}));
const OrangeBtn=styled(Button)(({theme})=>({
    ...theme.typography.estmaite,
    backgroundColor:theme.palette.secondary.main,
    borderRadius:"50px",


   borderWidth:"10px",
    height:"75px",
    paddingLeft:"30px",
    paddingRight:"30px",
    
    fontSize:"1.6rem"


}));
const textStyle={

    fontSize:"1.3rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.75",
    }

    const title={fontSize:"2.4rem",fontFamily:"Raleway",fontWeight:700}
function EstmateSection() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <SectionContainer>
               <Grid container spacing={2} alignItems="center" justifyContent={matches?"center":"space-between"} direction={matches ? "column":"row"}  style={{height:"100%",color:"#ffffff",paddingRight:"4rem",paddingLeft:"4rem"}}>
<Grid item  >
<Typography color="primary" sx={title}>Simple Software.<br ></br>
Revolutionary Results.</Typography>
<Typography sx={textStyle}>Take advantage of the 21st Century.</Typography>
<BlueBtn variant='outlined'>Learn More<ArrowForwardIcon sx={{marginLeft:"8px",width:"12px"}}/>
</BlueBtn>

</Grid>
<Grid item >

<OrangeBtn color="secondary" variant='contained'>free estimate</OrangeBtn>
</Grid>

            </Grid>
        </SectionContainer>
    )
}

export default EstmateSection