import './App.css';
import './tailwind.output.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './views/Chat'
import Encrypt from './views/Encrypt'
import Decrypt from './views/Decrypt'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Chat} />
        <Route exact path='/encode' component={Encrypt} />
        <Route exact path='/decode' component={Decrypt} />
      </Router>
    </div>
  );
}

export default App;
