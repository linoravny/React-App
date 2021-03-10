import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers  from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';

 // CREATE STORE 
 // reducers produce the state of the application.
const storeApp = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //chrome de=v tool: zalmoxisus/redux-devtools-extension
); 

ReactDOM.render(
  <React.StrictMode>
     <Provider store={storeApp}>  
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
