import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';

class App extends React.Component {

  state = {
    
  }

 

  render(){
  
  console.log(this.state)
    return (

      <div className="App">
      <div className="notebook">
        <Typing>
       
         <div className="speech-bubble" > 
          <h2>Welcome !</h2>
          <p>My name is Derya!</p>
          
          </div>
        </Typing> 
      

          <div className="text-div">
            <div className="post-it-1">
              <h3>Who am I ? </h3>
            </div>
            <div className="post-it-2">
            <h3> My Projects </h3>
            </div>
            <div className="post-it-1">
            <h3> Skills </h3>
            </div>
            <div className="post-it-2">
            <h3> Contact! </h3>
            </div>
          </div>
       
        </div>
        </div>
    );
  }
}

export default App;
