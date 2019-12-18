import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';

class App extends React.Component {

  state = {
    sliding: true,
    top: 20,
    left: 20, 
    quote: false
  }

 componentDidMount(){
   setInterval(() => {
      if(this.state.top > 8 && this.state.left < 70) {
        this.setState({
          
          top: this.state.top - 10,
          left: this.state.left + 15,
          sliding: false
        })
      }
   },2500)
 }

 

  render(){
  
  console.log(this.state)
    return (

      <div className="App">
      <div className="notebook">
       { this.state.sliding ? <Typing>
       
         <div className="speech-bubble"  style={{top: `${this.state.top}em`, left: `${this.state.left}%`}}> 
          <h2>Welcome !</h2>
          <p>My name is Derya!</p>
          
          </div>
        </Typing> : 
         <div className="speech-bubble"  style={{top: `${this.state.top}em`, left: `${this.state.left}%`}}> 
         <h2>Welcome !</h2>
         <p>My name is Derya!</p>
         
         </div>}
        <Typing>
          <div className="text-div">
           {this.state.quote ? <p className="p"> Let's dgfgsdfyfsygfysgfygsyfgehfgysgf Let's dgfgsdfyfsygfysgfygsyfgehfgysgf Let's dgfgsdfyfsygfysgfygsyfgehfgysgf Let's dgfgsdfyfsygfysgfygsyfgehfgysgf vvvvLet's dgfgsdfyfsygfysgfygsyfgehfgysgf  </p> :  null }
          </div>
        </Typing>
        </div>
        </div>
    );
  }
}

export default App;
