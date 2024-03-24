import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Welcome() {
  return (
    <>
    <Box sx={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:1,
        height:1,
      }}>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1}}>
            Welcome to Poodle Classroom!
      </Typography>
    </Box>
    </>
  );
}