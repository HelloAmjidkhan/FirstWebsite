import React from 'react';
import { Grid } from '@mui/material';

const Header = () => {
  return <div>
    <Grid container >
    <Grid item xs={12} sm={12} md={12} lg={12}>
    <img src="./images/hero.jpg" alt="" style={{width:'100%' , height:650 }}/>  
    </Grid>
    </Grid>
  </div>;
};

export default Header;
