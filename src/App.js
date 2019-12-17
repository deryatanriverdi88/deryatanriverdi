import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';

class App extends React.Component {

  render(){
   
    return (
      <div className="App">
        <Typing>
          <div className="speech-bubble">
          <h2>Hello there!</h2>
          <p>My name is Derya!</p>
          </div>
          
        </Typing>
      </div>
    );
  }
}

export default App;
