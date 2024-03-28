import React, { useState } from 'react';
import { Paper, Typography, Box, Dialog, DialogTitle, DialogContent, TextField, Button, IconButton, DialogActions, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { assignmentsData } from '../AssignmentData';

export default function Assignment() {
  const [open, setOpen] = useState(false);
  const [editableAssignment, setEditableAssignment] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  // Predefined categories for the dropdown
  const categories = ['Homework', 'Project', 'Test', 'Exam', 'Quiz'];

  
  const handleClickOpen = (assignment) => {
    setEditableAssignment({ ...assignment });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditableAssignment(null);
  };

  /* API CALL HERE */
  const handleUpdate = () => {
    console.log('Updated Assignment:', editableAssignment);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableAssignment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeleteClick = () => {
    setDeleteConfirmationOpen(true);
  };

  /* API CALL HERE */
  const handleConfirmDelete = () => {
    console.log('Deleted Assignment:', editableAssignment.title);
    setDeleteConfirmationOpen(false);
    setOpen(false);
  };

  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };

  // Cycling through the assignmentData to display each as its own component
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>Assignments Feed</Typography>
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
      {editableAssignment && (
        <Dialog open={open} onClose={handleClose} aria-labelledby="assignment-details-title">
          <DialogTitle id="assignment-details-title">Edit Assignment</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="title"
              label="Assignment Name"
              type="text"
              fullWidth
              variant="outlined"
              value={editableAssignment.title}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="date"
              label="Due Date"
              type="date"
              fullWidth
              variant="outlined"
              value={editableAssignment.date}
              onChange={handleChange}
            />
            <TextField
                  select
                  fullWidth
                  label="Type"
                  name="type"
                  variant="outlined"
                  margin="dense"
                  value={editableAssignment.type}
                  onChange={handleChange}
                >
                  {categories.map((category, index) => (
                    <MenuItem key={index} value={category}>
                      {category}
                    </MenuItem>
                  ))}
            </TextField>
            <TextField
              margin="dense"
              name="description"
              label="Description"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={editableAssignment.description}
              onChange={handleChange}
              inputProps={{
                maxLength: 250,
              }}
              helperText="Maximum 250 characters"
            />
            <TextField
              margin="dense"
              name="points"
              label="Points"
              type="text"
              fullWidth
              variant="outlined"
              value={editableAssignment.points}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <IconButton onClick={handleDeleteClick} color="error">
              <DeleteIcon />
            </IconButton>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleUpdate} color="primary" variant="contained">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Dialog open={deleteConfirmationOpen} onClose={handleCloseDeleteConfirmation}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this assignment?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteConfirmation}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}