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
         
          <div className="circle">
          <div className="wall">
          <div className="window"></div></div> 
          <div className="chair"></div>
          <div className="hair"></div>
          <div className="head">
               <div className="left-eye-brow"></div>
               <div className="right-eye-brow"></div>
               <div className="left-eyelash">
                 <ul>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                 </ul>
               </div>
               <div className="right-eyelash">
                 <ul>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                 </ul>
               </div>
               <div className="left-eye">
               <div className="cornea"></div>
               </div>
               <div className="right-eye">
                 <div className="cornea"></div>
               </div>
               <div className="nose"></div>
               <div className="mouth"></div>
          </div> 
          
          <div className="neck"></div>
          <div className="t-shirt"></div>
         
          <div className="message"></div>
          <div className="computer">
            <div className="apple-logo"></div>
          </div>
          
          <div className="table"> </div>
          <div className="table-front"></div>
          <div className="table-side"></div>
          <div className="coffee-steam"></div>
          <div className="coffee-cup"></div>
          <div className="coffee-bottom"></div>
          <div className="keyboard"></div>
          
          <div className="floor">
          </div>
          </div>
      </div>
    );
  }
}

export default App;
