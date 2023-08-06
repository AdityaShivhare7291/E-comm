import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link,Navigate,useNavigate } from 'react-router-dom';

const CustomButton = styled(Button)(({ mycolor }) => ({
  background: ` ${mycolor}`,
  borderRadius: 8,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
}));

function MyComponent({ btnText,to}) {
  const navigate = useNavigate();
  const onButtonClick=()=>{
    navigate(to);  
  }
  return (
    <div onClick={onButtonClick}>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <CustomButton mycolor="linear-gradient(to right, #000080, #a3128b)" variant="contained">
          {btnText}
        </CustomButton>

      </Box>
    </div>
  );
}

export default MyComponent;
