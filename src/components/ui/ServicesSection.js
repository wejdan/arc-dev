import React from 'react'
import ServiceItem from './ServiceItem'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { borderColor, styled} from '@mui/system';
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websitesIcon from "../../assets/websiteIcon.svg";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const services=[{title:"Custom Software Development",subtitle:"Save Energy. Save Time. Save Money.",detailes:`
Complete digital solutions, from investigation to celebration.`,icon:customSoftwareIcon,link:"/customsoftware",selectedIndex:1},
{title:"iOS/Android App Development",subtitle:"Extend Functionality. Extend Access. Increase Engagement.",detailes:`
Integrate your web experience or create a standalone app
with either mobile platform.`,icon:mobileAppsIcon,link:"/mobileapps",selectedIndex:2},
{title:"Website Development",subtitle:"Reach More. Discover More. Sell More.",detailes:`
Optimized for Search Engines, built for speed.`,icon:websitesIcon,link:"websites",selectedIndex:3}]

function ServicesSection() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (


        <Box>
           
            {services.map((service,index)=>{
                    return   <Grid key={index}  container spacing={1} justifyContent={matches?"center":(index==1)?"flex-end":'flex-start'}  >
                        <Grid item >
                        <ServiceItem {...service} extend={index==1} small={index==2} />
                        </Grid>
                    </Grid>
            })}
            
        </Box>
    )
}

export default ServicesSection
