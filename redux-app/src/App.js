import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import NavBar from './components/NavBar';

import './scss/app.scss';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      {/* <NavLink to="/randomkitty">Random Cat</NavLink> */}


      {/* <Route path="/" /> */}
    </div>
  );
}

export default App;
