import React from 'react';
import LoginFields from './../components/LoginFields';
import LoginBtn from '../components/buttons';
import './login.css'
import { Stack, Typography } from '@mui/material';


const Login = () => {

    return (
        <>
            <div className='main-container'>
                <div className='container'>
                    <Stack direction={'column'} spacing={3}>
                        <Typography variant="h4" component="h1" mb={4} color="#ffffff" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Login
                        </Typography>
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