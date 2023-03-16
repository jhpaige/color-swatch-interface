import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import ColorSwatch from './ColorSwatch';

const MainPage = ({ allColors }) => {

  const [pageSwatches, setPageSwatches] = useState([]);

  // Sets initial value for page swatches
  if (pageSwatches.length == 0 && allColors.length > 0) {
    setPageSwatches(allColors);
  }

  return (
    <Container
    id="mainpage-container"
    sx={{
      height: '100%',
      paddingTop: '24px',
      paddingBottom: '24px'
    }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {pageSwatches.map(color => {
          return (
            <Grid item>
              <ColorSwatch key={color.code} colorCode={color.code} />
            </Grid>
          )
        })}
      </Grid>
      {JSON.stringify(allColors)}
    </Container>
  )
}

export default MainPage;