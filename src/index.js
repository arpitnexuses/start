import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Auth0Provider 
  domain="dev-z4sph54p.us.auth0.com"
  clientId="aqlCK56BKjhjbgcx0YkI9Xk16LDWrBUi"
  redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
