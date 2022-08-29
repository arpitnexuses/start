import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import { AppBar } from 'material-ui';
import "../App.css"
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
  
    <Button
      id="button"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default Login;