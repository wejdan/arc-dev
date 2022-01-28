import React from 'react'
import revolutionBackground from "../../assets/repeatingBackground.svg";
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

const BackImg=styled('div')(({theme})=>({

    position: 'absolute',
    top: '0',
    left: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex:"0",
    width:"100%"

}))
const StyledCard=styled(Card)(({theme})=>({

  minWidth: 275,zIndex:"55",position:"relative" ,
  [theme.breakpoints.up('xs')]: {  width:"100%",borderRadius:"0",},

  [theme.breakpoints.up('md')]: {  width:"66rem",maxWidth:"100%",borderRadius:"20px",},
  [theme.breakpoints.up('lg')]: {  width:"70rem"},

  
  minHeight: "70vh",
display:"flex",
flexDirection: "column",
justifyContent: "center",
  marginLeft:"auto",
  marginRight:"auto",
  

boxShadow: theme.shadows[10]

}))
const textStyle={
    color: "#868686",
fontSize:"1.25rem",
fontFamily: "Roboto",
fontWeight: 300,
lineHeight: "1.75",
}
const BlueBtn=styled(Button)(({theme})=>({

    borderRadius:"50px",

    fontSize:"0.9rem",
    paddingTop:"1px",
    paddingBottom:"1px",


    height:"45px",
    textTransform: 'none',
    paddingLeft:"20px",
    paddingRight:"20px",
    borderWidth:"2px",
    fontWeight:700,
    borderColor:theme.palette.primary.main,
    "&:hover":{
        paddingLeft:"20px",
        paddingRight:"20px",
        borderWidth:"2px",
        borderColor:theme.palette.primary.main,
    }

}));

const CardContainer=styled('div')(({theme})=>({
    backgroundImage:`url(${revolutionBackground})`,

    width:"100%",height:"100em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"

  

}));
function RevloutionSection() {
    return (
        <CardContainer>

          <StyledCard >
      <CardContent sx={{textAlign:"center",display: "flex",flexDirection: "column",justifyContent: "center",alignItems:"center"}}>
        <Typography sx={{ fontSize: '2.5rem',fontFamily:'Pacifico' }} color="primary" gutterBottom>
        The Revolution
        </Typography>
 
        <Typography sx={textStyle} color="text.secondary">
        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
        </Typography>
        <BlueBtn color="primary" variant='outlined'>Learn More
<ArrowForwardIcon sx={{marginLeft:"8px",width:"12px"}}/></BlueBtn>
      </CardContent>
     
    </StyledCard>
        </CardContainer>
    )
}

export default RevloutionSection
