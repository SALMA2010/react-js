import React, { Component } from 'react';

import './App.css';
import { browserHistory, Router } from 'react-router';
import { Routes } from './router';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        {Routes}
      </Router>
    );
  }
}

export default App;
