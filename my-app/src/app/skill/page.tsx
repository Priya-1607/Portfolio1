"use client"

import React from 'react'
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from 'next/image';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        
      </React.Fragment>
    );
  }
  
function Skillpage() {
    //https://media.licdn.com/dms/image/v2/D4D12AQEnWS4yh0PQxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708674183140?e=2147483647&v=beta&t=8XdE8THbnqwHJaHphUJcR9RMMxnheh4XTofQHuKCim4
  return (
    <div className='test'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{marginTop:'5rem',marginLeft:'10rem'}} columns={16}>
        <Grid item xs={2} width={'10rem'}>
        <Item sx={{height:'10rem'}}><img src="https://www.vikingsoftware.com/wp-content/uploads/2024/02/C-2.png"/> </Item> 
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfT_-hQqDG2bhUQoV2ACDkZNt4GXN0McNlnA&s"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"/></Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} sx={{marginTop:'1rem',marginLeft:'10rem'}}>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://www.okoone.com/wp-content/uploads/2024/10/tailwindcss-logo.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwlGiXsLjsbNDEBQ_fzEwxqLV3VNJIHL8z9SYZ1kb0PQbNXmqCYmm1DTdLwfCF1LDo-I&usqp=CAU"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLimkxKgVwum5XDrN89s2lmt_EFlBdJeItA&s"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://pbs.twimg.com/profile_images/1798056830041788417/HIapkjDx_400x400.jpg"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://media.licdn.com/dms/image/v2/D4D12AQEnWS4yh0PQxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708674183140?e=2147483647&v=beta&t=8XdE8THbnqwHJaHphUJcR9RMMxnheh4XTofQHuKCim4"/></Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} sx={{marginTop:'1rem',marginLeft:'10rem'}}>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://miro.medium.com/v2/resize:fit:1001/1*vPezx00A1u0WAfS8e8wBXQ.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLueaRJsD38b32MAw93xzUa7Pftq_l8BUDOw&s"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://miro.medium.com/v2/resize:fit:697/1*q0Tw3AvDkXhS_Ot3Y5_fxw.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeD8zT_fQg01sUVft4rGb1ap7nWJ9CDWHYlPgitsVhfRFUK-F5RSnJvBcxn1lgSPHsgHU&usqp=CAU"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://www.helenjoscott.com/wp-content/uploads/2020/09/1200px-IntelliJ_IDEA_Logo.png"/></Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} sx={{marginTop:'1rem',marginLeft:'10rem'}}>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://miro.medium.com/v2/resize:fit:1400/1*mtsk3fQ_BRemFidhkel3dA.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80OChMU7lMUMwU7CVu4ZJl1irvee4jmFfjw&s"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJ0RLjyVFuUglMuL9isTj5XyBlF2b2exntc9ixTivuuY_ez2hD1-IQlCE82zNeRZPlzU&usqp=CAU"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://lh5.googleusercontent.com/NpCFEToPJTrK4VZ7i4-ggNHgWfOGnLYh7S059c25TOCZunHJv8ljPOHIjnoWB_Y1cxCIQ6dbXf-x4J9G2SXvuUEoo2C3r2tWj3qekRyZRQhk0JT-vGtnVk5oOEFGcRn8hQ-I3CH-5FZXgPJFlG7-4pI"/></Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} sx={{marginTop:'1rem',marginLeft:'10rem'}}>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyRcCSscntSgQBNW6RLokUKIRQ975HkHJaw&s"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png"/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{height:'10rem'}}><img src="https://miro.medium.com/v2/resize:fit:720/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg"/></Item>
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}

export default Skillpage