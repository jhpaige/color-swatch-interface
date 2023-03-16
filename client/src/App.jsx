import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div>
        <Sidebar />
        <MainPage />
      </div>
    </div>
  )
}

export default App;