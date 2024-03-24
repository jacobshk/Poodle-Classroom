import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper } from '@mui/material';

function createData(date, name, grade, category) {
  return { date, name, grade, category };
}

const rows = [
  createData('03/15/2024', 'Homework 1', 95, 'HW'),
  createData('03/20/2024', 'Quiz 1', 87, 'Quiz'),
  createData('03/22/2024', 'Project 1', 92, 'HW'),
  createData('03/25/2024', 'Midterm', 88, 'Exam'),
  // Add more rows as needed
];

// Utility function for sorting rows
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function Assignments() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sortDirection={orderBy === 'date' ? order : false}>
              <TableSortLabel
                active={orderBy === 'date'}
                direction={orderBy === 'date' ? order : 'asc'}
                onClick={(e) => handleRequestSort(e, 'date')}
              >
                Due Date
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'name' ? order : false}>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={(e) => handleRequestSort(e, 'name')}
              >
                Assignment
              </TableSortLabel>
            </TableCell>
            <TableCell align="right" sortDirection={orderBy === 'grade' ? order : false}>
              <TableSortLabel
                active={orderBy === 'grade'}
                direction={orderBy === 'grade' ? order : 'asc'}
                onClick={(e) => handleRequestSort(e, 'grade')}
              >
                Grade
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'category' ? order : false}>
              <TableSortLabel
                active={orderBy === 'category'}
                direction={orderBy === 'category' ? order : 'asc'}
                onClick={(e) => handleRequestSort(e, 'category')}
              >
                Category
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(rows, getComparator(order, orderBy))
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.grade}</TableCell>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
