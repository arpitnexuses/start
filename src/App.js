
import './App.css';
import Userform from './component/Userform.js';
import { useAuth0 } from "@auth0/auth0-react";
import Auth from "./component/Auth.js"


function App() {
  const {isAuthenticated} = useAuth0();
  
  return (
    <>
    
      <div className="App">
    { isAuthenticated?  
      <Userform/>: <Auth/>
  
    }
     </div>
     </>
  );
}

export default App;
