import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { borderColor, styled} from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useGlobalContext } from '../Context'

const BlueBtn=styled(Button)(({theme})=>({

    borderRadius:"50px",

    fontSize:"0.6rem",
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

const textStyle={
    color: "#868686",
fontSize:"1.25rem",
fontFamily: "Roboto",
fontWeight: 300,
lineHeight: "1.75",
}
const GridContainer=styled(Grid)(({theme})=>({

    paddingTop:"3rem",paddingBottom:"9rem",


    [theme.breakpoints.down('sm')]: {     paddingLeft:"2rem",  paddingRight:"2rem",textAlign:"center",justifyContent:"center" },

    [theme.breakpoints.up('sm')]: {  paddingLeft:"3rem",paddingRight:"3rem"  ,textAlign:"left" ,justifyContent:"flex-start"},

}));

function ServiceItem(props) {
    const {setValue,setSelectedIndex } = useGlobalContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const large = useMediaQuery(theme.breakpoints.only('lg'));
    const med= useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <GridContainer container spacing={2}  
        alignItems="stretch" >
            <Grid item style={{width:matches?"35em":undefined}}>

          
<Typography  color='primary' sx={{fontSize:"1.7rem",fontFamily:"Raleway",fontWeight:700,margin:0}}>{props.title}
</Typography>
<Typography style={textStyle} sx={{marginBottom:"1rem"}}>{props.subtitle}</Typography>

<Typography style={textStyle} >{props.detailes}</Typography>
<BlueBtn  component={Link} to={props.link} color="primary" variant='outlined' onClick={()=>{setValue(1);setSelectedIndex(props.selectedIndex)}}>Learn More
<ArrowForwardIcon sx={{marginLeft:"8px",width:"12px"}}/></BlueBtn>

            </Grid>

            <Grid item >
                <img src={props.icon}  style={{width:"15em",maxWidth:"100%"}}/>
            </Grid>
            
        </GridContainer>
    )
}

export default ServiceItem
