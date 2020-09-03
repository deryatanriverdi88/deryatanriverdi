import React from 'react';
// import './App.css';
import './STYLES/style.css';
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
    contact: false,
    lightOn: true,
    curtainClose: false,
    windowSize: window.innerWidth
  }

  componentDidMount() {
    setInterval(
      () => this.setState({
          date: new Date(),
          windowSize: window.innerWidth
        }),
      1000
    );
  }

  month =()=> {
    let m = ""
    if(this.state.month === 0){
     return m = "January"
    }
    else if (this.state.month === 1){
      return m = "February"
    }
    else if (this.state.month === 2){
      return m = "March"
    }
    else if (this.state.month === 3){
      return m = "April"
    }
    else if (this.state.month === 4){
      return m = "May"
    }
    else if (this.state.month === 5){
      return m = "June"
    }
    else if (this.state.month === 6){
      return m = "July"
    }
    else if (this.state.month === 7){
      return m = "August"
    }
    else if (this.state.month ===8){
      return m = "September"
    }
    else if (this.state.month === 9){
      return m = "October"
    }
    else if (this.state.month === 10){
      return m = "November"
    }
    else {
      return m = "December"
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

  handleLightOn = () =>{
    this.setState({
      lightOn: !this.state.lightOn
    })
  }

  handleCurtainClick = () =>{
    this.setState({
      curtainClose: !this.state.curtainClose
    })
  }

  render(){
 console.log(this.state.windowSize)
    return (
      <div className="app">
         <div className="border">
            <div className="light-buttons">
                {!this.state.lightOn ?
                <div className="light-off">
                    <button onClick={this.handleLightOn}>
                            Turn the light on!
                    </button>
                </div> :
                <div className="light-on">
                    <button onClick={this.handleLightOn}>
                        Turn the light off!
                    </button>
                </div>
                }
            </div>
            <p className="myname">Derya Tanriverdi</p>
            <div className="css-art"> 
                 <p>Made by CSS with <span role="img" aria-label="heart"> ❤️ </span> </p>
            </div>
            <div className="clock">
                <Clock className="react-clock" value={this.state.date}/>
            </div>
            <div className="calendar">
                <div className="month">{this.month()}</div>
                <div className="day">{this.state.day}</div>
            </div>
            {this.state.windowSize < 1100 ?
                <p className="notification">This page is made with CSS art <span role="img" aria-label="heart"> ❤️ </span>I specifically wanted
                to have it bigger than page itself, because the screen size is {this.state.windowSize}px and it would be so unfair to shrink all the art in such a small place.
                <img src="./img/pinchToZoom.gif" alt="pinch-to-zoom"/>
                </p> :
                null
            }
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

            {!this.state.lightOn ?
            null :
            <div className="bulb" ></div>
            }

            <div className="chair"></div>

            {this.state.lightOn ?
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
            </div> : null
            }

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
            <div className="table"></div>
            <div className="table-front"></div>
            <div className="garbage-can"></div>

            {this.state.lightOn ?   
            <div className="dog">
                 <p>Pet me <span role="img" aria-label="heart"> ❣️ </span></p>
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
            </div> : null
            }
            
            {this.state.lightOn ? 
            <div className="coffee">
               <div className="coffee-steam"></div>
               <div className="coffee-cup"></div>
               <div className="coffee-bottom"></div>
            </div> : null
            }

            <div className="postits">
                <div className="post-it-1">
                    <p onClick={this.handleBioClick}> About me</p>
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
            
            {this.state.date.getHours() > 5 && this.state.date.getHours()  < 20 ?
            <div className="window">
                 <div className="cloud">
                   <ul>
                     <li></li>
                     <li></li>
                   </ul>
                </div>
                <div className="window-devide"></div>
                {!this.state.curtainClose ?
                     <div className="curtain">
                         <div className="curtain-rope" onClick={this.handleCurtainClick}></div>
                         <div className="curtain-handle" onClick={this.handleCurtainClick}></div>
                     </div> :
                     <div className="curtain curtain-close">
                        <div className="curtain-rope" onClick={this.handleCurtainClick}></div>
                        <div className="curtain-handle" onClick={this.handleCurtainClick}></div>
                     </div>
                }
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
            </div> :
            <div className="window" id="night">
               <div className="window-devide"></div>
               <div className="moon"></div>
               <div className="stars">
                   <ul>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                  </ul>
               </div>
               {!this.state.curtainClose ?
                     <div className="curtain open-curtain">
                         <div className="curtain-rope" onClick={this.handleCurtainClick}></div>
                         <div className="curtain-handle" onClick={this.handleCurtainClick}></div>
                     </div> :
                     <div className="curtain curtain-close">
                        <div className="curtain-rope" onClick={this.handleCurtainClick}></div>
                        <div className="curtain-handle" onClick={this.handleCurtainClick}></div>
                     </div>
                }
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
               
            </div>
            }
            <div className="floor"></div>
        </div>

        { this.state.bio ?
        <div className="bio-card"> 
            <div className="bio" >  
                <div className="bio-img-container">
                   <img src="./img/me-3.jpg" alt="me"/>
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
                    <button className="resume">
                    <a href="./Resume/Derya-Tanriverdi-Resume.pdf" download target="_blank"> Here is a link to my resume!</a>
                    </button>
                </div>
                <button className="x" onClick={this.handleBioClick}> x </button>
            </div>
        </div> : null }

        {this.state.project ?
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
          <div className="project-div">
              <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/yVvnaz8s6Tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="nutri-track-demo" allowfullscreen></iframe>
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
              <button className="x" onClick={this.handleProjectClick}> x </button>
          </div>
          <div className="project-div">
              <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/FWPfYNnCwCY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="doggodoption-demo" allowfullscreen></iframe>
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
              <button className="x" onClick={this.handleProjectClick}> x </button>
          </div>
          <div className="project-div">
              <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/zTY2ZHW46P8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="me-recommends-demo" allowfullscreen></iframe>
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
              <button className="x" onClick={this.handleProjectClick}> x </button> 
          </div>
          <div className="project-div">
              <h3>CodePen Dashboard</h3>
              <div className="codepen">
                 <div className="codepen-div">
                     <img src="./img/CodePen/BabyYoda.png
                     " alt="Baby-Yoda"/>
                     <div className="middle-spot">
                         <a href="https://codepen.io/deryatanriverdi88/pen/RwNELzd" target="_blank" rel="noopener noreferrer"> CodePen Link </a>
                     </div>
                 </div>
                 <div className="codepen-div">
                      <img src="./img/CodePen/Eric-Cartman.png
                      " alt="Eric-Cartman"/>
                      <div className="middle-spot">
                         <a href="https://codepen.io/deryatanriverdi88/pen/dyPBNzW" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                      </div>
                 </div>
                 <div className="codepen-div">
                     <img src="./img/CodePen/bike.png
                     " alt="Bike"/>
                     <div className="middle-spot">
                         <a href="https://codepen.io/deryatanriverdi88/pen/VwYVjXv" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                     </div>
                </div>
                 <div className="codepen-div">
                      <img src="./img/CodePen/coffee.png
                      " alt="Coffee"/>
                      <div className="middle-spot">
                         <a href="https://codepen.io/deryatanriverdi88/pen/xxbdVGe" target="_blank" rel="noopener noreferrer"> CodePen Link </a>
                      </div>
                 </div>
                 <div className="codepen-div">
                      <img src="./img/CodePen/xmas-tree.png
                      " alt="X-Mas-Tree"/>
                      <div className="middle-spot">
                         <a href="https://codepen.io/deryatanriverdi88/pen/rNawJad" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                      </div>
                 </div>
                 <div className="codepen-div">
                      <img src="./img/CodePen/ValentinesDay.png
                      " alt="Valentines-Day"/>
                      <div className="middle-spot">
                          <a href="https://codepen.io/deryatanriverdi88/pen/MWwKOre" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                      </div>
                 </div>
              </div>
              <button className="x" onClick={this.handleProjectClick}> x </button>
          </div>
          <div className="project-div">
              <h3>CodePen Dashboard</h3>
                 <div className="codepen">
                     <div className="codepen-div">
                         <img src="./img/CodePen/pencil-jar.png
                         " alt="Pencil-Jar"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/povWeqj" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                     <div className="codepen-div">
                         <img src="./img/CodePen/battery.png
                         " alt="Battery"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/rNamxNm" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                     <div className="codepen-div">
                         <img src="./img/CodePen/heart.png
                         " alt="Heart"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/LYEWKWL" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                     <div className="codepen-div">
                          <img src="./img/CodePen/Regain.png
                          " alt="Regain"/>
                          <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/WNvrExo" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                          </div>
                     </div>
                     <div className="codepen-div">
                         <img src="./img/CodePen/Casette-Tape.png
                         " alt="Casette-Tape"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/yLNZJdd" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                     <div className="codepen-div">
                         <img src="./img/CodePen/Drawing.png
                         " alt="Drawing"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/QWbZNqx" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                 </div>
                 <button className="x" onClick={this.handleProjectClick}> x </button>
          </div>
          <div className="project-div">
              <h3>CodePen Dashboard</h3>
                 <div className="codepen">
                     <div className="codepen-div">
                         <img src="./img/CodePen/Brooklyn-Map.png
                         " alt="Brooklyn-Map"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/zYGRBNQ" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                     <div className="codepen-div">
                         <img src="./img/CodePen/Polar-Bear.png
                         " alt="Polar-Bear"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/JjdOJaW" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                     <div className="codepen-div">
                         <img src="./img/CodePen/Coloring-Book.png
                         " alt="Coloring-Book"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/JjdqxKb" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                     <div className="codepen-div">
                          <img src="./img/CodePen/Calculator.png
                          " alt="Calculator"/>
                          <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/gOaYmep" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                          </div>
                     </div>
                     <div className="codepen-div">
                         <img src="./img/CodePen/Balloon-Popping.png
                         " alt="Ballon-Popping"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/RwWWzdo" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                     <div className="codepen-div">
                         <img src="./img/CodePen/Hangman.png
                         " alt="Hangman"/>
                         <div className="middle-spot">
                             <a href="https://codepen.io/deryatanriverdi88/pen/gOawOqY" target="_blank" rel="noopener noreferrer"> CodePen Link  </a>
                         </div>
                     </div>
                 </div>
                 <button className="x" onClick={this.handleProjectClick}> x </button>
          </div>
      </AwesomeSlider> : null}
         
        {this.state.skill ?
        <AwesomeSlider cssModule={AwesomeSliderStyles} >
          <div className="skill-slide">
             <h3> Frontend</h3>
             <div className="front-end">
                  <img className="react-img" src='./img/Skills/Front-End/react.svg' alt="React"/>
                  <img className="redux-img" src='./img/Skills/Front-End/redux.svg'alt="Redux"/>
                  <img className="js-img" src='./img/Skills/Front-End/javascript.svg' alt="JavaScript"/>
                  <img className="css-img" src='./img/Skills/Front-End/css.svg' alt="CSS"/>
                  <img className="sass-img" src='./img/Skills/Front-End/sass.svg' alt="SASS"/>
                  <img className="svg-img" src="./img/Skills/Front-End/svg.svg" alt="SVG"/>
                  <img className="html-img" src='./img/Skills/Front-End/html.svg'alt="HTML"/>
                  <img className="figma-img" src='./img/Skills/Front-End/figma.svg'alt="Figma"/>
                  <img className="mq-img" src='./img/Skills/Front-End/mq.svg' alt="Media-Queries"/>
                  <button className="x" onClick={this.handleSkillClick}> x </button>
             </div>
          </div>
          <div className="skill-slide">
              <h3> Backend</h3>
              <div className="back-end">
                 <img className="ruby-img" src='./img/Skills/Back-End/ruby.svg' alt="Ruby"/>
                 <img className="sqlite-img" src='./img/Skills/Back-End/sqlite.svg' alt="SQlite"/>
                 <img className="heroku-img" src='./img/Skills/Back-End/heroku.svg'alt="Heroku"/>
                 <img className="active-record-img" src='./img/Skills/Back-End/active-record.svg' alt="Active-Record"/>
                 <button className="x" onClick={this.handleSkillClick}> x </button>
              </div>
          </div>
      </AwesomeSlider> : null}

        {this.state.contact ?
        <div className="contact-card">
             <div className="contact-div">
                 <a href="https://www.linkedin.com/in/derya-tanr%C4%B1verdi-701a3489/" target="_blank" rel="noopener noreferrer">
                     <img src="./img/SocialMedia/linkedin.png" alt="LinkedIn"/>
                 </a>
                 <a href="https://github.com/deryatanriverdi88" target="_blank" rel="noopener noreferrer">
                     <img src="./img/SocialMedia/github.png" alt="GitHub"/>
                 </a>
                 <a href="https://twitter.com/Derya_T88" target="_blank" rel="noopener noreferrer">
                     <img src="./img/SocialMedia/twitter.png" alt="Twitter"/>
                 </a>
                 <a href="https://medium.com/@deryatanriverdii" target="_blank" rel="noopener noreferrer">
                     <img src="./img/SocialMedia/medium.png" alt="Medium"/>
                 </a>
                 <a href="https://medium.com/@deryatanriverdii" target="_blank" rel="noopener noreferrer">
                     <img src="./img/SocialMedia/codepen.png" alt="Codepen"/>
                 </a>
             </div>
             <button className="x" onClick={this.handleContactClick}> x </button>
         </div> : null}

      </div>
    );
  }
}

export default App;