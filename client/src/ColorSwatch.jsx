import { Container, Box } from '@mui/material';
import React from 'react';

const ColorSwatch = ({ colorCode }) => {
  return (
    <Container id="color-palette-container">
      <Box sx={{height: '70px', width: '70px', backgroundColor: `#${colorCode}`}}/>
    </Container>
  )
}

export default ColorSwatch;