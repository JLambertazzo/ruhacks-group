import React, { Component } from 'react'
import homepageimage from './homepageimage.png'
import './homepage.scss'

export class Homepage extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='image'>
          <img src={homepageimage} className="homepage-img" />
        </div>
        <div className='content'>
          <h1>Study <br /> Buddies</h1>
          <p>Find a study buddy and become more productive and <br /> improve your GPA in only 2 weeks!</p>
          <input type="button" className="btn-main" onclick="./login';" value="log in" />
          <input type="button" className="btn-main" onclick="/pages/signup';" value="sign up" />
        </div>
      </div>
    )
  }
}

export default Homepage