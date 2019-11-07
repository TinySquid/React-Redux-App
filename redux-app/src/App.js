import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import NavBar from './components/NavBar';

import RandomKitty from './components/RandomKitty';

import './scss/app.scss';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      {/* <NavLink to="/randomkitty">Random Cat</NavLink> */}


      <Route exact path="/" component={RandomKitty} />
    </div>
  );
}

export default App;
