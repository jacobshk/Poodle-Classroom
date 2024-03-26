import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './ClassBox.css';
import axios from 'axios';

const tryGetClasses = async (username) => {
  await axios
  .get(
    'http://127.0.0.1:8000/getUserClasses/',
    {params:{
      username: username
    }})
    .then((response)=>{
      const res = response.data
      //console.log(res)
      return(res)
    })
    .catch((error) =>{
      console.error('Error fetching data:', error);
    });
};

export default  function AddClassBox() {
  console.log("Here")
  let url = window.location.href
  let username = url.substring(url.indexOf('=')+1, url.length)
  let temp = tryGetClasses(username)
  temp.then((out)=>{
    console.log(out)
  })
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