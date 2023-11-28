import ReactDom from "react-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css"
import App from "./App";
import React from 'react'


ReactDom.render(<Auth0Provider
    domain="dev-2dtywhdq546ih1uw.us.auth0.com"
    clientId="rh5EripnsfoR8Zk6VyuvD7w4H7nzB5To"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><App/></Auth0Provider>, document.getElementById('root'));