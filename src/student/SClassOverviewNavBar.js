import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useState } from 'react';

async function tryJoinClass (username, class_id) {
  //EITHER use try / await OR .then / .catch NOT BOTH
  try{
    const response = await axios.get('http://127.0.0.1:8000/joinClass/',{
      params:{
        username: username,
        class_id: class_id
      }
    });
    const res = response.data['response']
    //classes is an array of objects with keys correspodnign to the objs in views.py / get_user_classes
   
    return(res)
  }
  catch(error){
    console.log("something went wrong! " + error)
    return([])
  }
};


export default function SClassOverviewNavBar() {
  const [open, setOpen] = React.useState(false);
  const [classCode, setClassCode] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e){
    //should try to add student to DB and display appropriate msg
    e.preventDefault();
    
    //TODO: Handle form validation
    console.log(classCode)

    let url = window.location.href
    let username = url.substring(url.indexOf('=')+1, url.length)

    const t = async ()=>{
      let temp = await tryJoinClass(username, classCode)
      console.log(temp)
    }
    t()
  };

  const handleInputChange = (event) => {
    setClassCode(event.target.value);
  };

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
            <img src="../poodle.ico" alt="This is a poodle" width="50" height="50"></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Poodle Classroom
          </Typography>
          <IconButton color="inherit" onClick={handleClickOpen}>
            <AddIcon></AddIcon>
      </IconButton >

      
      <form method="post" onSubmit={handleSubmit}>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>Enroll in a class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your class code.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="classCode"
            label="Code"
            fullWidth
            variant="standard"
            value={classCode}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
      </form>
          <IconButton color="inherit">
            <MenuIcon></MenuIcon>
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}