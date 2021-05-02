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
  // hardcoded variables
  const user1 = {
    'write code': false,
    'eat food': false,
    'consume caffeine': false
  }
  const user2 = {
    'call mom': false,
    'call your mom': false,
    'learn react': false
  }
  return (
    <div className='display'>
      <NavBar />
      <div className='test'>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/userInfo" component={UserInfo} />
            <Route exact path="/hobbies" component={Hobbies} />
            <Route exact path="/tasks" component={(props) => <TaskView {...props} user1={user1} user2={user2} />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
