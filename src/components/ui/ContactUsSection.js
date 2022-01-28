import React from 'react'
import infoBackground from "../../assets/infoBackground.svg";
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
    backgroundImage:`url(${infoBackground})`,




}))
const AboutContainer=styled(Grid)(({theme})=>({

 
    [theme.breakpoints.down('sm')]: {  textAlign:"center" },

    [theme.breakpoints.up('md')]: {   textAlign:"left" },



}))
const ContactContainer=styled(Grid)(({theme})=>({

 
    [theme.breakpoints.down('sm')]: {  textAlign:"center" },

    [theme.breakpoints.up('sm')]: {   textAlign:"right" },



}))
const Spacer=styled('div')(({theme})=>({


    [theme.breakpoints.down('sm')]: {  height:"10rem" },

    [theme.breakpoints.up('md')]: {  height:"0" },



}))
const textStyle={

fontSize:"1.25rem",
fontFamily: "Roboto",
fontWeight: 300,
lineHeight: "1.75",
}
const WhiteBtn=styled(Button)(({theme})=>({

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
    color:"#ffffff",
    borderColor:"#ffffff",
    "&:hover":{
        paddingLeft:"5px",
        paddingRight:"5px",
        borderWidth:"2px",
        borderColor:"#ffffff",
    }

}));
const title={fontSize:"2.4rem",fontFamily:"Raleway",fontWeight:700}
function ContactUsSection() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <SectionContainer>
            <Grid container spacing={2} alignItems="center" justifyContent={matches?"center":"space-between"} direction={matches ? "column":"row"}  style={{height:"100%",color:"#ffffff",paddingRight:"2rem",paddingLeft:"2rem"}}>
<AboutContainer item  >
<Typography sx={title}>About Us</Typography>
<Typography sx={textStyle}>Let's get personal.</Typography>
<WhiteBtn variant='outlined'>Learn More
<ArrowForwardIcon sx={{marginLeft:"8px",width:"12px"}}/></WhiteBtn>
</AboutContainer>
<Spacer></Spacer>
<ContactContainer item >
<Typography sx={title}>Contact Us</Typography>
<Typography sx={textStyle}>Say hello! 👋🏻</Typography>
<WhiteBtn variant='outlined'>Learn More
<ArrowForwardIcon sx={{marginLeft:"8px",width:"12px"}}/></WhiteBtn>
</ContactContainer>

            </Grid>
        </SectionContainer>
    )
}

export default ContactUsSection
