import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from "./components/login/signUp";
import UserInfo from './pages/UserInfo';

const App = () => {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/userInfo" component={UserInfo} />
      </Switch>
    </Router>
  );
}

export default App;
