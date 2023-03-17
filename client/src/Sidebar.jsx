// Import React, Container, and Button components from MUI
import React from 'react';
import { Container, Button, Box } from '@mui/material';

// Define the Sidebar component
const Sidebar = ({ setSelectedCode, allColors, handleDetailClick }) => {

  // Define a function to select a random color from the available colors
  const handleRandomColor = () => {
    const randIndex = Math.floor(Math.random() * allColors.length);
    setSelectedCode(allColors[randIndex].code)
    handleDetailClick(allColors[randIndex].code)
  }

  return (
    // Create a Box container for the Sidebar with MUI styles
    <Box boxShadow='2' sx={{
      borderRight: 0.2,
      borderColor: "primary.main",
      minHeight: 'calc(100vh - 69px)',
    }}>
      {/* Create a Container for the Sidebar content with MUI styles */}
      <Container id="sidebar-container" disableGutters sx={{
        backgroundColor: 'rgb(214, 216, 216)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'fit-content',
        height: '100%'
      }}>
        {/* Add a button to select a random color using the handleRandomColor function */}
        <Button variant="outlined" onClick={handleRandomColor} sx={{
          backgroundColor: 'white',
          margin: '20px',
          marginTop: '40px',
          whiteSpace: 'nowrap',
          paddingLeft: '25px',
          paddingRight: '25px'
        }}>
          Random Color
        </Button>
        {/* Create a sub-Container for the color filters */}
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          width: '100%',
          Button: {
            justifyContent: 'left',
            padding: '0px',
            paddingLeft: '5px',
          }
        }}>
          {/* Add several color filter buttons */}
          <Button>Red</Button>
          <Button>Orange</Button>
          <Button>Yellow</Button>
          <Button>Green</Button>
          <Button>Blue</Button>
          <Button>Purple</Button>
          <Button>Brown</Button>
          <Button>Gray</Button>
        </Container>
      </Container>
    </Box>
    
  )
}

// Export the Sidebar component as the default export of the module
export default Sidebar;
