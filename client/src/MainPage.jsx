import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ColorSwatch from './ColorSwatch';

const MainPage = ({ allColors }) => {

  const [pageSwatches, setPageSwatches] = useState([]);

  // Sets initial value for page swatches
  if (pageSwatches.length == 0 && allColors.length > 0) {
    setPageSwatches(allColors);
  }

  return (
    <Container id="mainpage-container" sx={{ height: '100%' }}>
      {JSON.stringify(allColors)}
      {pageSwatches.map(color => {
        return (<ColorSwatch key={color.code} colorCode={color.code} />)
      })}
    </Container>
  )
}

export default MainPage;