import React, { useState } from 'react'
import Fields from '../components/fields';
import Buttony from '../components/buttons';
import Radiy from '../components/radia';
import { Stack, Typography } from '@mui/material';
import './signup.css';
import axios from 'axios';


export default function Signup() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
  })

  const { name, email, password, phoneNumber, gender } = values;


  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values });
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name, email, password, phoneNumber
      });
      console.log("resp: ", response.data);
    } catch (error) {
      console.log("error: ", error.response);
    }
  }


  return (
    <div className='main-container'>
      <div className='container'>
        <Typography variant="h4" component="h1" mb={4} color="#ffffff" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Sign up
        </Typography>
        <Stack direction={'column'} spacing={3}>
          <Fields values={values} setValues={setValues} handleChange={handleChange} />
          <div className='centers'>
            <Radiy values={values} setValues={setValues} handleChange={handleChange} />
          </div>
          <div onClick={onSubmit} className='center'>
            <Buttony btnText="Sign up" />
          </div>
        </Stack>
      </div>
    </div>
  )
}
