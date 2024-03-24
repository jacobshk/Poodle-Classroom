import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ImageContainer_ = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            backgroundColor: 'white', 
          }}
        >
          {
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ImageContainer_;