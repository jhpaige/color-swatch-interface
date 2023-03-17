// Import React and createRoot function from ReactDOM client
import React from "react";
import { createRoot } from "react-dom/client";

// Import the App component
import App from "./App";

// Get the root container element from the HTML document
const container = document.getElementById("root");

// Create a root with the container element
const root = createRoot(container);

// Render the App component within the root
root.render(<App />);
