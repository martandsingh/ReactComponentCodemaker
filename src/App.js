import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomHeader from './CustomComponents/CustomHeader'
import CustomBody from './CustomComponents/CustomBody'
import ImageComponent from './CustomComponents/ImageComponent'


class App extends Component {
  render() {
    return (
      <div className="App">
          <CustomHeader/>
          <CustomBody/>
        <ImageComponent/>
      </div>
    );
  }
}

export default App;
