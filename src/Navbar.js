import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <a id ="title" href="#">SHOP SPERO</a>
        </div>
        <div id="options">
          <ul id="header-options">
            <li><a href="#">HOPE</a></li>
            <li><a href="#">NEW ARRIVALS</a></li>
            <li><a href="#">ORIGINALS</a></li>
            <li><a href="#">VINTAGE</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
