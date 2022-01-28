import React from 'react'
import EstmateSection from './ui/EstmateSection';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContactForm from './ui/ContactForm';
function Contact() {
    return (
        <Grid container>
  
  <Grid item xs={12} lg={4}>
<ContactForm />
</Grid>          


            <Grid item xs={12} lg={8}>
            <EstmateSection  />
            </Grid>

        </Grid>
    )
}

export default Contact
