import { Container, Grid, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ColorSwatch from './ColorSwatch';

const MainPage = ({ inColors, selectedCode, setSelectedCode, pageSwatches, setPageSwatches, handleDetailClick }) => {

  const [pageNums, setPageNums] = useState([]);
  const [currPage, setCurrPage] = useState(null);

  // Sets initial value for page swatches
  if (currPage == null && inColors.length > 0) {
    setCurrPage(1);
    const pagesArr = [];
    for (let i = 1; i <= Math.ceil(inColors.length / 12); i++) {
      pagesArr.push(i);
    }
    setPageNums(pagesArr);
  }

  const resetPage = () => {
    const pagesArr = [];
    const startIndex = (currPage - 1) * 12
    for (let i = startIndex; i < startIndex + 12; i++) {
      if (i >= inColors.length) break;
      pagesArr.push(inColors[i]);
    }
    console.log(pagesArr);
    setPageSwatches(pagesArr);
  }

  useEffect(() => {
    if (inColors.length > 0 && selectedCode == null) {
      resetPage();
    }
  }, [currPage]);
  
  const handleClearClick = () => {
    setSelectedCode(null);
    resetPage();
  }

  return (
    <Container
    id="mainpage-container"
    sx={{
      height: '100%',
      paddingTop: '24px',
      paddingBottom: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {pageSwatches.map(color => {
          return (
            <Grid key={'GridItem' + color.code}
              xs={color.code == selectedCode ? 12 : 6}
              sm={color.code == selectedCode ? 12 : 4}
              md={color.code == selectedCode ? 12 : 3} item sx={{
                alignItems: 'center',
                width: color.code != selectedCode ? 'fit-content' : '100%',
                height: color.code != selectedCode ? 'fit-content' : '60%'
              }}
            >
              <ColorSwatch key={'ColorSwatch' + color.code} colorCode={color.code} selectedCode={selectedCode} handleDetailClick={handleDetailClick} />
            </Grid>
          )
        })}
      </Grid>
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
            }}>
              {pageNum}
            </Button>
          );
        }) :
        <Button variant="outlined" onClick={handleClearClick} sx={{
          backgroundColor: 'white',
          margin: '20px',
          marginTop: '40px',
          whiteSpace: 'nowrap',
          paddingLeft: '25px',
          paddingRight: '25px'
        }}>
          Clear
        </Button>}
      </Container>
    </Container>
  )
}

export default MainPage;