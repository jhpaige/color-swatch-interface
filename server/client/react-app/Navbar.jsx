// Import React and TextField component from MUI
import React from "react";
import TextField from '@mui/material/TextField';

// Import the Navbar styling
import './Navbar.css';

// Import the Box component from MUI
import { Box } from "@mui/material";

// Define the Navbar component
const Navbar = () => {
  return (
    // Create a Box container for the Navbar
    <Box id="navbar-container" sx={{
      backgroundColor: 'rgb(54, 59, 59)',
      width: 'calc(100% - 10px)',
      height: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: '10px'
    }}>
      {/* Add the Helpful Human logo to the Navbar */}
      <img src="https://assets.website-files.com/6036a858eff6dd0e0891eac0/605b81c28fb6ff9fe4461f25_HH_Logo_Icon_White.svg" loading="lazy" data-w-id="8f972a32-c567-8b86-8967-2f40893a39e6" alt="Helpful Human Logo" className="hh-logo"/>
      {/* Add the search bar to the Navbar using MUI TextField component */}
      <TextField
        label=""
        placeholder="Search"
        id="outlined-size-small"
        size="small"
        sx={{
          m: 1.5
        }}
      />
    </Box>
  )
}

// Export the Navbar component
export default Navbar;
