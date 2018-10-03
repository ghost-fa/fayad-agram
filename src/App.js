import React, { Component } from 'react';
import Navbar from './container/navbar/Navbar';
import Footer from './container/footer/Footer';
import Main from './container/main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />

      </div>
    );
  }
}

export default App;
