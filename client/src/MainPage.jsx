import { Container, Grid, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ColorSwatch from './ColorSwatch';

const MainPage = ({ inColors }) => {

  const [pageSwatches, setPageSwatches] = useState([]);
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

  useEffect(() => {
    if (inColors.length > 0) {
      const pagesArr = [];
      const startIndex = (currPage - 1) * 12
      for (let i = startIndex; i < startIndex + 12; i++) {
        if (i >= inColors.length) break;
        pagesArr.push(inColors[i]);
      }
      console.log(pagesArr);
      setPageSwatches(pagesArr);
    }
  }, [currPage])

  // Creates pages from inputted colors

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
            <Grid key={'GridItem' + color.code} xs={6} sm={4} md={3} spacing={2} item sx={{
              alignItems: 'center',
              width: 'fit-content'
            }}>
              <ColorSwatch key={'ColorSwatch' + color.code} colorCode={color.code} />
            </Grid>
          )
        })}
      </Grid>
      <Container sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {pageNums.map(pageNum => {
          return (<Button key={'PageButton' + pageNum} onClick={() => setCurrPage(pageNum)}
            sx={{
              minWidth: '0px',
              width: 'fit-content',
              textDecoration: currPage == pageNum ? 'underline' : 'none',
              fontWeight: currPage == pageNum ? 'bold' : 'normal'
            }}>
              {pageNum}
            </Button>
          );
        })}
      </Container>
    </Container>
  )
}

export default MainPage;