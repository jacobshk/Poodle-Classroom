import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { assignmentsData } from '../AssignmentData';

export default function Assignment() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Assignments Feed
      </Typography>
      {assignmentsData.map((assignment, index) => (
        <Paper key={index} elevation={3} sx={{ marginBottom: 2, padding: 2 }}>
          <Typography variant="h6" component="span">
            {assignment.title}
          </Typography>
          <Typography variant="body2" component="span" sx={{ marginLeft: 2 }}>
            Due: {assignment.date}
          </Typography>
          <Typography variant="body2" display="block" sx={{ marginTop: 1 }}>
            {assignment.description.substring(0, 100)}...
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}