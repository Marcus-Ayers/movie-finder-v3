import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './Home';
import Movie from './Movie.js';
import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <div className="container">
    <Router basename="/movie-finder-v3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand m-auto navbar-title" to="/">Movie Finder</Link>
      </nav>
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;