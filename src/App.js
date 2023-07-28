import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import MyComponent from './pages/login'; // Replace this with your main component

import Signup from './pages/Signup'; 
import Login from './pages/Login'; 


const theme = createTheme({
  // Your custom theme configurations
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MyComponent /> */}
      {/* <Signup /> */}
      <Login />
    </ThemeProvider>
  );
}

export default App;
