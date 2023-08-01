import { useEffect, useRef, useState } from "react";
import "./appfire.css";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "./firebase";

import Button from '../buttons'
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneIcon from '@mui/icons-material/Phone';
import { Stack, TextField } from "@mui/material";
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
    color: '#000080', // Customize the icon color
  },
  '& label': {
    color: 'white', // Customize the label color
  },
  '& label.Mui-focused': {
    color: 'white', // Customize the label color when focused (can be the same as default)
  },
  '& .MuiInputBase-input': {
    color: 'white', // Set the color of the input text to white
  },
}));





function App() {
  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const [phoneNumber, setPhoneNumber] = useState();
  const digitCount = 6;
  const [otp, setOtp] = useState(new Array(digitCount).fill(''));
  const inputRef = useRef([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    const hello = "+91 " + phoneNumber.toString();
    alert("it reached");
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, hello, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("OTP sent successfully");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        window.recaptchaVerifier.render().then(function (widgetId) {
          /* global grecaptcha*/
          grecaptcha.reset(widgetId);
        });
      });
  };


  const handleChangeOtp = (idx, value) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[idx] = value;
      return newOtp;
    })

    if (value !== '' && inputRef.current[idx + 1]) {
      inputRef.current[idx + 1].focus();
    }
  }


  const handleRemoveOtp = (e, idx) => {
    if (e.key === 'Backspace' && idx > 0 && otp[idx] === '') {
      inputRef.current[idx - 1].focus();
    }
  };


  const handleOtpSubmit = (e) => {
    e.preventDefault();
    /*global confirmationResult*/
    let otpstri = otp.toString();
    confirmationResult
      .confirm(otpstri)
      .then((result) => {
        const user = result.user;
        alert("OTP verified");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
      size: "invisible",
      callback: (response) => {
        console.log(response);
        handleSubmit();
      },
    });
  }, []);
  return (
    <div className="otp-main-container">
      <div className="otp-sub-container">
        <Stack spacing={5}>
          <form >
            <Stack spacing={2}>
              <CustomTextField
                label="Phone-Number"
                variant="outlined"
                type="Number"
                sx={{ width: 300 }}
                onChange={(e) => { setPhoneNumber(e.target.value) }}
                value={phoneNumber}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                      <span id="pho">+91</span>
                    </InputAdornment>
                  ),
                }}
              />
              <span id="recaptcha"></span>
              <div onClick={handleSubmit} >
                <Button btnText="Send Otp" type="submit" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Send Otp
                </Button>
              </div>
            </Stack>
          </form>

          <form >
            <Stack spacing={2}>
              {/* <CustomTextField
          label="Otp"
          variant="outlined"
          type="Number"
          sx={{ width: 300 }}
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          value={otp}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
        /> */}

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                {otp.map((value, idx) => (
                  <TextField
                    key={idx}
                    inputRef={(ref) => (inputRef.current[idx] = ref)}
                    type="text"
                    value={value}
                    autoFocus={idx === 0}
                    onChange={(e) => handleChangeOtp(idx, e.target.value)}
                    onKeyDown={(e) => handleRemoveOtp(e, idx)}
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: 'center', fontSize: 10, maxWidth: '25px', border: '3px solid #890f89', borderRadius: "5px", color: '#ffffff' },
                    }}
                  />
                ))}
              </div>



              <div onClick={handleOtpSubmit}>
                <Button btnText="Verify" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                </Button>
              </div>
            </Stack>
          </form>
        </Stack>
      </div>
    </div>

  );
}

export default App;
