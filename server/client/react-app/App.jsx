// Import React and useState hook from React library
import React, { useState } from 'react';

// Import Navbar, Sidebar and MainPage components
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainPage from './MainPage';

// Import styles from App.css
import './App.css';

// Import MUI theme and Box components
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// Set custom font
const font =  "'Source Serif Pro', serif";

// Create MUI theme
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

// Define App component
const App = () => {

  // Declare state variables and their setter functions
  const [ allColors, setAllColors ] = useState([]);
  const [ selectedCode, setSelectedCode ] = useState(null);
  const [ pageSwatches, setPageSwatches ] = useState([]);

  // Fetches colors from server on page load
  const fetchColors = async () => {
    try {
      let response = await fetch('./api');
      let json = await response.json();
      setAllColors(json.colorsArr);
      return { success: true, data: json };
      return;
    } catch (error) {
      console.log('Server fetch unsuccessful: ', error);
      return { success: false };
    }
  }

  // Call fetchColors function if allColors array is empty
  if (allColors.length == 0) fetchColors();

  // Handle click on color swatch in Sidebar
  const handleDetailClick = (newSelectedCode) => {
    setSelectedCode(newSelectedCode);
    const pagesArr = [];
    for (let i = 0; i < allColors.length; i++) {
      if (allColors[i].code == newSelectedCode) {
        for (let j = i; j <= i + 4; j++) {
          pagesArr.push(allColors[j]);
          if (j == allColors.length - 1) break;
        };
        break;
      };
    };
    setPageSwatches(pagesArr);
  }

  // Render the UI
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
        {/* Render Navbar component */}
        <Navbar />
        <Box id="app-page-box" sx={{
          display: 'flex',
          height: '100%',
          minWidth: '100vw'
        }}>
          {/* Render Sidebar component */}
          <Sidebar setSelectedCode={setSelectedCode} allColors={allColors} handleDetailClick={handleDetailClick}/>
          {/* Render MainPage component */}
          <MainPage inColors={allColors} selectedCode={selectedCode} setSelectedCode={setSelectedCode} handleDetailClick={handleDetailClick} pageSwatches={pageSwatches} setPageSwatches={setPageSwatches}/>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

// Export App component
export default App;