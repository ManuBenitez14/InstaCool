import * as React from 'react';
import './App.css';

import Header from './components/Header'
import Intro from './components/Intro'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Header />
      <Intro/>
      <Intro/>
      </div>
    );
  }
}

export default App;
