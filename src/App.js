import React, { Component } from 'react';
import Navbar from './Navbar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <link href='https://fonts.googleapis.com/css?family=Josefin+Slab|Lato:400,100,300' rel='stylesheet' type='text/css'/>
        <link href='http://fonts.googleapis.com/css?family=Grand+Hotel' rel='stylesheet' type='text/css'/>
        <link href='https://fonts.googleapis.com/css?family=Raleway:800, 400,100,200' rel='stylesheet' type='text/css'/>
        <Navbar />
      </div>
    );
  }
}

export default App;
