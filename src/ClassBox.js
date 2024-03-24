import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './ClassBox.css';

export default function AddClassBox() {
  const classes = [ 
    ['class1', 'teacherName1','classID1'], 
    ['class2', 'teacherName2','classID2'],
  ]
  
  const addedClasses = []
  
  classes.forEach((item) => {
    const string = "/" + item[2] + "/class-page/student"
    addedClasses.push(<div class="main-container">
    <div class="top-container">
        <div class="top-text">
            <Link href={string} color="inherit" underline="none">
                {item[0]}
            </Link>
        </div>
    </div>
    <div class="bottom-container"> 
        <div class="bottom-text">
            {item[1]}
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