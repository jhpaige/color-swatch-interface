import { Container, Card, Box, Text} from '@mui/material';
import React from 'react';

const ColorSwatch = ({ colorCode }) => {
  return (
    <Card id="color-palette-box" sx={{
      width: '120px',
      margin: 'auto',
      marginBottom: '20px',
      '&:hover': {
        boxShadow: 5,
        cursor: 'pointer',
      },
    }}>
      <Box sx={{
        height: '120px',
        width: '120px',
        backgroundColor: `#${colorCode}`
      }}/>
      <Box sx={{
        padding: '10px',
        width: '100px'
      }}>#{colorCode}</Box>
    </Card>
  )
}

export default ColorSwatch;