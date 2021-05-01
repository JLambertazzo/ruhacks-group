import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from "./components/login/signUp";
import { Hobbies } from './components/hobbies/hobbies'
import { NavBar } from './components/general/navbar'
import UserInfo from './pages/UserInfo';
import './App.scss'

const App = () => {
  return (
    <div className='display'>
      <NavBar />
      <div className='test'>
        <Router>
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/userInfo" component={UserInfo} />
            <Route exact path="/hobbies" component={Hobbies} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
