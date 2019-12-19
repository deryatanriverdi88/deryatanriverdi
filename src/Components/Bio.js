import React, { Component } from 'react'

class Bio extends React.Component{
    state={}
    render(){
        return(
            <div className="bio" > 
            <img src="./img/me.jpg"/>
            <p> Something</p>
            <button className="x" onClick={this.props.bio}> ❌ </button>
            </div>
        )
    }
}


export default Bio