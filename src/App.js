import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';

import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <div className="container">
    <Router>
      <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand m-auto" to="/">Movie Finder</Link>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route component={NotFound} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;