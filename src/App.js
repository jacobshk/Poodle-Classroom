import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
            href="/"
            sx={{ mr: 2 }}
          >
            <img src="poodle.ico" alt="This is a poodle" width="50" height="50"></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Poodle Classroom
          </Typography>
          <Button href="/SignUp" color="inherit">Sign Up</Button>
          <Button href="/SignIn" color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}