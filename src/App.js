import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Signup from './pages/Signup';
import Login from './pages/login';
import Otpverify from './components/firebase/app'
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import PrivateComponent from './components/privatecomponent';
import Navbar from './components/navbar';
import Home from './pages/home'
const theme = createTheme({
  // Your custom theme configurations
});

function App() {
  return (
    <div>
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route element={<PrivateComponent/>}>
   <Route path='/' Component={Home} ></Route>
   </Route>
   <Route path='/sign' Component={Signup}></Route>
   <Route path='/login' Component={Login}></Route>
   <Route path='/otpverify' Component={Otpverify}></Route>
   </Routes>
   
   </BrowserRouter>
   </div>
  );
}

export default App;
