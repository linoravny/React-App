import React from 'react'
import './App.css';
import Header from './Hearder'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import List from './userStore/List';
import LoginForm from './login/LoginForm'

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


function App() {

    return (
      <div className="App">
         <Router>
          <Header userName={userName} /> 

          <Switch>
            <Route exact path="/store">
              <List guitarList={guitarList}/>
            </Route>
            <Route path="/loginForm">
              <LoginForm /> 
            </Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App;
