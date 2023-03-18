// Import MUI components and React
import { Container, Grid, Button, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

// Import ColorSwatch component
import ColorSwatch from './ColorSwatch';

// Define MainPage component
const MainPage = ({ inColors, selectedCode, setSelectedCode, pageSwatches, setPageSwatches, handleDetailClick }) => {

  // Declare state variables and their setter functions
  const [pageNums, setPageNums] = useState([]);
  const [currPage, setCurrPage] = useState(null);

  // Set initial values for pagination number buttons
  if (currPage == null && inColors.length > 0) {
    setCurrPage(1);
    const pagesArr = [];
    for (let i = 1; i <= Math.ceil(inColors.length / 12); i++) {
      pagesArr.push(i);
    }
    setPageNums(pagesArr);
  }

  // Define function to reset page swatches
  const resetPage = () => {
    const pagesArr = [];
    const startIndex = (currPage - 1) * 12
    for (let i = startIndex; i < startIndex + 12; i++) {
      if (i >= inColors.length) break;
      pagesArr.push(inColors[i]);
    }
    setPageSwatches(pagesArr);
  }

  // Use effect hook to reset page swatches on currPage change
  useEffect(() => {
    if (inColors.length > 0 && selectedCode == null) {
      resetPage();
    }
  }, [currPage]);
  
  // Handle click on "Clear" button
  const handleClearClick = () => {
    setSelectedCode(null);
    resetPage();
  }

  // Render the UI
  return (
    <Box
    id="mainpage-box"
    sx={{
      minHeight: 'calc(100vh - 69px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%'
    }}>
      {/* Render the color swatches */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        position='relative'
        padding='20px'
        paddingBottom={0}
        paddingTop={0}
        marginTop='20px'
        height='calc(100% - (24px + 70px) - 20px)'
      >
        {pageSwatches.map(color => {
          return (
            <Grid key={'GridItem' + color.code}
              xs={color.code == selectedCode ? 12 : 6}
              sm={color.code == selectedCode ? 12 : 4}
              md={color.code == selectedCode ? 12 : 3} item sx={{
                alignItems: 'center',
                maxHeight: '100%',
                minHeight: 'fit-content',
                width: color.code != selectedCode ? 'fit-content' : '100%',
                position: 'relative'
              }}
            >
              <ColorSwatch key={'ColorSwatch' + color.code} colorCode={color.code} selectedCode={selectedCode} handleDetailClick={handleDetailClick} />
            </Grid>
          )
        })}
      </Grid>

      {/* Render the pagination buttons */}
      <Container sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {selectedCode == null ?
        pageNums.map(pageNum => {
          return (<Button key={'PageButton' + pageNum} onClick={() => setCurrPage(pageNum)}
            sx={{
              minWidth: '0px',
              width: 'fit-content',
              textDecoration: currPage == pageNum ? 'underline' : 'none',
              fontWeight: currPage == pageNum ? 'bold' : 'normal',
              marginBottom: '20px'
            }}>
              {pageNum}
            </Button>
          );
        }) :
        <Button variant="outlined" onClick={handleClearClick} sx={{
          backgroundColor: 'white',
          margin: '20px',
          whiteSpace: 'nowrap',
          paddingLeft: '25px',
          paddingRight: '25px',
          marginBottom: '50px',
          position: 'relative'
        }}>
          Clear
        </Button>}
      </Container>
    </Box>    
  )
}

// Export MainPage Component
export default MainPage;