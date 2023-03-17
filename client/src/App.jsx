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
  const [ selectedCode, setSelectedCode ] = useState(null);
  const [ pageSwatches, setPageSwatches ] = useState([]);

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

  const handleDetailClick = (newSelectedCode) => {
    setSelectedCode(newSelectedCode);
    const pagesArr = [];
    for (let i = 0; i < allColors.length; i++) {
      if (allColors[i].code == newSelectedCode) {
        for (let j = i; j <= i + 4; j++) {
          console.log(j);
          pagesArr.push(allColors[j]);
          if (j == allColors.length - 1) break;
        };
        break;
      };
    };
    setPageSwatches(pagesArr);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box id="app-box" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        minHeight: '100vh',
        margin: 'auto'
      }}>
        <Navbar />
        <Box id="app-page-box" sx={{
          display: 'flex',
          height: '100%',
          minWidth: '100vw'
        }}>
          <Sidebar setSelectedCode={setSelectedCode} allColors={allColors} handleDetailClick={handleDetailClick}/>
          <MainPage inColors={allColors} selectedCode={selectedCode} setSelectedCode={setSelectedCode} handleDetailClick={handleDetailClick} pageSwatches={pageSwatches} setPageSwatches={setPageSwatches}/>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App;