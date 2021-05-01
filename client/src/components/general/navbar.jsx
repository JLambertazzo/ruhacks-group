import React, { Component } from 'react'
import './navbar.scss'

export class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: true
    }
  }

  userSection (loggedIn) {
    if (loggedIn) {
      return (
        <div className='nav-right'>
          <a href='#'>Profile</a>
        </div>
      )
    } else {
      return (
        // time permitting: responsive
        <div className='nav-right'>
          <a href='/login'>Log In</a>
          <a href='/signup'>Sign Up</a>
        </div>
      )
    }
  }

  render () {
    return (
      <nav className='navbar'>
        <div className='nav-left'>
          <img src='https://via.placeholder.com/85' alt='Logo' />
          <a href='/'>Home</a>
        </div>
        {this.userSection(this.state.loggedIn)}
      </nav>
    )
  }
}

export default NavBar
