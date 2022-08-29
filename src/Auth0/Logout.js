import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import "../App.css"
const Logout = () => {
  const { logout } = useAuth0();
  return (
    <Button
      id="button"
      onClick={() =>
        logout()
      }
    >
      Log Out
    </Button>
  );
};

export default Logout;