import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import ColorSwatch from './ColorSwatch';

const MainPage = ({ allColors }) => {



  useEffect(() => {
    console.log(allColors);
  }, [ allColors ])

  return (
    <Container id="mainpage-container" sx={{ height: '100%' }}>
      {JSON.stringify(allColors)}
      {allColors.map(color => {
        <ColorSwatch key={color.code} colorCode={color.code} />
      })}
    </Container>
  )
}

export default MainPage;