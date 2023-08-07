import React, { useState } from 'react';
import LoginFields from './../components/LoginFields';
import LoginBtn from '../components/buttons';
import './login.css';
import { Stack, Typography } from '@mui/material';
import axios from 'axios';

const Login = () => {

    const [values,setValues]=useState({
        email:"",
        password:"",
    });
    
    const Roadies=async(e)=>{
        e.preventDefault();
       const {email,password}=values;
       console.log(email,"hellos",password);
        try {
          const response = await axios.post("http://localhost:5000/login", {
          email,password
          });
          /*setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            age: "",
            gender: "",
          });*/
          console.log("resp: ", response.data);
      
        } catch (error) {
          console.log("error: ", error.response);
        }
      }
    const handleChange=(name)=>(e)=>{
            setValues({...values , [name] : e.target.value});
    }
    return (
        <>
            <div className='login-container'>
                <div className='sub-container'>
                    <Stack direction={'column'} spacing={3}>
                        <Typography variant="h4" component="h1" mb={4} color="#ffffff"
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Login
                        </Typography>
                        <LoginFields value={values} handleChange={handleChange} />
                        <div onClick={Roadies} className='loginBtn'>
                            <LoginBtn btnText="Login" />
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    )
}


export default Login;