import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
