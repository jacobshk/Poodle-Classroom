import React, { useState } from 'react';import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './ClassBox.css';
import axios from 'axios';
import { useEffect } from 'react';
/*
function formatClasses(classes){
  let newArr = []
  console.log("HERE" + (classes.length))  
  return(newArr)
}*/


async function tryGetClasses (username) {
  //EITHER use try / await OR .then / .catch NOT BOTH
  try{
    const response = await axios.get('http://127.0.0.1:8000/getUserClasses/',{
      params:{
        username: username
      }
    });
    const res = response.data['response']

    const classes = Object.values(res)
    //classes is an array of objects with keys correspodnign to the objs in views.py / get_user_classes
   
    return(classes)
  }
  catch(error){
    console.log("something went wrong! " + error)
    return([])
  }
};

export default function AddClassBox() {
  const [addedClasses, setAddedClasses] = useState([]);
  

  useEffect(() => {
    console.log("Here")
    let url = window.location.href
    let username = url.substring(url.indexOf('=')+1, url.length)

    const fetchClasses = async ()=>{
      try {
        const tempClasses = await tryGetClasses(username)
        let updatedClasses= []
        tempClasses.forEach((item) => {
    
          const string = "/" + item['class_id'] + "/class-page/student"
          updatedClasses.push(<div className="main-container">
          <div className="top-container">
              <div className="top-text">
                  <Link href={string} color="inherit" underline="none">
                      {item['class_name']}
                  </Link>
              </div>
          </div>
          <div className="bottom-container"> 
              <div className="bottom-text">
                  {item['teacher_name']}
              </div>
          </div>
        </div>)
        });
      

        console.log("Updated classes:" +(updatedClasses))
        setAddedClasses(updatedClasses);
      }
      catch(error){
        console.log("Something went wrong: " + error)
      }
    } 

    fetchClasses();

  }, []);
  //because of the arr as a 2nd arg, only runs on initial render: https://react.dev/learn/synchronizing-with-effects



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