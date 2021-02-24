import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Box,
  Heading,
  Button
} from 'rebass'

import './App.css';
import Header from './Hearder'
import List from './userStore/List';
import LoginForm from './login/LoginForm';


import { ThemeProvider, Global, css  } from '@emotion/react';
import theme from './theme.js';
import normalize from "normalize.css";

const userName = "Linor";


const guitarList = [
  {
    _id: "1",
    title: 'Rogue Starter Acoustic Guitar',
    price: '248.00',
  },
  {
    _id: "2",
    title: 'G&L Limited Edition Tribute ASAT Classic Bluesboy Electric Guitar',
    price: '1594.30',
  },
  {
    _id: "3",
    title: 'Rogue RG-624 Left-Handed Dreadnought Acoustic Guitar',
    price: '354.30',
  }
];

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
