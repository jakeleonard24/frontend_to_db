import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state ={

    }

    
  }

  getNames(){
    axios.get('http://localhost:3336/api/add').then(res => {
      console.log(res.data)
    })
  }
  render() {
    return (
      <div className="App">
        Front to back example
        <button onClick={this.getNames}>Get data</button>
      </div>
    );
  }
}

export default App;
