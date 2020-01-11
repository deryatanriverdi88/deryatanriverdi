import React from 'react';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import Clock from 'react-clock';


class App extends React.Component {

  state = {
    month: new Date().getMonth(),
    day: new Date().getDate(),
    date: new Date(),
    bio: false, 
    project: false, 
    skill: false, 
    contact: false
  }
 
  componentDidMount() {
      setInterval(
        () => this.setState({ date: new Date() }),
        1000
      );
  }
  
  month =()=> {
    let month = ""
    if(this.state.month === 0){
     return month = "January"
    }
    else if (this.state.month === 1){
      return month = "February"
    }
    else if (this.state.month === 2){
      return month = "March"
    }
    else if (this.state.month === 3){
      return month = "April"
    }
    else if (this.state.month === 4){
      return month = "May"
    }
    else if (this.state.month === 5){
      return month = "June"
    }
    else if (this.state.month === 6){
      return month = "July"
    }
    else if (this.state.month === 7){
      return month = "August"
    }
    else if (this.state.month ===8){
      return month = "September"
    }
    else if (this.state.month === 9){
      return month = "October"
    }
    else if (this.state.month === 10){
      return month = "November"
    }
    else {
      return month = "December"
    }
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
 
  
 console.log(new Date().getDay())
    return (
      <div className="app">
         <div className="border">
            <div className="myname">Derya Tanriverdi</div>
            <div className="clock">
                <Clock className="react-clock" value={this.state.date}/>
            </div>
            <div className="calendar">
                <div className="month">{this.month()}</div>
                <div className="day">{this.state.day}</div>
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
                  <p>Pet me ❣️ </p>
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
            <div className="coffee">
                <div className="coffee-steam"></div>
                <div className="coffee-cup"></div>
                <div className="coffee-bottom"></div>
            </div>
            <div className="postits">
                <div className="post-it-1">
                        <div className="flower">
                            <div className="middle"></div>
                                <ul>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                        </div>
                        <p onClick={this.handleBioClick}> About me</p>
                    </div>
              <div className="post-it-2">
                    <p onClick={this.handleProjectClick}> My projects</p>
                    <div className="file">
                        <div className="file-top"></div>
                        <div className="file-bottom">
                            <div className="opening-tag"></div>
                            <div className="slash"></div>
                            <div className="closing-tag"></div>
                        </div>
                    </div>
              </div>
              <div className="post-it-3">
                    <p onClick={this.handleSkillClick}>My skills</p>
                    <div className="lamb">
                        <div className="lamb-top">
                            <div className="lamb-inside">
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="lamb-light">
                                <ul>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lamb-bottom"></div>
                  </div>
              </div>
              <div className="post-it-4">
                    <p onClick={this.handleContactClick}>Contact me!</p>
                    <div className="email">
                        <span> @  </span>
                    </div>
             </div>
             <div className="css-art"> 
                 <p>Made by CSS with ❤️ </p>
             </div>
          </div>
            <div className="floor"></div>
         </div>

      { this.state.bio ?  
        <AwesomeSlider cssModule={AwesomeSliderStyles}> 
            <div className="bio" onClick={this.handleBioClick}> 
                <img src="./img/me-2.jpg"/>
                <p className="text"> Something</p>
            </div>
            <div id="flying-2" onClick={this.handleBioClick}>
                <img src="./img/flying.gif"/>
                <div className="text-container">
                    <h3 className="h3">Journey from 🇹🇷 to 🇺🇸 </h3>
                    <p className="text">Something</p>
                </div>
            </div>
            <div className="coder-cat" onClick={this.handleBioClick} > 
                 <p className="text"> Something</p>
                 <img src="./img/coder-cat.gif"/>
            </div>
        </AwesomeSlider> : null }

      {this.state.project ? 
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
            <div>
                <button className="x" onClick={this.handleProjectClick}>✖️</button>
            </div>
            <div>
                <button className="x" onClick={this.handleProjectClick}>✖️</button>
            </div>
        </AwesomeSlider> : null}
         
      {this.state.skill ? 
        <AwesomeSlider cssModule={AwesomeSliderStyles} >
          <div className="container">
              <div className="ruby-img" onClick={this.handleSkillClick} ></div>
          </div>
          <div className="container">
              <div className="rails-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="react-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="js-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="active-record" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="html-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="css-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="mq-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="redux-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="heroku-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="container">
              <div className="sqlite-img"onClick={this.handleSkillClick} ></div>
          </div>
        </AwesomeSlider> : null}

      {this.state.contact ? 
         <AwesomeSlider cssModule={AwesomeSliderStyles}>
           <div className="contact-div" onClick={this.handleContactClick}>
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
           </div>
        </AwesomeSlider> : null
         }

      </div>
    );
  }
}

export default App;
