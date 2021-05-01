import React from "react";
import loginImg from "../../login.svg";
import { useHistory } from "react-router-dom";
import history from '../history';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <a href="/hobbies" className="btn">Register</a>
        </div>
      </div>
    );
  }
}