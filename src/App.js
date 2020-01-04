import React from 'react';
import './App.css';
import Typing  from 'react-typing-animation'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';

// import Typing from 'react-typing-animation';
// // import Bio from './Components/Bio'
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';


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

 
  render(){
 
  

    return (

      <div className="app">
         
          <div className="border">
          <div className="clock">
            <div className="dot"></div>
            <div className="hour"></div>
            <div className="minute"></div>
            <div className="second"></div>
          </div>
          <div className="shelf">
            <div className="book-holder">
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="book">
              <ul>
                <li>Aspiration</li>
                <li>Success</li>
                <li>Future</li>
                <li>Inspired</li>
              </ul>
            </div>
          </div>
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
               <div className="ears">
                 <div className="left-ear">
                   <div className='earing'></div>
                 </div>
                 <div className="right-ear">
                 <div className='earing'></div>
                 </div>
               </div>
               <div className="nose"></div>
               <div className="mouth"></div>
          </div> 
          
          <div className="neck"></div>
          <div className="t-shirt"></div>
         
    {/* <Typing>
      <div className="message"> 
      <p>Hello, My name is Derya!</p> 
      </div>
    </Typing> */}
          <div className="computer">
            <div className="apple-logo"></div>
          </div>
          <div className="pencil-jar">
            <div className='eraser'></div>
            <div className="pencil"></div>
            <div className='eraser-2'></div>
            <div className="pencil-2"></div>
          </div>
          <div className="table">
            <div className="plant">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="vase-top"></div>
            <div className="vase"></div>
          </div>
          <div className="table-front"></div>
          <div className="table-side"></div>
          <div className="garbage-can"></div>
          <div className="dog">
            <div className="dog-head">
              <div className="dog-ear">
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="dog-eyes">
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="dog-nose"></div>
              <div className="dog-mouth">
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="dog-tongue"></div>
            </div>
            <div className="dog-body">
              <div className="collar">
                <div className="heart"></div>
              </div>
            </div>
            <div className="dog-legs">
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="coffee-steam"></div>
          <div className="coffee-cup"></div>
          <div className="coffee-bottom"></div>
         <div className="postits">
          <div className="post-it-1">
            <p onClick={this.handleBioClick}> About me</p>
          </div>
          <div className="post-it-2">
              <p onClick={this.handleProjectClick}> My projects</p>
          </div>
          <div className="post-it-3">
            <p onClick={this.handleSkillClick}>My skills</p>
          </div>
          <div className="post-it-4">
            <p onClick={this.handleContactClick}>Contact me!</p>
          </div>
          </div>
          <div className="floor"></div>
          </div>

          { this.state.bio ?  
        <AwesomeSlider cssModule={AwesomeSliderStyles} style={{width: '60%', "z-index":"6", margin: "-250px auto"}} > 
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
        <AwesomeSlider style={{width: '60%', "z-index":"6", margin: "-250px auto"}}  >
          <div>
             <button className="x" onClick={this.handleProjectClick}>✖️</button>
          </div>
          <div>
             <button className="x" onClick={this.handleProjectClick}>✖️</button>
          </div>
        </AwesomeSlider> : null}
         
         {this.state.skill ? 
         <AwesomeSlider style={{width: '60%', "z-index":"6", margin: "-250px auto"}} >
           <div>
             <img className="ruby-img"src="./img/ruby.jpg"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="rails-img"src="./img/rails.png"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="react"src="./img/react.gif"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="js-img" src="./img/javascript.jpg"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="active-record" src="./img/active-record.png"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
           <div>
             <img className="html-img" src="./img/html.jpg"/>
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
           <div>
             <img className="sqlite-img" src="./img/sqlite.png"/>
             <button className="x" onClick={this.handleSkillClick}>✖️</button>
           </div>
        </AwesomeSlider> : null
         }
         {this.state.contact ? 
         <AwesomeSlider style={{width: '60%', "z-index":"6", margin: "-250px auto"}}  >
           <div className="linked-in-div">
             <a href="https://www.linkedin.com/in/derya-tanr%C4%B1verdi-701a3489/" target="_blank">
             <img src="./img/linkedin.png"/>
             </a>
             <a href="https://github.com/deryatanriverdi88" target="_blank">
                <img src="./img/github.png"/>
             </a>
             <a href="https://twitter.com/Derya_T88" target="_blank">
                <img src="./img/twitter.png"/>
             </a>
             <a href="https://medium.com/@deryatanriverdii" target="_blank">
             <img src="./img/medium.png"/>
             </a>
             
             <button className="x" onClick={this.handleContactClick}>✖️</button>
           </div>
        </AwesomeSlider> : null
         }

      </div>
    );
  }
}

export default App;
