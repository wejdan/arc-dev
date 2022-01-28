import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {routes} from '../Data'
import { Link } from "react-router-dom";

const listStyles=(index) => ({

  paddingBottom:0.7,
  paddingTop:0.7,
 
  
  fontSize: '1rem !important',
...(index==5&&{
  backgroundColor:"#FFBA60",
}),
 
  
"&.Mui-selected ":{
   backgroundColor: "#0a5a92 !important",

},"&.Mui-selected  .MuiListItemText-root":{
  opacity:1
},
"&:hover": {
 backgroundColor: "#0a67a7 !important",
 opacity:1
}, 
 
 
})


function ResponsiveDrawer(props) {

  const { window } = props;


  const drawer = (
    <div>
      <Toolbar />

      <List sx={{marginTop: { xs: '1rem',sm:"1.5rem",md:"1.6rem" },color:"white"}}>
        {routes.map((route, index) => (
          <ListItem divider selected={index === props.value}
          sx={listStyles(index)}
           component={Link} to={route.link} button key={route.name}  onClick={()=>{props.handleDrawerToggle();props.setValue(index)}}>
     
            <ListItemText disableTypography primary={route.name} sx={{fontWeight:700,fontSize:"1rem",opacity:0.7,fontFamily:"Raleway",}} />
          </ListItem>
        ))}
      </List>

   
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={props.openSidebar}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{ zIndex:1,
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' ,backgroundColor:"#0B72B9"},
          }}
        >
          {drawer}
        </Drawer>
       
      </Box>
  
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;