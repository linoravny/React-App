import React, {Component} from 'react'
import './App.css';
import Header from './Hearder'
import List from './List';
import Form from './Form'

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

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header userName={userName} /> 
          <List guitarList={guitarList}/>
          <Form />
      </div>
    )
  }
}

export default App;
