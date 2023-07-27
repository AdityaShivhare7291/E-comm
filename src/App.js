import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MyComponent from './pages/login'; // Replace this with your main component

const theme = createTheme({
  // Your custom theme configurations
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyComponent />
    </ThemeProvider>
  );
}

export default App;
