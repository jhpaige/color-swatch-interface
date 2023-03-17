import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box } from '@mui/material';

const font =  "'Source Serif Pro', serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#373C3C"
    },
    secondary: {
      main: "#D6D8D8"
    }
  }
})

const App = () => {

  const [ allColors, setAllColors ] = useState([]);

  // Fetches colors from server on page load
  const fetchColors = async () => {
    try {
      let response = await fetch('http://localhost:3001/colors');
      let json = await response.json();
      setAllColors(json.colorsArr);
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }
  if (allColors.length == 0) fetchColors();

  return (
    <ThemeProvider theme={theme}>
      <Box id="app-container" sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
      }}>
        <Navbar />
        <Container disableGutters id="app-page-container" sx={{
          display: 'flex',
          height: '100%'
        }}>
          <Sidebar />
          <MainPage inColors={allColors}/>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App;