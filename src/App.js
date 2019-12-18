import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';

class App extends React.Component {

  state = {
    sliding: false,
    top: 30,
    left: 60
  }

 componentDidMount(){
   setInterval(() => {
      if(this.state.top > 10 && this.state.left < 70) {
        this.setState({
          sliding: true, 
          top: this.state.top - 8,
          left: this.state.left + 5
        })
      }
   }, 2400)
 }

  render(){
  
  console.log(this.state)
    return (

      <div className="App">
      
        <Typing>
       
         <div className="speech-bubble"  style={{top: `${this.state.top}em`, left: `${this.state.left}%`}}> 
          <h2>Hello there!</h2>
          <p>My name is Derya!</p>
        
          
          </div>
        </Typing>
        </div>
    );
  }
}

export default App;
