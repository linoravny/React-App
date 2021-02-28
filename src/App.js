import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Box
} from 'rebass'

import './App.css';
import Header from './Hearder'
import List from './userStore/List';
import LoginForm from './login/LoginForm';


import { ThemeProvider, Global, css  } from '@emotion/react';
import theme from './theme.js';
import normalize from "normalize.css";

const userName = "Linor";

const App = props => {
  return (
    <ThemeProvider theme={theme}>
       <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      <Box>
        <Router>
          <Header userName={userName} /> 
          <Switch>
            <Route exact path="/store">
              <List />
            </Route>
            <Route path="/loginForm">
              <LoginForm /> 
            </Route>
          </Switch>

        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default App;
