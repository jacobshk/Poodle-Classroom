import React from 'react';
import { createTheme, ThemeProvider, Container, CssBaseline, Box, Typography, TextField, Button, Grid, Avatar, MenuItem, ListItemIcon } from '@mui/material';
import ClassIcon from '@mui/icons-material/Class';

const defaultTheme = createTheme();

export default function CreateAssignment() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      assignmentName: data.get('assignmentName'),
      category: data.get('category'),
      dateDue: data.get('dateDue'),
      points: data.get('points'),
      description: data.get('description'),
    });
  };

  /* Common Categories for the dropdown */
  const categories = ['Homework', 'Project', 'Test', 'Exam', 'Quiz'];

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" sx={{ width: '840px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
        <Box
          sx={{
            width: '50%', 
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background.paper', 
            borderRadius: 3, 
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ClassIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Assignment
          </Typography>
           {/* The Actual form code  */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoComplete="assignment-name"
                  name="assignmentName"
                  required
                  fullWidth
                  id="assignmentName"
                  label="Assignment Name"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  required
                  fullWidth
                  id="category"
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
                  id="description"
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
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
                  id="points"
                  label="Points"
                  name="points"
                  type="number"
                  autoComplete="points"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="dateDue"
                  label="Date Due"
                  name="dateDue"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Assignment
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
