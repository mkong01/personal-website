import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';


function App() { 
  // similar to a main function
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component = {Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
    </Switch>

    </Router>
    </>
  );
}

export default App;
