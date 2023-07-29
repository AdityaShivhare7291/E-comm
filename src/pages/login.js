import React from 'react';
import LoginFields from '../components/LoginFields';
import LoginBtn from '../components/buttons';
import Radiy from '../components/radia';
import './login.css'
import { Stack } from '@mui/material';


const Login = () => {

  return (
    <>
      <div className='main-container'>
        <div className='container'>
          <Stack direction={'column'} spacing={3}>
            <LoginFields />
            <div className='center'>
              <LoginBtn btnText="Login" />
            </div>
          </Stack>
        </div>
      </div>
    </>
  )
}


export default Login;