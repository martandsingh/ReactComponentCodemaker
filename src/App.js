import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomHeader from './CustomComponents/CustomHeader'
import CustomBody from './CustomComponents/CustomBody'
import ImageComponent from './CustomComponents/ImageComponent'
import CustomModal from './CustomComponents/CustomModal'
import CustomModalClass from './CustomComponents/CustomModalClass'

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <CustomHeader/>
          <CustomBody/>
        <ImageComponent/> */}
        <CustomModal buttonText = "Click Me!!" headerText = "CodeMakerz" 
        headingText = "This is test heading" bodyText = "This is test body."/>

         <CustomModal buttonText = "Click You!!" headerText = "CodeMakerz" 
        headingText = "This is test heading...2" bodyText = "This is test body....2"/>

      <CustomModalClass
      buttonText = "Click Class Comp!!" headerText = "CodeMakerz" 
      headingText = "This is test heading...by class" bodyText = "This is test body....by class"/>

      </div>
    );
  }
}

export default App;
