import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";


const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3
    }
  ];

  const useStyles=makeStyles(theme=>({
      
    menuPaper:{
       backgroundColor:"#0B72B9",
       borderRadius:0,
       color:"white",
  

   },
   menuItem: {
       ...theme.typography.tab,
       paddingBottom:10,
       paddingTop:10,
       opacity:0.7,
     "&.Mui-selected":{
        backgroundColor: "#0a5a92 !important",
     },
    "&:hover": {
      backgroundColor: "#0a67a7 !important",
      opacity:1
    },   


}
}));
function MenuEl(props) {
    const classes=useStyles();
    console.log("selected index",props.selectedIndex)
    
    return (
        <div>
        <Menu sx={{zIndex:3000}}
        elevation={0}
        id="lock-menu"
        classes={{ paper: classes.menuPaper }}
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}

          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
        MenuListProps={{
            onMouseLeave: props.handleClose
        }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
          component={Link}
          to={option.link}
        
          classes={{ root: classes.menuItem,selected:classes.selected }}

            key={option.name}
            selected={index === props.selectedIndex}
          
            onClick={(event) => {props.handleMenuItemClick(event, index);props.setValue(1);props.handleClose();}}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu></div>
    )
}

export default MenuEl
