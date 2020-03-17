import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FeedApp from './Container/FeedApp';
import DetailApp from './Container/DetailApp';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FeedApp} />
      <Route path="/:id" component={DetailApp} />
    </div>
  );
}

export default App;
