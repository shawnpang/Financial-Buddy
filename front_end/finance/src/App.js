import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Questions from './components/Questions/Questions';
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

// App
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={AboutUs} />
          <Route path='/questions' component={Questions} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;