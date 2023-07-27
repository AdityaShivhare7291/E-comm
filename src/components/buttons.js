import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ myColor }) => ({
  background: ` ${myColor}`,
  borderRadius: 8,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  // boxShadow: `0 3px 5px 2px rgba(255, 105, 135, .3)`,
  // '&:hover': {
  //   boxShadow: `0 6px 10px 5px rgba(255, 105, 135, .3)`,
  // },
}));

function MyComponent() {
  return (
    <div>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        {/* <CustomButton myColor="blue" variant="contained"> */}
        <CustomButton myColor="linear-gradient(to right, #000080, #a3128b)" variant="contained">
          Sign up
        </CustomButton>
        
      </Box>
    </div>
  );
}

export default MyComponent;
