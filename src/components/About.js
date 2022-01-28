import React, { useEffect } from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Avatar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { borderColor, styled} from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import EstmateSection from './ui/EstmateSection';

const title={fontSize:"2.3rem",fontFamily:"Raleway",fontWeight:700}
const GridContainer=styled(Grid)(({theme})=>({

    


    [theme.breakpoints.up('xs')]: {    paddingTop:"0.5rem",textAlign:"center"},

    [theme.breakpoints.up('lg')]: {   paddingTop:"1.3rem" ,textAlign:"left"},

}));
const Text=styled(Typography)(({theme})=>({

    


    color: "#868686",
    fontSize:"1.25rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.4",
    
    
    marginBottom:"0.5rem"

}));
const textStyle={
    color: "#868686",
    fontSize:"1.25rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.75",
    
    
    }
    const Icontitle={fontSize:"1.8rem",fontFamily:"Raleway",fontWeight:700}
function About() {
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const large = useMediaQuery(theme.breakpoints.up('md'));
    const smallScreen= useMediaQuery(theme.breakpoints.down('lg'));
useEffect(() => {
    console.log(matches)
  
}, [matches])
    return (
        
        <Box>
<Box sx={{paddingLeft:large?"5rem":"1rem",paddingRight:"1rem",paddingBottom:"3.5rem",paddingTop:"2rem"}}>
<Typography  sx={{...title,marginBottom:"1rem",textAlign:large?"left":"center"}} color="primary">About Us</Typography>
            <Typography  sx={{marginLeft:"auto",marginRight:"auto",textAlign:"center",fontStyle:"italic",
            paddingTop:"3rem",paddingBottom:"3rem",maxWidth:"20rem",fontSize:"1.3rem",fontWeight:350,maxWidth:large?"60em":matches?"40em":"90%"}} color="primary">Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.</Typography>

</Box>
       
<Grid container justifyContent="space-between" spacing={2} sx={{padding:matches?"5rem":"1rem",paddingBottom:"1rem"}}>
<GridContainer  xs={12} lg={6} item >
<Box sx={{maxWidth:matches?"40rem":undefined,marginLeft:"auto",marginRight:"auto"}}>

<Typography color="primary" sx={title}>History</Typography>
<Typography sx={{color:"#868686",fontStyle:"italic",fontSize:"1.3rem",fontWeight:500,marginBottom:"1.3rem"}}>We're the new kid on the block</Typography>
<Text >
Founded in 2019, we’re ready to get our hands on the world’s business problems
</Text>

<Text>
It all started with one question: Why aren’t all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.</Text>

<Text>
We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
</Text>

<Text>
All this change can be a lot to keep up with, and that’s where we come in.
</Text>
</Box>
</GridContainer>
<Grid item style={{ marginLeft:"auto",marginRight:"auto" }} >

    <img src={history} style={{ marginLeft:"auto",marginRight:"auto",maxWidth:smallScreen?"20rem": "100%" }}  />
</Grid>
</Grid>


<Grid container spacing={0} direction="column" justifyContent="center" alignContent="center" style={{marginTop:"10em",marginBottom:"1rem",textAlign:"center"}}>

<Grid item>
<Typography sx={{...Icontitle,marginBottom:"0rem"}} color="primary">Team</Typography>

</Grid>
<Grid item>
<Typography sx={{...textStyle,marginBottom:"0.5rem"}}>Zachary Reece, Founder</Typography>

<Typography sx={{...textStyle}}>I started coding when I was 9 years old.</Typography>


</Grid>

<Grid item container alignItems="center" justifyContent="center"> 
    <Avatar src={profile} style={{maxWidth:matches?500:300,width:"100%",height:"100%",marginTop:"1rem"}}>

    </Avatar>
</Grid>


</Grid>



<Box sx={{display:"flex",flexDirection:large?"row":"column",justifyContent:"space-around",alignItems:large?"flex-start":"center",paddingLeft:"3rem",paddingRight:"3rem",paddingBottom:"5rem"}}>
    <Box sx={{order:large?0:2,marginTop:large?0:"1rem",padding:large?0:"1rem",maxWidth:large?undefined:"20rem"}} >
        <img src={yearbook} style={{width:"100%",}} />
        <Text sx={{fontSize:"1rem"}}>a page from my Sophomore yearbook</Text>
    </Box>

<Box sx={{flexGrow:0,maxWidth:"30rem",textAlign:large?"left":"center",order:large?1:1}}>
    <Text>I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.</Text>
<Text>Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.</Text>
</Box>
    <Box sx={{order:large?2:2,padding:large?0:"1rem",maxWidth:large?undefined:"20rem"}} > 
        <img src={puppy} style={{width:"100%"}}  />
        <Text sx={{fontSize:"1rem"}}>my miniature dapple dachshund, Sterling</Text>
    </Box>
</Box>
<EstmateSection />
        </Box>
    )
}

export default About
