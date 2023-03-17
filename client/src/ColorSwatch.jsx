import { Container, Card, Box, Text} from '@mui/material';
import React from 'react';

const ColorSwatch = ({ colorCode, selectedCode, handleDetailClick }) => {
  return (
    <Card
      id="color-palette-box"
      onClick={() => handleDetailClick(colorCode)}
      sx={{
        width: colorCode != selectedCode ? '120px' : '100%',
        margin: 'auto',
        marginBottom: '20px',
        border: colorCode != selectedCode ? 0 : 0.8,
        borderColor: "primary.main",
        '&:hover': {
          boxShadow: 5,
          cursor: 'pointer',
        },
    }}>
      <Box sx={{
        height: colorCode != selectedCode ? '120px' : '480px',
        width: colorCode != selectedCode ? '120px' : '100%',
        backgroundColor: `#${colorCode}`
      }}/>
      <Box sx={{
        padding: '10px',
        width: '100px'
      }}>#{colorCode.toLowerCase()}</Box>
    </Card>
  )
}

export default ColorSwatch;