import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './components/Home';
import RandomKitty from './components/RandomKitty';

import './scss/app.scss';

const App = () => {
  return (
    <div className="app">
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route path="/randomkitty" component={RandomKitty} />
    </div>
  );
}

export default App;
