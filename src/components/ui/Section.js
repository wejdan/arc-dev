import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { borderColor, styled} from '@mui/system';

const Picture=styled('img')(({theme})=>({

    


    [theme.breakpoints.down('sm')]: { maxWidth:"300px"},
    [theme.breakpoints.up('sm')]: {  maxWidth:"40em" },

}));
function Section(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const large = useMediaQuery(theme.breakpoints.only('lg'));
    const med= useMediaQuery(theme.breakpoints.down('lg'));
    const small= useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{display:"flex",flexDirection:matches?"row":"column",alignItems:matches?"start":"center",justifyContent:matches?props.justify?props.justify:"space-between":"center",padding:"5rem",paddingRight:small?"1rem":"5rem",paddingLeft:small?"1rem":"5rem",minHeight:"60em",backgroundColor:props.bgColor}}>
            <Box sx={{order:props.filiped?1:0,textAlign:matches?props.filiped?"right":"left":"center",marginRight:matches &&props.justify?"20rem":0 }}>
<Typography  sx={{color:props.titleColor,marginBottom:"1rem",fontSize:"1.8rem",fontWeight:500}}>{props.title}</Typography>
{props.text.map((text)=>{

    return <Typography sx={{color:props.textColor,marginBottom:"1rem",maxWidth:"33rem",fontSize:"1.3rem",fontWeight:300}}>{text}</Typography>
})}
            </Box>

            <Box sx={{order:props.filiped?0:1,alignSelf:matches?props.iconPostion:undefined,}}>
                {props.icon?<Picture src={props.icon} />:<div id={props.animationName} style={{maxWidth:590}} onClick={()=>{props.animation.play()}}></div>}
             </Box>
        </Box>
    )
}

export default Section
