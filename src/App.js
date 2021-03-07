import React from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {
  Box
} from 'rebass'

import './App.css';
import Header from './Hearder';
import Home from './Home/Home'
import List from './userStore/List';
import LoginForm from './login/LoginForm';
import ListItem from './userStore/ListItem';

import { ThemeProvider, Global, css  } from '@emotion/react';
import theme from './theme.js';
import normalize from "normalize.css";
import { useSelector } from 'react-redux';


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
        
        <BrowserRouter >
          <Header userName={userName} /> 
          <Switch>
            <Route exact path="/store"  component={List}></Route>
            <Route exact path="/storeItem/:id" component={ListItem}></Route>
            <Route exact path="/loginForm" component={LoginForm}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>

        </BrowserRouter >
      </Box>
    </ThemeProvider>
  )
}

export default App;
