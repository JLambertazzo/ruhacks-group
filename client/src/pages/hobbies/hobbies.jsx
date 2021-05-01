import React, { Component } from 'react'
import './hobbies.scss'

export class Hobbies extends Component {
  hobbies = ['Gaming', 'Coding', 'Music', 'Science', 'Sports', 'Art', 'Reading', 'Learning', 'Travelling', 'Fitness', 'Teaching', 'Public Speaking']

  render () {
    return (
      <div className='hobby-container'>
        <form className='hobby-window'>
          <h1>Tell us about yourself</h1>
          <div className="input-container">
            <label htmlFor="school">I am attending</label>
            <input type="text" name="school" id="school" placeholder='Harvard ofc' />
          </div>
          <div className="input-container">
            <label htmlFor="classes">Classes I'm taking<br />(separated by commas)</label>
            <textarea name="classes" id="classes" placeholder='Enter your classes here' />
          </div>
          <h2>My Hobbies Are:</h2>
          <div className="checks">
            {this.hobbies.map((hobby, index) =>
              <div>
                <input type='checkbox' name={hobby} id={hobby} key={index} value={hobby}></input>
                <label htmlFor={hobby}>{hobby}</label>
              </div>
            )}
          </div>
          <input type="submit" value="Submit" className="submit-btn"/>
        </form>
      </div>
    )
  }
}

export default Hobbies
