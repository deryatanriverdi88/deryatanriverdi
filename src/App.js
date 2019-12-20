import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';
// import Bio from './Components/Bio'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';


class App extends React.Component {

  state = {
    bio: false, 
    project: false, 
    skill: false, 
    contact: false
  }
  

  handleBioClick = () => {
    this.setState({
      bio: !this.state.bio
    })
  }

  handleProjectClick = () =>{
    this.setState({
      project: !this.state.project
    })
  }

  handleSkillClick = () => {
    this.setState({
      skill: !this.state.skill
    })
  }

  handleContactClick = () => {
    this.setState({
      contact: !this.state.contact
    })
  }

  renderNotebook = () => {
    return <div className="notebook">
            <Typing>
               <div className="speech-bubble" > 
                   <h2>Welcome 🤗</h2>      
               </div>
            </Typing>
            <div className="text-div">
               <div className="post-it-1" onClick={this.handleBioClick}>
                   <h3>Who am I ? </h3>
               </div>
               <div className="post-it-2" onClick={this.handleProjectClick}>
                   <h3> My Projects </h3>
               </div>
               <div className="post-it-1" onClick={this.handleSkillClick}>
                   <h3> Skills </h3>
               </div>
               <div className="post-it-2" onClick={this.handleContactClick}>
                   <h3> Contact! </h3>
               </div>
            </div>
        </div>
  }
 
  
  render(){
 
  
  console.log(this.state)
    return (

      <div className="App">
        {this.renderNotebook()}
        
        { this.state.bio ?  
        <AwesomeSlider style={{width: '50%', padding: "10% 20%"}} > 
          <div className="bio" > 
             <img src="./img/me-2.jpg"/>
             <p className="text"> Something</p>
             <button className="x" onClick={this.handleBioClick}>✖️</button>
          </div>
          <div id="flying-2">
              <img src="./img/flying.gif"/>
              <div className="text-container">
                <h3 className="h3">Journey from 🇹🇷 to 🇺🇸 </h3>
                <p className="text">Something</p>
              </div>
              <button className="x" onClick={this.handleBioClick}>✖️</button>
          </div>
          <div className="coder-cat" > 
             <p className="text"> Something</p>
             <img src="./img/coder-cat.gif"/>
             <button className="x" onClick={this.handleBioClick}>✖️</button>
          </div>
        </AwesomeSlider> : null }

        {this.state.project ? 
        <AwesomeSlider style={{width: '50%', padding: "10% 20%"}} >
          <div>
             <button className="x" onClick={this.handleProjectClick}>✖️</button>
          </div>
          <div>
             <button className="x" onClick={this.handleProjectClick}>✖️</button>
          </div>
        </AwesomeSlider> : null}
         
         {this.state.skill ? 
         <AwesomeSlider style={{width: '50%', padding: "10% 20%"}} >
           <div>
             <img className="ruby-img"src="./img/rails.jpg"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="react"src="./img/react.gif"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="js" src="./img/javascript.jpg"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="active-record" src="./img/active-record.png"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="css-img" src="./img/css.jpg"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="mq-img" src="./img/mq.png"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="redux-img" src="./img/redux.png"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="heroku-img" src="./img/heroku.png"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
        </AwesomeSlider> : null
         }
         {this.state.contact ? 
         <AwesomeSlider style={{width: '50%', padding: "10% 20%"}} >
           <div>
             <button className="x" onClick={this.handleContactClick}>✖️</button>
           </div>
           <div>
             <button className="x" onClick={this.handleContactClick}>✖️</button>
           </div>
        </AwesomeSlider> : null
         }
      </div>
    );
  }
}

export default App;
