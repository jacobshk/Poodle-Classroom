import * as React from 'react';
import { Paper, Card, CardContent, Typography , Box} from '@mui/material';
import "./welcome.css"

export default function Welcome() {
  return (
    <>
    <div className='root'>
    <Box sx={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:1,
        height:1,
      }}>
      <Typography variant="h3" component="div">
            Welcome to Poodle Classroom!
      </Typography>
      <Typography variant="h5" component="div">
        Our online learning platform empowers you to explore, grow, and excel!
      </Typography>
    </Box>
    
    </div>
    
    </>
  );
}