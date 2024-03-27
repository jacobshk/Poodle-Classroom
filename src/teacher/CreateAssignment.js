import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
  CssBaseline,
  createTheme,
  ThemeProvider
} from '@mui/material';
import ClassIcon from '@mui/icons-material/Class';

const defaultTheme = createTheme();

export default function CreateAssignment() {
  const [open, setOpen] = useState(true);

  // Categories for the dropdown
  const categories = ['Homework', 'Project', 'Test', 'Exam', 'Quiz'];

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Dialog should submit now.");
    handleClose();
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
    console.log("Dialog should close now.");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <ClassIcon /> Create Assignment
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="assignment-name"
                  name="assignmentName"
                  required
                  fullWidth
                  label="Assignment Name"
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                select
                required
                fullWidth
                label="Category"
                name="category"
                defaultValue=""
              >
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                required
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={4}
                defaultValue=""
                inputProps={{
                  maxLength: 250,
                }}
                helperText="Maximum 250 characters"
              />
              </Grid>
              <Grid item xs={6}>
                <TextField
                required
                fullWidth
                label="Points"
                name="points"
                type="number"
                defaultValue=""
              />
              </Grid>
              <Grid item xs={6}>
                <TextField
                required
                fullWidth
                label="Date Due"
                name="dateDue"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel</Button>
            <Button type="submit" color="primary" variant="contained">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </ThemeProvider>
  );
}