import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';
import Bio from './Components/Bio'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';


class App extends React.Component {

  state = {
    bio: false
  }
  

  handleBioClick = () => {
    this.setState({
      bio: !this.state.bio
    })
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
            <div className="post-it-1" onClick={this.handleBioClick}>
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
        { this.state.bio ?  
        <AwesomeSlider style={{width: '50%', padding: "10% 20%"}} > 
         
          <div className="slider"><Bio bio={this.handleBioClick}/></div>
          <div className="slider"> 2</div>
          <div className="slider">3</div>
          <div className="slider">4</div>
      </AwesomeSlider> : null }
        </div>
    );
  }
}

export default App;
