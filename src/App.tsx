import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FeedApp from './Container/FeedApp';
import FeedDetail from './Components/FeedDetail';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FeedApp} />
      <Route path="/:id" component={FeedDetail} />
    </div>
  );
}

export default App;
