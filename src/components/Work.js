import React from 'react';
import { Grid , Button } from '@mui/material';

const Work = () => {
  return <div>
      <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
              <h1 style={{ fontSize:60 , fontWeight:'bold'}}>| Notice Our  <strong style={{ fontSize:60 , fontWeight:'bold' , color:'#ED1B24'}}>Work</strong></h1>
          </Grid>
      </Grid>

      <Grid container>
          <Grid item xs={10} sm={10} md={4} lg={4}>
              <img src="./images/lusso_webmock.jpeg" alt="" style={{height:600 , width:500}} />
          </Grid>
          <Grid item xs={10} sm={10} md={4} lg={8}>
              <img src="./images/ef.jpg" alt="" style={{height:600 , width:800 , float:'right'}} />
          </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 style={{ fontSize:40 , fontWeight:'bold'}}>Lesso Group Website</h1>
            <p style={{ fontSize:20 }}>UI&UX Web Development</p>
            <Button variant="outlined" color="error" style={{background:'#ED1B24' , color:'white' , width:'30%' , padding:15 , fontFamily:'pippines' , fontWeight:'bold'}}>
                Get A Quote
            </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 style={{ fontSize:40 , fontWeight:'bold'}}>Lesso Group Brand</h1>
            <p style={{ fontSize:20 }}>Brand Development  , Print Design  , Stratigy</p>
            <Button variant="outlined" color="error" style={{background:'#ED1B24' , color:'white' , width:'30%' , padding:15 , fontFamily:'pippines' , fontWeight:'bold'}}>
                Get A Quote
            </Button>
        </Grid>
      </Grid> <br />

      <Grid container>
          <Grid item xs={10} sm={10} md={4} lg={8}>
              <img src="./images/fishyfishy_main.jpg" alt="" style={{height:600 , width:700 , float:'right'}} />
          </Grid>
          <Grid item xs={10} sm={10} md={4} lg={4}>
              <img src="./images/autowire_main1.jpg" alt="" style={{height:600 , width:400}} />
          </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 style={{ fontSize:40 , fontWeight:'bold'}}>Fishy Fishy</h1>
            <p style={{ fontSize:20 }}>UI&UX Web Development</p>
            <Button variant="outlined" color="error" style={{background:'#ED1B24' , color:'white' , width:'30%' , padding:15 , fontFamily:'pippines' , fontWeight:'bold'}}>
                Get A Quote
            </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 style={{ fontSize:40 , fontWeight:'bold'}}>Autowire</h1>
            <p style={{ fontSize:20 }}>Brand Development  , Print Design  , Stratigy</p>
            <Button variant="outlined" color="error" style={{background:'#ED1B24' , color:'white' , width:'30%' , padding:15 , fontFamily:'pippines' , fontWeight:'bold'}}>
                Get A Quote
            </Button>
        </Grid>
      </Grid>

  </div>;
};

export default Work;
