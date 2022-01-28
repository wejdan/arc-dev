import { Button, TextField, Typography, useMediaQuery } from '@mui/material'
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
    
    fontSize:"1rem"


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
function ContactForm() {
 
  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')

  const [IsemailErr,setIsemailErr]=useState(false)
  const [IsPhoneErr,setIsPhoneErr]=useState(false)
  const [isDisabled,setIsDisabled]=useState(true)

  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const large = useMediaQuery(theme.breakpoints.up('md'));
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
<Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
<Dialog sx={{zIndex:4000}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      maxWidth={large?"sm":undefined}
      fullWidth
      fullScreen={fullScreen} 
       
      >
   
        <DialogContent>
   <Box sx={{display:"flex",direction:"column",alignItems:"center",justifyContent:"center"}}>
   <form style={{padding:fullScreen?"2rem":"3rem",maxWidth:"30rem"}}>
    <Typography color="primary"  sx={{fontWeight:700,fontSize:"2.3rem",marginBottom:0,textAlign:"center"}}>Confirm Message</Typography>


    <Box sx={{a:{textDecoration:"none"},marginTop:"1.5rem",marginBottom:"1.5rem"}}>
    <a href="#"><img src={phoneIcon} style={{marginRight:"0.7rem"}} />(555) 555-5555</a><br></br>
    <a href="#"><img src={emailIcon}  style={{marginRight:"0.7rem"}}  />zachary@gmail.com</a>
    </Box>
  <CssTextField label="Name" style={{marginBottom:"0.5em"}}   value={name} onChange={(e)=>{setName(e.target.value)}} variant="standard" fullWidth autocomplete="none"/>
      <CssTextField label="Email"  style={{marginBottom:"0.5em"}}  helperText={IsemailErr?"Invalid email":undefined}  error={IsemailErr} value={email} onChange={handleEmailChange}  variant="standard" fullWidth autocomplete="none"/>
      <CssTextField label="Phone"  style={{marginBottom:"0.5em"}} error={IsPhoneErr} helperText={IsPhoneErr?"Invalid phone":undefined} value={phone} onChange={handlePhoneChange}  variant="standard" fullWidth autocomplete="none"/>

      <CssTextField   variant="outlined" value={message} onChange={(e)=>{setMessage(e.target.value)}}  fullWidth multiline rows={6} autocomplete="none" style={{marginTop:"5rem",marginBottom:"2rem"}}/>
      <Button sx={{marginLeft:"auto",marginRight:"auto",display:"block"}} onClick={handleClose}>Cancel</Button>
          <OrangeBtn onClick={sendMessage} disabled={isDisabled} color="secondary" variant='contained' sx={{marginLeft:"auto",marginRight:"auto",display:"block"}}>Send Message
      <img src={airplane} style={{marginLeft:"1rem"}}/>
      </OrangeBtn>
      </form>
   </Box>

        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
<form style={{padding:"5rem",maxWidth:"30rem"}}>
    <Typography color="primary"  sx={{fontWeight:700,fontSize:"2.4rem",marginBottom:0,textAlign:large?"left":"center"}}>Contact Us</Typography>
    <Typography color="primary" style={{fontSize:"1.3rem",fontWeight:300,marginTop:0,textAlign:large?"left":"center"}}>We're waiting.</Typography>


    <Box sx={{a:{textDecoration:"none"},marginTop:"1.5rem",marginBottom:"1.5rem"}}>
    <a href="#"><img src={phoneIcon} style={{marginRight:"0.7rem"}} />(555) 555-5555</a><br></br>
    <a href="#"><img src={emailIcon}  style={{marginRight:"0.7rem"}}  />zachary@gmail.com</a>
    </Box>
  <CssTextField label="Name" style={{marginBottom:"0.5em"}}   value={name} onChange={(e)=>{setName(e.target.value)}} variant="standard" fullWidth autocomplete="none"/>
      <CssTextField label="Email"  style={{marginBottom:"0.5em"}}  helperText={IsemailErr?"Invalid email":undefined}  error={IsemailErr} value={email} onChange={handleEmailChange}  variant="standard" fullWidth autocomplete="none"/>
      <CssTextField label="Phone"  style={{marginBottom:"0.5em"}} error={IsPhoneErr} helperText={IsPhoneErr?"Invalid phone":undefined} value={phone} onChange={handlePhoneChange}  variant="standard" fullWidth autocomplete="none"/>

      <CssTextField   variant="outlined" value={message} onChange={(e)=>{setMessage(e.target.value)}}  fullWidth multiline rows={6} autocomplete="none" style={{marginTop:"5rem",marginBottom:"2rem"}}/>
      <OrangeBtn onClick={handleClickOpen} disabled={isDisabled} color="secondary" variant='contained' sx={{marginLeft:"auto",marginRight:"auto",display:"block"}}>Send Message
      <img src={airplane} style={{marginLeft:"1rem"}}/>
      </OrangeBtn>
      </form>
</Box>
    )
}

export default ContactForm
