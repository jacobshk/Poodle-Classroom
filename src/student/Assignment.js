import React, { useState } from 'react';
import { Paper, Typography, Box, Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { assignmentsData } from '../AssignmentData';

export default function Assignment() {
  const [open, setOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleClickOpen = (assignment) => {
    setSelectedAssignment(assignment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAssignment(null);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Assignments Feed
      </Typography>
      { /* Cycling through the assignmentData to display each as its own component */}
      {assignmentsData.map((assignment, index) => (
        <Paper key={index} elevation={3} sx={{ marginBottom: 2, padding: 2, cursor: 'pointer' }} onClick={() => handleClickOpen(assignment)}>
          <Typography variant="h7" component="span">
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
      {selectedAssignment && (
        <Dialog open={open} onClose={handleClose} aria-labelledby="assignment-details-title">
          <DialogTitle id="assignment-details-title">Assignment Details</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Assignment Name"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedAssignment.title}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="dense"
              id="date"
              label="Due Date"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedAssignment.date}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="dense"
              id="type"
              label="Type"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedAssignment.type}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={selectedAssignment.description}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="dense"
              id="points"
              label="Points"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedAssignment.points}
              InputProps={{
                readOnly: true,
              }}
            />
          </DialogContent>
          <Button onClick={handleClose}  color="primary" variant="contained">
            Close
          </Button>
        </Dialog>
      )}
    </Box>
  );
}