import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Otpverify from './components/firebase/app'

const theme = createTheme({
  // Your custom theme configurations
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Otpverify />
      {/* <Login /> */}
    </ThemeProvider>
  );
}

export default App;
