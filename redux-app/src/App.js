import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './components/Home/Home';
import Breeds from './components/Breeds/Breeds';
import RandomKitty from './components/Random/RandomKitty';

import './scss/app.scss';

const App = () => {
  return (
    <div className="app">
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route exact path="/breeds" component={Breeds} />
      <Route path="/randomkitty" component={RandomKitty} />
    </div>
  );
}

export default App;
