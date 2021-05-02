import React from 'react'
import homepageimage from './homepageimage.png'
import './homepage.scss'
import { useHistory } from 'react-router-dom';

export const Homepage = () => {

  const history = useHistory();
  
  return (
    <div className='home-container'>
      <div className='image'>
        <img src={homepageimage} className="homepage-img" alt="Background" />
      </div>
      <div className='content'>
        <h1>Study <br /> Buddies</h1>
        <p>Find a study buddy and become more productive and <br /> improve your GPA in only 2 weeks!</p>
        <input onClick={() => history.push('/signUp')} type="button" className="btn-main" onclick="./login';" value="log in" />
        <input onClick={() => history.push('/signUp')}type="button" className="btn-main" onclick="/pages/signup';" value="sign up" />
      </div>
    </div>
  )
}

export default Homepage