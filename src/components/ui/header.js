import React, { useEffect } from "react";
import { AppBar,Toolbar } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import MenuEl from "./MenuEl";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ResponsiveDrawer from "./ResponsiveDrawer";
import { routes } from "../Data";
import { useGlobalContext } from '../Context'

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  

  const useStyles=makeStyles(theme=>({
      
      toolbarMargin:{
          ...theme.mixins.toolbar,

          marginBottom:"1.5rem",
          [theme.breakpoints.up('sm')]: {      height:"5rem",   },
          [theme.breakpoints.up('lg')]: {      height:"6rem",   },

      },logo:{
          height:"4.8rem",
          [theme.breakpoints.up('sm')]: {      height:"6.15rem",   },
          [theme.breakpoints.up('lg')]: {height:"7rem"},

       

      },tabContainer:{

          marginLeft:"auto"

      },tab:{

...theme.typography.tab,
            minWidth:10,
            marginLeft:"18px",
            color:"#ffffff"
  

      },btn:{
          ...theme.typography.estmaite,
          borderRadius:"50px",
          marginLeft:"50px",
          marginRight:"25px",
    
          height:"45px",
         
      },link:{
          height:"4.8rem",   
           [theme.breakpoints.up('sm')]: {      height:"6.15rem",   },
           [theme.breakpoints.up('lg')]: {height:"7rem",},
      },MenuIcon:{
          marginLeft:"auto",
          marginRight:"28px",
          fontSize:"3.2rem",
          color:"#053455",
          cursor:"pointer"
      
      }
  }));

  const options=['/services','/customsoftware',"/mobileapps","/websites"]
export default function Header(props){
    const { value,setValue,selectedIndex,setSelectedIndex } = useGlobalContext();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [openSidebar, setOpenSidebar] = React.useState(false);
    const [activeTab,setActiveTab]=React.useState(0);

    const handleDrawerToggle = () => {
        console.log("openSidebar",openSidebar)
        setOpenSidebar(!openSidebar);
    };
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(true)
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
      setOpen(false)
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setOpen(false)
      
    };

    const handleChange=(e,newValue)=>{
        setValue(newValue)
    }

    useEffect(()=>{

if(value!=1){
    setSelectedIndex(null);

}
        if((window.location.pathname=="/" ) && (value!==0)){
            setValue(0)
            
        }else if((options.includes(window.location.pathname)) && (value!==1)){
            console.log(options.indexOf(window.location.pathname))
            setValue(1);
            setSelectedIndex(options.indexOf(window.location.pathname));
        }else if((window.location.pathname=="/revolution") && (value!==2)){
            
            setValue(2)
        }else if((window.location.pathname=="/about") && (value!==3)){
            
            setValue(3)
        }else if((window.location.pathname=="/contact") && (value!==4)){
            
            setValue(4)
        }else if((window.location.pathname=="/estimate") && (value!==5)){
            
            setValue(5)
        }
           
     
    },[value])

   
const classes=useStyles();
    return (
        <React.Fragment>

        <ElevationScroll>

        <AppBar sx={{ zIndex:2000}}>
            <Toolbar disableGutters>

              <Link  className={classes.link} to="/" onClick={()=>{setValue(0)}}><img src={logo} className={classes.logo} alt="componey logo"  /></Link>
         {matches ?<> <Tabs value={value} onChange={handleChange}  className={classes.tabContainer} textColor="inherit"  indicatorColor="primary">
          {routes.slice(0, -1).map((route,index)=>{
 return  <Tab component={Link}  key={route.name}  className={classes.tab}  label={route.name} to={route.link} onMouseOver={index==1 ? handleClickListItem :undefined} />
             
          })}

        </Tabs><Button component={Link} variant="contained" color="secondary" className={classes.btn} to="/estimate" onClick={()=>{setValue(5)}}> Free Estmate</Button></>
:<MenuIcon className={classes.MenuIcon}             onClick={handleDrawerToggle}/>}       
            </Toolbar>
            <MenuEl handleClose={handleClose} handleMenuItemClick={handleMenuItemClick} handleClickListItem={handleClickListItem}
            selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} anchorEl={anchorEl} open={open} setValue={setValue}/>
        </AppBar>


        </ElevationScroll>
                <div className={classes.toolbarMargin}/>
                <ResponsiveDrawer openSidebar={openSidebar} handleDrawerToggle={handleDrawerToggle} setValue={setValue} value={value} />

                </React.Fragment>

    )

}