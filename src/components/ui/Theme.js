import { createTheme } from '@mui/material/styles';
const arcBlue="#0B72B9"
const arcOrange="#FFBA60";
const arcGrey = "#868686";

export default createTheme({
    palette:{
        common:{
            blue:arcBlue,
            orange:arcOrange,
        },primary:{
            main:arcBlue,
        },secondary:{
            main:arcOrange
        }
    },  breakpoints: {
        values: {
          xs: 0,
          sm: 960,
          md: 1250,
          lg: 1260,
          xl: 1536,
        },
      },
    typography:{
        tab:{
            fontFamily:"Raleway",
            textTransform:"none",
            fontWeight:"700",
            fontSize:"1rem",
        },
        estmaite:{
            
                fontFamily:"Pacifico",
                fontSize:"1rem",
                textTransform:"none",
                color:"#ffffff"
           
        },
        revloutionTitle:{
            fontFamily:"Pacifico",
            color:arcBlue,
            fontSize:"2.4rem",
            fontWeight:700


        }
    },components:{  
          MuiInputLabel:{
        styleOverrides:{
            root:{
                color:arcBlue,
                fontSize:"1rem"
            }
        }
    },MuiInput:{
        styleOverrides:{
            root:{
                fontWeight:300,
                color:arcGrey,
            },
            underline:{
                "&:before":{
                    borderBottom:`2px solid ${arcBlue}`,
                }
            
            }
        }

    }


}


});