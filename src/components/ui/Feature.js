import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled} from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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


function Feature(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{display:"flex",alignItems:"center",flexDirection:matches?"row":"column",marginBottom:"14rem"}}>
            <div style={{marginRight:"1rem"}}>

          
<Box  sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
<Typography  color='primary' sx={{fontSize:"1.7rem",fontFamily:"Raleway",fontWeight:700,margin:0,textAlign:"center"}}>{props.title }

{props.newLine && <><br></br> {props.newLine}</>}
</Typography>
<div>
<img src={props.icon}  style={{width:"100%"}}/>
</div>
</Box>




            </div>

            <div style={{textAlign:matches?"left":"center",maxWidth:"30em"}} >
            <Typography style={textStyle} sx={{marginBottom:"1rem"}}>{props.subtitle}</Typography>

<Typography style={{...textStyle,textAlign:matches?"left":"center"}} >{props.detailes}</Typography>
            </div>
            
        </Box>
    )
}

export default Feature
