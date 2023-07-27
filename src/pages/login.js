import React from 'react'
import Fields from '../components/fields';
import Buttony from '../components/buttons';
import Radiy from '../components/radia';
import './login.css'
import { Stack } from '@mui/material';
export default function login() {
  return (
    <div className='main-container'>
      <div className='container'>
        <Stack direction={'column'} spacing={3}>
          <Fields />
          <div className='centers'>
            <Radiy />
          </div>
          <div className='center'>
            <Buttony />
          </div>
        </Stack>
      </div>
    </div>
  )
}
