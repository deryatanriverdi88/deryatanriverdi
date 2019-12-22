import React from 'react';
import './App.css';

// import Typing from 'react-typing-animation';
// // import Bio from './Components/Bio'
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';


class App extends React.Component {

  state = {

  }
  

 
  render(){
 
  

    return (

      <div className="app">
          <div class="circle">
          <div class="hair"></div>
          <div class="head">
               <div class="left-eye-brow"></div>
               <div class="right-eye-brow"></div>
               <div class="left-eye"></div>
               <div class="right-eye"></div>
               <div class="nose"></div>
               <div class="mouth"></div>
          </div> 
          <div class="neck"></div>
          <div class="t-shirt"></div>
          <div class="message"></div>
          </div>
      </div>
    );
  }
}

export default App;
