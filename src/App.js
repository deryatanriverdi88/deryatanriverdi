import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';

class App extends React.Component {

  state = {
    sliding: false,
    top: 30,
    left: 63
  }

 componentDidMount(){
   setInterval(() => {
      if(this.state.top > 15 && this.state.left < 70) {
        this.setState({
          sliding: true, 
          top: this.state.top - 5,
          left: this.state.left + 2
        })
      }
   }, 2500)
 }

  render(){
  
  console.log(this.state)
    return (

      <div className="App">
       <div className="notebook">
        <Typing>
         <div className="speech-bubble"  style={{top: `${this.state.top}em`, left: `${this.state.left}%`}}> 
          <h2>Hello there!</h2>
          <p>My name is Derya!</p>
        
          </div>
          
        </Typing>
        </div>
      </div>
    );
  }
}

export default App;
