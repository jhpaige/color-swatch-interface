import React from 'react';
import { Container, Button, Box } from '@mui/material';
import './Sidebar.css'

const Sidebar = ({ setSelectedCode, allColors, handleDetailClick }) => {

  const handleRandomColor = () => {
    const randIndex = Math.floor(Math.random() * allColors.length);
    setSelectedCode(allColors[randIndex].code)
    handleDetailClick(allColors[randIndex].code)
  }

  return (
    <Box boxShadow='2' sx={{borderRight: 0.2, borderColor: "primary.main"}}>
      <Container id="sidebar-container" disableGutters sx={{
        backgroundColor: 'rgb(214, 216, 216)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'fit-content',
        height: '100%'
      }}>
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

export default Sidebar;