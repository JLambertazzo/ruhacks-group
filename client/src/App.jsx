import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from "./components/login/signUp";
import { Hobbies } from './pages/hobbies/hobbies'
import { NavBar } from './components/general/navbar'
import UserInfo from './pages/userinfo/UserInfo'
import { TaskView } from './pages/taskview/taskview'
import { Homepage } from './pages/homepage/homepage'
import './App.scss'

const App = () => {
  return (
    <div className='display'>
      <NavBar />
      <div className='test'>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/userInfo" component={UserInfo} />
            <Route exact path="/hobbies" component={Hobbies} />
            <Route exact path="/tasks/:room" component={TaskView} />
            <Route exact path="/homepage" component={Homepage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
