import React from 'react';
import {Grid } from '@mui/material';
import { Button , Box } from '@mui/material';

const Card = () => {
  return <div>
      <Grid container style={{marginTop:-400}}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
              <h1 style={{ color:'white' , fontSize:60}}>'Your Creative Ad Agency'</h1>
              <Button variant="outlined" color="error" style={{background:'#ED1B24' , color:'white' , width:'15%', padding:15 , fontFamily:'pippines' , fontWeight:'bold'}}>
                Get A Quote
            </Button>
          </Grid>
      </Grid><br/><br/><br/><br/><br/><br/>
      <Grid container >
          <Grid item xs={12} sm={12} md={6} lg={3}>
              <img src="./images/creative.jpg" alt="" style={{height:400 , borderRadius:10}}/>  
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
              <img src="./images/design.jpg" alt="" style={{height:400 , borderRadius:10}}/>  
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
              <img src="./images/digital.jpg" alt="" style={{height:400 , borderRadius:10}}/>  
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
              <img src="./images/video.jpg" alt="" style={{height:400 , borderRadius:10}}/>  
          </Grid>
          
      </Grid><br /><br /><br /><br />
      
      <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box
             sx={{
             width: 550,
             height: 110,
             backgroundColor: '#ED1C24',
             marginTop:15,
               }}
             />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={3}>
              <img src="./images/Group-15.svg" alt="" style={{width:300}}/>
          </Grid><br/><br />
          <Grid item xs={12} sm={12} md={6} lg={3}>
              <h1 style={{fontWeight:'bold'}}>Get a <strong style={{color:'#ED1C24'}}>Quote</strong></h1>
              <h1 style={{fontWeight:'bold' , color:'#ED1C24'}}>For</h1>
              <h1 style={{fontWeight:'bold' , color:'#ED1C24'}}>Your Project</h1>
              <h1 style={{fontWeight:'bold'}}>Today</h1>
              <Button variant="outlined" color="error" style={{background:'#ED1B24' , color:'white' , width:'50%' , padding:15 , fontFamily:'pippines' , fontWeight:'bold'}}>
                Get A Quote
            </Button>
              
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2}>
          <Box
             sx={{
             width: 220,
             height: 110,
             backgroundColor: '#ED1C24',
             marginTop:15,
               }}
             />
          </Grid>
      </Grid>
  </div>;
};

export default Card;
