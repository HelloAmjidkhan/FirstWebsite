import React from 'react';
import {Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

function Footer() {
  return <div>
      <Grid container style={{background:'#1D1C1C'}}>
          <Grid item xs={12} sm={12} md={8} lg={3}>
              <img src="./images/logo2.svg" alt="" style={{marginTop:50}} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
              <h3 style={{marginTop:60 , color:'white'}}>Perth</h3>
              <p style={{color:'#d0d6d1' ,  fontWeight:'bold'}}>1 Finance Place,</p> 
              <p style={{color:'#d0d6d1' ,  fontWeight:'bold'}}>Corner Weir Road,</p> 
              <p style={{color:'#d0d6d1' ,  fontWeight:'bold'}}>Malaga, WA 6090</p> 
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
              <h3 style={{marginTop:60 , color:'white'}}>Work inquiries</h3>
              <p style={{color:'#d0d6d1' ,  fontWeight:'bold'}}>Interested in working with us?,</p> 
              <p style={{color:'white' ,  fontWeight:'bold'}}>hello@redmark.agency</p> 
              <h3 style={{marginTop:50 , color:'white'}}>Phone:</h3>
              <p style={{color:'#d0d6d1' ,  fontWeight:'bold'}}>Ph: 0437 488 107</p> 
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
              <h3 style={{marginTop:60 , color:'white'}}>Stay in touch</h3>
              <TextField label="Outlined secondary" style={{marginTop:20 , background:'white'}} />
         
          </Grid>
      </Grid>
      <Grid container style={{background:'#1D1C1C'}}>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <h3  style={{color:'white'}}>© 2020 RedMark Agency - Made With Passion</h3>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <h3 style={{color:'white'}}>All rights reserved</h3>
          </Grid>
      </Grid>
  </div>;
}

export default Footer;
