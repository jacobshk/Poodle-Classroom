import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { assignmentsData } from './AssignmentData';

const Upcoming = () => {
  // Sort assignments by date
  const sortedAssignments = assignmentsData.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  return (
    <List>
      {sortedAssignments.map((assignment, index) => (
        <ListItem key={index}>
          <ListItemText
          // Only shows the first 20 characters of the title.
            primary={`${assignment.title.substring(0, 20)}${assignment.title.length > 20 ? '...' : ''}`}
            secondary={new Date(assignment.date).toLocaleDateString()}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Upcoming;