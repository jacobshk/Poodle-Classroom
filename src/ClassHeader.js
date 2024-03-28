import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { Paper, Typography } from '@mui/material';

export default function ClassHeader() {
  const location = useLocation(); 
  const [className, setClassName] = useState('');

  useEffect(() => {
    // Extract the class name from the URL path dynamically
    const pathSegments = location.pathname.split('/').filter(Boolean); 
    const classNameIndex = 0; 
    if (pathSegments.length > classNameIndex) {
      setClassName(pathSegments[classNameIndex]);
    }
  }, [location]);

  
  return (
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 120,
          position: 'relative',
          backgroundImage: 'url(https://source.unsplash.com/random)', // Placeholder
          backgroundSize: 'cover', 
          color: 'white',
        }}
      >
        {/* Text positioned at the bottom */}
        <Typography variant="h5" component="h2" sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          textAlign: 'start',
          paddingLeft: '20px',
        }}>
          {className}
        </Typography>
      </Paper>
  );
}