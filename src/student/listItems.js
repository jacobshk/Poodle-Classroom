import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {classData} from "../Data.js"



const addedClasses = []
  
classData.forEach((item) => {
    const string = "/" + item.classID + "/class-page/student"
    addedClasses.push(
      <ListItemButton href={string}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary={item.className} />
    </ListItemButton>
    );
  });



export const mainListItems = (
  <React.Fragment>
    <ListItemButton button component={Link} href="/home/student">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Enrolled Classes
    </ListSubheader>
    {addedClasses}
  </React.Fragment>
);
