
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneIcon from '@mui/icons-material/Phone';
import { Stack,TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
      '& fieldset': {
        borderImage: `linear-gradient(273deg, rgba(242,27,207,0.918844100140056) 9%, rgba(223,71,115,1) 39%, rgba(85,72,225,1) 100%) 1`, // Default border color
        transition: theme.transitions.create(['border-color'], {
          duration: theme.transitions.duration.shortest,
          
        }),
        padding: '2px',
      },
      
    },
    '& .MuiInputAdornment-root svg': {
      color: '#000080', 
    },
    '& label': {
        color: 'white', 
      },
      '& label.Mui-focused': {
        color: 'white', 
      },
      '& .MuiInputBase-input': {
        color: 'white', 
      },
  }));



  const LoginFields = () => {

  return (
    <Stack spacing={5}>
        <Stack direction={"column"} spacing={3}>
        <CustomTextField
        label="Email"
        variant="outlined"
        sx={{width:300}} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          ),
        }}
      />
        <CustomTextField
        label="Password"
        variant="outlined"
        sx={{width:300}} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
      />
         </Stack>
    </Stack>
  )
}


export default LoginFields;