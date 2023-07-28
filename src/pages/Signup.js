import React from 'react'
import Fields from '../components/fields';
import Buttony from '../components/buttons';
import Radiy from '../components/radia';
import { Stack, Typography } from '@mui/material';
import './signup.css'


export default function Signup() {
  return (
    <div className='main-container'>
      <div className='container'>
        <Typography variant="h4" component="h1" mb={4} color="#ffffff" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Sign up
        </Typography>
        <Stack direction={'column'} spacing={3}>
          <Fields />
          <div className='centers'>
            <Radiy />
          </div>
          <div className='center'>
            <Buttony btnText="Sign up" />
          </div>
        </Stack>
      </div>
    </div>
  )
}
