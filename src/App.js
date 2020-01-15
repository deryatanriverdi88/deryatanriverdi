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
 
  
 console.log(this.state.date.getHours())
    return (
      <div className="app">
         <div className="border">
            <div className="myname">Derya Tanriverdi</div>
            <div className="css-art"> 
                 <p>Made by CSS with <span> ❤️ </span> </p>
            </div>
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
            <div className="light"></div>
            <div className="chair"></div>
           
            <div className="girl">
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
            </div>
            <div className="computer">
                <div className="apple-logo"></div>
            </div>
            <div className="pencil-jar">
                 <div className='eraser'></div>
                 <div className="pencil"></div>
                 <div className='eraser-2'></div>
                 <div className="pencil-2"></div>
            </div>
            <div className="plant-div">
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
            <div className="table">
               
            </div>
            <div className="table-front"></div>
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
             
          </div>
        
            {this.state.date.getHours() >= 5 && this.state.date.getHours()  <=17 ? 
              <div className="window">
              <div className="curtain"></div>
              <div className="cloud">
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="land">
                <div className="tree">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="window-devide"></div>
            </div> : 
              <div className="window" id="night">
             <div className="moon"></div>
             <div className="stars">
               <ul>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
               </ul>
             </div>
             <div className="curtain"></div>
             <div className="land" id="dark-green-land">
               <div className="tree" id="dark-green-tree">
                 <ul>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                 </ul>
               </div>
             </div>
             <div className="window-devide"></div>
           </div>
            }
           
            <div className="floor"></div>
         </div>

      { this.state.bio ?  
        <div className="bio-card"> 
            <div className="bio" onClick={this.handleBioClick}>   <div className="bio-img-container">
                     <img src="./img/me-2.jpg"/>
                </div>
                <div className="text-container">
                    <h2 className="text h2">Who am I ?</h2>
                    <p className="text">
                       Hello, My name is Derya Tanriverdi! <br></br>
                       I am a full stack Web Developer who graduated from Flatiron School. <br></br>
                    </p>
                    <br></br>
                    <h2 className="text h2">How I began coding...</h2>
                    <p className="text">
                    My coding journey began when my friend suggested to try coding due to my love of foreign languages; this connection piqued my curiosity. First I signed up for Codecademy and learned HTML and CSS. Then I learned Ruby through Udemy where I really found my passion for coding, and I just kept going! I love the challenge of learning new code and creating code to turn ideas into reality!
                    </p>
                </div>
            </div>
          
        </div> : null }

      {this.state.project ? 
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
            <div className="project-div" onClick={this.handleProjectClick}>
                   <div className="video-container">
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/yVvnaz8s6Tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </div>
                   <div className="text-container">
                          <h2 className="text h2">NutriTrack</h2>
                          <ul className="link-ul">
                            <li>
                            <a href="https://github.com/deryatanriverdi88/NutriTrack-Frontend" className="text a-tag"> Github Frontend</a>
                            </li>
                            <li>
                                <a href="https://github.com/deryatanriverdi88/NutriTrack-Backend" className="text a-tag"> Github BackEnd</a>
                            </li>
                            <li>
                                <a href="https://nutritrack-test.netlify.com" className="text a-tag"> Live App</a>
                            </li>
                          </ul>
                          <h3 className="text">An application where users can track the nutritional values of their food intakes. </h3>
                          <ul className="list-style">
                             <li className="text">Implemented authorization, authentication, and persistence using Bcrypt, JWT, localStorage and Rails Credentials.</li>
                             <li className="text">Employed JavaScript new Date function,  so a user can view and add food to their calendar.</li>
                             <li className="text">Utilized react-router to create client-side end-points for users to navigate from.
                             </li>
                             <li className="text">
                             Created a dynamic user interface using React/Redux and Responsive CSS to adapt to various screen sizes and devices.
                             </li>
                          </ul>
                   </div>  
            </div>
            <div className="project-div" onClick={this.handleProjectClick}>
                   <div className="video-container">
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/FWPfYNnCwCY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </div>
                   <div className="text-container">
                          <h2 className="text h2">DoggoDoption</h2>
                          <ul className="link-ul">
                            <li>
                            <a href="https://github.com/deryatanriverdi88/pet-adoption-app-frontend" className="text a-tag"> Github Frontend</a>
                            </li>
                            <li>
                                <a href="https://github.com/deryatanriverdi88/pet-adoption-app-backend" className="text a-tag"> Github BackEnd</a>
                            </li>
                          </ul>
                          <h3 className="text">Dog Adoption web page where people can adopt dogs. </h3>
                          <ul className="list-style">
                             <li className="text">Utilized Bcrypt, JWT and localStorage to authenticate and authorize the user. </li>
                             <li className="text">Wrote JavaScript functions to allow users to find dogs by their names.</li>
                             <li className="text">Made external call to an API using RestClient to save images of dogs to the Dog model on the backend.
                             </li>
                          </ul>
                   </div>  
            </div>
            <div className="project-div" onClick={this.handleProjectClick}>
                   <div className="video-container">
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/zTY2ZHW46P8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </div>
                   <div className="text-container">
                          <h2 className="text h2">MeRecommends</h2>
                          <ul className="link-ul">
                            <li>
                            <a href="https://github.com/deryatanriverdi88/MeRecommends-2" className="text a-tag" > Github</a>
                            </li>
                          </ul>
                          <h3 className="text">A web-page for users to view or create recommendations of events, restaurants, etc. based on locations within NYC.</h3>
                          <ul className="list-style">
                             <li className="text">Developed a Rails API with endpoints for Users, Recommendations, and Locations.</li>
                             <li className="text">Incorporated localStorage to persist a user on refresh.</li>
                          </ul>
                   </div>  
            </div>
        </AwesomeSlider> : null}
         
      {this.state.skill ? 
        <AwesomeSlider cssModule={AwesomeSliderStyles} >
          
          <div className="skill-slide">
              <div className="ruby-img" onClick={this.handleSkillClick} ></div>
          </div>
          <div className="skill-slide">
              <div className="rails-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="react-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="js-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="active-record" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="html-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="css-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="mq-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="redux-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="heroku-img" onClick={this.handleSkillClick}></div>
          </div>
          <div className="skill-slide">
              <div className="sqlite-img"onClick={this.handleSkillClick} ></div>
          </div>
   
        </AwesomeSlider> : null}

      {this.state.contact ? 
         <div className="contact-card">
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
        </div> : null
         }
      </div>
    );
  }
}

export default App;
