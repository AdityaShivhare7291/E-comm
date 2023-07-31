import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  backgroundColor: '#000000', // Change the background color
  color: '#ffffff',
  padding: theme.spacing(2), // Add padding
  // borderRadius: theme.spacing(1), // Add border radius
  border: "1px solid #a3128b",
}));

const CustomFormLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#ffffff',
}));

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: 'blue',
}));


const CustomForm = ({ values, handleChange }) => {

  const { gender } = values;

  return (
    <CustomFormControl >
      <CustomFormLabel id="demo-row-radio-buttons-group-label">
        Gender
      </CustomFormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange("gender")}
        value={gender}
      >
        <FormControlLabel
          value="female"
          control={<CustomRadio />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<CustomRadio />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<CustomRadio />}
          label="Other"
        />
      </RadioGroup>
    </CustomFormControl>
  );
};

export default CustomForm;