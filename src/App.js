import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
  <div className="App">
      <Router>
        <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/login'>
            <Login/>
        </Route>
        <Route exact path='/detail'>
            <Details/>
        </Route>
      </Switch>
      
      </Router>
      
    </div>
  );
}

export default App;
