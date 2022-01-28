import React, { useState } from "react";


import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import usersIcon from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";
import estimateAnimation from "../animations/estimateAnimation/data.json";
import { Button, Typography } from "@mui/material";
import lottie from "lottie-web";
import { borderColor, styled} from '@mui/system';
import EstmateForm from './ui/EstmateForm';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const title={fontSize:"2.3rem",fontFamily:"Raleway",fontWeight:700}
const Text=styled(Typography)(({theme})=>({

    


    color: "#868686",
    fontSize:"1.25rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.4",
    
    
    marginBottom:"0.5rem"

}));
const OrangeBtn=styled(Button)(({theme})=>({
    ...theme.typography.estmaite,
    backgroundColor:theme.palette.secondary.main,
    borderRadius:"50px",


   borderWidth:"10px",
    height:"50px",
    paddingLeft:"35px",
    paddingRight:"35px",
    
    fontSize:"1.3rem"


}));


const ItemButtonSelected=styled(Grid)(({theme})=>({

    

   
  backgroundColor:theme.palette.secondary.main,


    "&:hover":{
        cursor:"pointer",

       
    },


}));
const StyledComp = styled(Grid)(({ theme, props }) => ({
  backgroundColor: props.myProp ? 'aliceblue' : 'red',
  padding: theme.spacing(1),
}));
const OptionButton = styled(Grid, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== 'selected' ,
  name: 'OptionButton',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: theme.spacing(1),
}));


const StyledCompbutton = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "selected" ,
})(({ theme, selected }) => ({
  backgroundColor: selected ? "#FFBA60" : "#ffffff",
  "&:hover":{
    cursor:"pointer",

    backgroundColor:selected?"#FFBA60":"#f1f1f1"
   
},
}));

<StyledComp myProp color="red" />
const ItemButton=styled(Grid)(({theme,props})=>({

    

   
  backgroundColor:props.selected?theme.palette.secondary.main:undefined,

  "&:hover":{
      cursor:"pointer",

      backgroundColor:props.selected?"#f1f1f1":theme.palette.secondary.main
     
  },


}));
  
  const softwareQuestions = [
    {
      id: 1,
      title: "Which service are you interested in?",
      active: false,
      answerd:true,
      options: [
        {
          id: 1,
          title: "Custom Software Development",
          subtitle: null,
          icon: software,
          iconAlt: "three floating screens",
          selected: false,
          cost: 0,
          changeQustions:1,
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0,
          changeQustions:1,
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 0,
          changeQustions:2,
        }
      ]
    },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 1000
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iPhone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 1000
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 1000
        }
      ],
      answerd: false
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 250
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 250
        }
      ],
      answerd: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: usersIcon,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 250
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 250
        }
      ],
      answerd: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      onlyOne:true,

      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 500
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 1000
        }
      ],
      answerd: false
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      onlyOne:true,
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.125
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.25
        }
      ],
      answerd: false
    }
  ];
  
  const websiteQuestions = [
    {
      id: 1,
      title: "Which service are you interested in?",
      active: false,
      answerd:true,
      options: [
        {
          id: 1,
          title: "Custom Software Development",
          subtitle: null,
          icon: software,
          iconAlt: "three floating screens",
          selected: false,
          cost: 0,
          changeQustions:1,
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0,
          changeQustions:1,
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 0,
          changeQustions:2,
        }
      ]
    },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      onlyOne:true,
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false,
          cost: 1000
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 2000
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 2500
        }
      ],
      answerd: false
    }
  ];

  const defaultQuestions = [
    {
      id: 1,
      title: "Which service are you interested in?",
      active: true,
      options: [
        {
          id: 1,
          title: "Custom Software Development",
          subtitle: null,
          icon: software,
          iconAlt: "three floating screens",
          selected: false,
          cost: 0,
          changeQustions:1,
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0,
          changeQustions:1,
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 0,
          changeQustions:2,
        }
      ]
    }
  ];
var estAnimation
function Estimate() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const large = useMediaQuery(theme.breakpoints.only('lg'));
    const med= useMediaQuery(theme.breakpoints.down('md'));
    const small= useMediaQuery(theme.breakpoints.down('sm'));
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = React.useState(false);
    const [currentQuestionsList,setCurrentQuestionsList]=useState(defaultQuestions)
    const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0)
    const [isAllAnswers,setIsAllAnswer]=useState(false)

    const[project,setProject]=useState('');



    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const calculateCost=()=>{
      let cost=0
      let platforms=[]
      let features=[];
      let users;
      let complexity;
      let website;


      currentQuestionsList.forEach((question)=>{

        question.options.forEach((option)=>{
          if(option.selected){
            if(question.title=="How many users do you expect?"){
              cost=cost*option.cost
            }else{
              cost=cost+option.cost
            }
            
            if(question.title=="Which platforms do you need supported?"){
              platforms.push(option.title)

            }else if(question.title=="Which features do you expect to use?"){
              features.push(option.title)
            }else if(question.title=="How many users do you expect?"){
              users=option.title
            }else if(question.title=="What type of custom features do you expect to need?"){
              complexity=option.title
            }else if(question.title=="Which type of website are you wanting?"){
              website=option.title
            }
          }
  
  
        })
      })

      return {project,cost,features,platforms,users,complexity,website};
    }

    const handleOptionClick=(option,index)=>{
      if(option.changeQustions){
        let newQusetions;
        setProject(option.title)
        if(option.changeQustions==1){
          newQusetions=softwareQuestions
        }else{
          newQusetions=websiteQuestions
        }
        ChangeQuestions(newQusetions)
        setIsAllAnswer(false)
      }else{
        let newList= JSON.parse(JSON.stringify(currentQuestionsList));

        if(currentQuestionsList[currentQuestionIndex].onlyOne){
          newList[currentQuestionIndex].options.forEach((option)=>{
            option.selected=false;
          })
          newList[currentQuestionIndex].options[index].selected=true;
          newList[currentQuestionIndex].answerd=true;

        }else{
          let oldValue=newList[currentQuestionIndex].options[index].selected;
          newList[currentQuestionIndex].options[index].selected=!oldValue;
          let answered=false
          newList[currentQuestionIndex].options.forEach((opt)=>{
             if(opt.selected){
              answered=true
             }
          })
          if(answered){
            newList[currentQuestionIndex].answerd=true;
          }else{
            newList[currentQuestionIndex].answerd=false;
          }

        }
        
        let allAns=false;

        let featuresQuestions=newList.filter((question)=>question.title == "Which features do you expect to use?")
        console.log(featuresQuestions)
        if(featuresQuestions.length>0){
          featuresQuestions.map((question)=>{
            if(question.answerd){
              allAns=true;
            }
          })
        }else{
          allAns=true;
        }
        newList.forEach((question)=>{
      
          if(!question.answerd && question.title != "Which features do you expect to use?"){
         
            allAns=false;
      
            
          }
        })
      
        if(allAns){
          setIsAllAnswer(true)
        }else{
          if(isAllAnswers){
            setIsAllAnswer(false)
          }
        }
        setCurrentQuestionsList(newList)
      }

    }
    const ChangeQuestions=(qustion)=>{
      setCurrentQuestionsList(qustion)
      setCurrentQuestionIndex(1)
    }


    const nextQuestion=()=>{
      setCurrentQuestionIndex(currentQuestionIndex+1);
      }
      
      const prevQustion=()=>{
        setCurrentQuestionIndex(currentQuestionIndex-1);
      }
    React.useEffect(() => {
        estAnimation= lottie.loadAnimation({
          container: document.querySelector("#estmate"),
          animationData: estimateAnimation,
          autoplay: false,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
    
        });
      }, []);
    return (
        <Grid container direction="row" alignItems="center" sx={{paddingBottom:"5em"}}>
            <Grid item container direction="column"  justifyContent={med?"center":undefined}  alignItems={med?"center":undefined} lg sx={{marginBottom:"12rem"}}>

                <Grid item>
                <Typography color="primary" sx={{...title,paddingLeft:"5rem",paddingTop:"0.8rem"}}>Estimate</Typography>

                </Grid>

                <Grid item>
                <div id="estmate"  style={{maxWidth:med?"50rem":"40rem",marginTop:"5rem"}} onClick={()=>{estAnimation.play()}}></div>

                </Grid>
            </Grid>


            <Grid item container  direction="column" sx={{textAlign:"center"}} lg>



         <Grid item>
             <Typography color="primary" sx={{fontSize:"2rem",fontWeight:300,paddingLeft:"3rem",paddingRight:"3rem"}}>{currentQuestionsList[currentQuestionIndex].title}</Typography>
         </Grid>

         {currentQuestionsList[currentQuestionIndex].subtitle!= null &&
              <Grid item>
              <Text>{currentQuestionsList[currentQuestionIndex].subtitle}</Text>
          </Grid>
         }
    
   
         <Grid item container  style={{marginTop:"2rem"}} >
         {currentQuestionsList[currentQuestionIndex].options.map((option,index)=>{

return   <StyledCompbutton onClick={()=>{handleOptionClick(option,index)}} item xs={12} sx={{marginTop:"1rem"}} selected={option.selected}  sm={4} >

<Typography color="primary" style={{fontSize:"1.3rem",fontWeight:300,textAlign:small?"left":"center",marginLeft:small?"3rem":undefined}}>{option.title}</Typography>
{option.subtitle && <Text variant="caption" sx={{fontSize:"1rem"}}>{option.subtitle}</Text>}

<div>
<img src={option.icon} style={{width:"8rem",height:"8rem"}}/>

</div>

             </StyledCompbutton>

         })}
     
         

       

         </Grid>
    <Grid item container justifyContent="space-around" style={{marginTop:"1.8rem",marginBottom:"2rem"}}>
 <Grid item >


    <Button onClick={prevQustion} sx={{borderRadius:"100%",height:"40px",width:"40px",minWidth:0,visibility:(currentQuestionIndex > 0 && currentQuestionsList.length>1)?"visible":"hidden"}}>
    <img src={backArrow} />
    </Button>
 

</Grid>

 <Grid item>
<Box onClick={nextQuestion} component={Button} sx={{visibility:(currentQuestionIndex < currentQuestionsList.length-1 && currentQuestionsList.length>1)?"visible":"hidden",borderRadius:"100%",height:"40px",width:"40px",minWidth:0}} >

<img src={forwardArrow}  />
</Box>

</Grid>
 </Grid> 
     



     <Grid item sx={{marginTop:"4rem"}}>
     <OrangeBtn  color="secondary" disabled={!isAllAnswers} onClick={handleClickOpen} variant='contained' sx={{marginLeft:"auto",marginRight:"auto",display:"block"}}>Get Estimate
      </OrangeBtn>
     </Grid>
            </Grid>



            <Dialog sx={{zIndex:4000}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      maxWidth="lg"
      fullWidth
      fullScreen={fullScreen} 
       
      >
   <DialogTitle>
     <Typography color="primary" sx={{...title,textAlign:"center",fontSize:"2.5rem"}}>Estimate</Typography>
   </DialogTitle>
        <DialogContent>
<EstmateForm handleClose={handleClose} preview={calculateCost()} />
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>

        </Grid>
        
    )
}

export default Estimate
