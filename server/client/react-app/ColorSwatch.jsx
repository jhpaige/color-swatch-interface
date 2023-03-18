// Import Card and Box components from MUI
import { Card, Box } from '@mui/material';

// Import React
import React from 'react';

// Define ColorSwatch component
const ColorSwatch = ({ colorCode, selectedCode, handleDetailClick }) => {

  // Render the UI
  return (
    <Card
      // Set card ID and onClick handler
      id="color-palette-box"
      onClick={() => handleDetailClick(colorCode)}
      sx={{
        // Set card style based on whether it's selected or not
        width: colorCode != selectedCode ? '120px' : '100%',
        minHeight: colorCode != selectedCode ? '156px' : '100%',
        margin: 'auto',
        position: 'relative',
        marginBottom: '20px',
        border: colorCode != selectedCode ? 0 : 0.8,
        borderColor: "primary.main",
        '&:hover': {
          boxShadow: 5,
          cursor: 'pointer',
        },
    }}>
      {/* Render the color swatch */}
      <Box sx={{
        minHeight: colorCode != selectedCode ? selectedCode != null ? '100px' : '120px' : '480px',
        width: colorCode != selectedCode ? '120px' : '100%',
        backgroundColor: `#${colorCode}`
      }}/>
      {/* Render the color code */}
      <Box sx={{
        padding: '10px',
        width: '100px'
      }}>#{colorCode}</Box>
    </Card>
  )
}

// Export ColorSwatch component
export default ColorSwatch;
