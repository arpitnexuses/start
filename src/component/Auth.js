

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { useAuth0 } from '@auth0/auth0-react';
import AppBar from 'material-ui/AppBar'
import Button from '@mui/material/Button';


import "../App.css"
function Auth() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
  return (
    <>
    <MuiThemeProvider>    
      <AppBar title="Login To Continue " className='App'>
        

        <Button
        id="button"
      
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
    <Button
     id="button"

      onClick={() =>
        logout()
      }
    >
      Log Out
    </Button>

        
      </AppBar>
      
     </MuiThemeProvider>

     </>
  );
}

export default Auth;
