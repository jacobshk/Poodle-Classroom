import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './ClassBox.css';
import {classData} from "./Data.js"

export default function AddClassBox() {
  
  const addedClasses = []
  
  classData.forEach((item) => {
    const string = "/" + item.classID + "/class-page/student"
    addedClasses.push(<div class="main-container">
    <div class="top-container">
        <div class="top-text">
            <Link href={string} color="inherit" underline="none">
                {item.className}
            </Link>
        </div>
    </div>
    <div class="bottom-container"> 
        <div class="bottom-text">
            {item.teacherName}
        </div>
    </div>
  </div>)
  });


  
  return (
    <Box
      id="class"
      my={4}
      display="flex"
      alignItems="center"
      gap={10}
      p={15}
      sx={{ flexWrap: 'wrap'}}
    >
      
    {addedClasses}
    
    </Box>
    
  );
}