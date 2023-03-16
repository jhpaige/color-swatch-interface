import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import './App.css';

const App = () => {

  const [ allColors, setAllColors ] = useState([]);
  const [ selectedColors, setSelectedColors ] = useState([]);

  const fetchColors = async () => {
    try {
      let response = await fetch('http://localhost:3001/colors');
      let json = await response.json();
      setAllColors(json);
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }

  fetchColors(setAllColors);

  return (
    <div className="wrapper">
      {JSON.stringify(allColors)}
      <Navbar />
      <div>
        <Sidebar />
        <MainPage />
      </div>
    </div>
  )
}

export default App;