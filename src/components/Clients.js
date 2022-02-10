import React from 'react';
import {Grid } from '@mui/material';

const Clients = () => {
  return <div>
      <Grid container style={{background:'#EFF0F3'}}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
              <h1 style={{ fontSize:60 , fontWeight:'bold'}}>| Notice Our <strong style={{ fontSize:60 , fontWeight:'bold' , color:'#ED1B24'}}>Clients</strong></h1>
          </Grid>
      </Grid>
      <Grid container style={{background:'#EFF0F3'  , height:140 }}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
              <img src="./images/rm.png" alt="" style={{width:200}} />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
              <img src="./images/digital.png" alt="" style={{width:200}}  />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
              <img src="./images/dnd.png" alt="" style={{width:200}}  />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
              <img src="./images/icads.png" alt="" style={{width:200}}  />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
              <img src="./images/evo.png" alt="" style={{width:200}}  />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
              <img src="./images/pro.png" alt=""  style={{width:200}} />
          </Grid>
      </Grid>
      <Grid container style={{marginTop:100}}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
              <h1 style={{ fontSize:60 , fontWeight:'bold'}}>| #noticethe <strong style={{ fontSize:60 , fontWeight:'bold' , color:'#ED1B24'}}>red</strong></h1>
          </Grid>
      </Grid><br /><br />

      <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={3}>
          <img src="./images/c8.jpg" alt=""  style={{width:300}} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
          <img src="./images/c7.jpg" alt=""  style={{width:300}} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
          <img src="./images/c6.jpg" alt=""  style={{width:300}} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
          <img src="./images/c5.jpg" alt=""  style={{width:300}} />
          </Grid>
      </Grid><br />
      <Grid container>
      <Grid item xs={12} sm={12} md={8} lg={3}>
          <img src="./images/c4.jpg" alt=""  style={{width:300}} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
          <img src="./images/c3.jpg" alt=""  style={{width:300}} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
          <img src="./images/c2.jpg" alt=""  style={{width:300}} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={3}>
          <img src="./images/c1.jpg" alt=""  style={{width:300}} />
          </Grid>
      </Grid>
  </div>;
};

export default Clients;
