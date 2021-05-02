import React, { Component } from 'react';
import Profile from '../../assets/images/profile.png';

class UserInfo extends Component {
  render() {
    return (
      <div className="App">
        <img src={Profile} alt="Profile" />
      </div>
    );
  }
}

export default UserInfo