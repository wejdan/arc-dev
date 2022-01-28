import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React,{useEffect, useState,useRef} from 'react'
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import airplane from "../../assets/send.svg";
import { borderColor, styled} from '@mui/system';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";

import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EstmateSection from './EstmateSection';
import check from "../../assets/check.svg";
import { Fullscreen } from '@mui/icons-material';


const StyledTextField = styled(TextField)({
 
  });
  const OrangeBtn=styled(Button)(({theme})=>({
    ...theme.typography.estmaite,
    backgroundColor:theme.palette.secondary.main,
    borderRadius:"50px",


   borderWidth:"10px",
    height:"45px",
    paddingLeft:"30px",
    paddingRight:"30px",
    
    fontSize:"1.3rem"


}));
  const CssTextField = styled(TextField)({


      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#0B72B9',
          borderWidth:"2px"
        },    '&:hover fieldset': {
            borderColor: '#0B72B9',
          },
  
        '&.Mui-focused fieldset': {
          borderColor: '#074f81',
        },
      },
    '& label.Mui-focused': {
        color: '#074f81',
      },

  
      
  
      
    '& .MuiInput-underline::before': {
  
        borderColor: '#0B72B9 !important',
        borderWidth:"2px"

      },
      '& .MuiInput-underline::after:': {
        borderColor: 'orange'
      },  '& .MuiInput-underline:after': {
        borderBottomColor: '#074f81',
      },
  });

  const Price=styled('span')(({theme})=>({

    


    color: theme.palette.secondary.main,
    fontSize:"2rem",
 
    fontFamily:"Pacifico",
    fontWeight: 500,
    lineHeight: "0",
    


}));
  const Text=styled(Typography)(({theme})=>({

    


    color: "#868686",
    fontSize:"1.25rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.4",
    
    
    marginBottom:"0.5rem"

}));
function EstmateForm(props) {
 
  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')

  const [IsemailErr,setIsemailErr]=useState(false)
  const [IsPhoneErr,setIsPhoneErr]=useState(false)
  const [isDisabled,setIsDisabled]=useState(true)

const vowels=['a','o','e','i','u','y']
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const med = useMediaQuery(theme.breakpoints.down('md'));
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [platforms,setPlatforms]=useState('')
  const [features,setFeature]=useState('')
  const [website,setWebsite]=useState('')

  useEffect(() => {
if(props.preview.platforms){
  let platformPreviwe=[];
  props.preview.platforms.forEach((platform)=>{
    if(vowels.includes(platform.substring(0, 1).toLowerCase())){
      platformPreviwe.push("an "+platform)
    }else{
      platformPreviwe.push("a "+platform)
    }
  })
  if(props.preview.platforms.length>1){

    setPlatforms(platformPreviwe.slice(0, -1).toString()+" And "+platformPreviwe.slice(-1)[0])
   
  }else{ 
    setPlatforms(platformPreviwe.toString())
  }
  console.log(platforms)
}
if(props.preview.features){
  if(props.preview.features.length>1){
    setFeature(props.preview.features.slice(0, -1).toString()+" And "+props.preview.features.slice(-1)[0])
  }else{
    setFeature(props.preview.features.toString())
  }
  
}

if(props.preview.website){
  let web;
  if(vowels.includes(props.preview.website.substring(0, 1).toLowerCase())){
    setWebsite("an "+props.preview.website)
  }else{
    setWebsite("a "+props.preview.website)

  }
}
  }, [])

const sendMessage=()=>{
  alert("sending...")
}

  useEffect(()=>{
    if((name && email && phone && message) &&(!IsemailErr) && (!IsPhoneErr)){

      if(isDisabled){
        setIsDisabled(false);
      }
      
     
    }

    else{
      if(!isDisabled){
        setIsDisabled(true)
      }
    }
  },[name,message,phone,email,IsemailErr,IsPhoneErr])


useEffect(() => {
  console.log("fullScreen ",fullScreen)
}, [fullScreen])

  const handlePhoneChange=(e)=>{
    setPhone(e.target.value);
    var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (pattern.test(e.target.value)) {
     setIsPhoneErr(false)
    } else {
      
      setIsPhoneErr(true)
    }
  
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
    var pattern = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+([A-Za-z0-9]{2,4}|museum)$/;
    if (pattern.test(e.target.value)) {
     setIsemailErr(false)

    } else {
      
      setIsemailErr(true)
    }

  }


    return (


      <Grid container sx={{paddingBottom:"3rem"}}>
<Grid item container direction="column" justifyContent="center" alignItems="center" sm>
<Box sx={{paddingLeft:"1rem",paddingRight:"1rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:"22rem"}}>

<form >

  <CssTextField label="Name" style={{marginBottom:"0.5em"}}   value={name} onChange={(e)=>{setName(e.target.value)}} variant="standard" fullWidth autocomplete="none"/>
      <CssTextField label="Email"  style={{marginBottom:"0.5em"}}  helperText={IsemailErr?"Invalid email":undefined}  error={IsemailErr} value={email} onChange={handleEmailChange}  variant="standard" fullWidth autocomplete="none"/>
      <CssTextField label="Phone"  style={{marginBottom:"0.5em"}} error={IsPhoneErr} helperText={IsPhoneErr?"Invalid phone":undefined} value={phone} onChange={handlePhoneChange}  variant="standard" fullWidth autocomplete="none"/>

      <CssTextField placeholder='Tell us more about your project'  variant="outlined" value={message} onChange={(e)=>{setMessage(e.target.value)}}  fullWidth multiline rows={6} autocomplete="none" style={{marginTop:"5rem",marginBottom:"2rem"}}/>

      </form>
<Text sx={{lineHeight:"1.7",textAlign:fullScreen?"center":"left"}}>
We can create this digital solution for an estimated <Price >${props.preview.cost}</Price>
</Text>
<Text sx={{lineHeight:"1.7",textAlign:fullScreen?"center":"left"}}>
Fill out your name, number, and email, place your request, and we’ll get back to you with details moving forward and a final price.

</Text>

{fullScreen && <Box sx={{marginTop:"5rem"}}>

<OrangeBtn onClick={sendMessage} disabled={isDisabled} color="secondary" variant='contained' >Place Requset
      <img src={airplane} style={{marginLeft:"1rem"}}/>
      </OrangeBtn>

      <Button sx={{marginLeft:"auto",marginRight:"auto",display:"block",fontWeight:300}} onClick={props.handleClose}>Cancel</Button>

      </Box>}
</Box>
</Grid>


{!fullScreen && <Grid item container direction="column"  spacing={2} sm>
{platforms.length>0 && <Grid item container alignItems="center" >
   <Grid item>
     <img src={check} style={{marginRight:"2rem"}} />
   </Grid>
  <Grid item> <Text sx={{maxWidth:med?"20rem":"25rem"}}>You want {props.preview.project} for {platforms}</Text></Grid>
 </Grid>} 

 {features.length>0 && <Grid item container alignItems="center" >
   <Grid item>
     <img src={check} style={{marginRight:"2rem"}} />
   </Grid>
  <Grid item> <Text sx={{maxWidth:med?"20rem":"25rem"}}>with {features}</Text></Grid>
 </Grid>} 


{props.preview.complexity && <Grid item container alignItems="center" >
   <Grid item>
     <img src={check} style={{marginRight:"2rem"}} />
   </Grid>
  <Grid item> <Text sx={{maxWidth:med?"20rem":"25rem"}}>The custom features will be of {props.preview.complexity} complexity, and the project will be used by about {props.preview.users}.</Text></Grid>
 </Grid>} 
 {props.preview.project=="Website Development" && <Grid item container alignItems="center" >
   <Grid item>
     <img src={check} style={{marginRight:"2rem"}} />
   </Grid>
  <Grid item> <Text sx={{maxWidth:med?"20rem":"25rem"}}>You want {website} website.</Text></Grid>
 </Grid>} 

 <Grid item>
 <OrangeBtn onClick={sendMessage} disabled={isDisabled} color="secondary" variant='contained' sx={{marginTop:"5rem"}}>Place Requset
      <img src={airplane} style={{marginLeft:"1rem"}}/>
      </OrangeBtn>
 </Grid>
</Grid> }
      </Grid>

    )
}

export default EstmateForm
