import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import "./App.css"
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Situation from './components/Situation/Situation';
import Preferences from './components/Preferences/Preferences';
import Goals from './components/Goals/Goals';
import Recommend from './components/Recommend/Recommend';

// Main part of the app
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/situation' component={Situation} />
          <Route path='/preferences' component={Preferences} />
          <Route path='/goals' component={Goals} />
          <Route path='/recommend' component={Recommend} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
