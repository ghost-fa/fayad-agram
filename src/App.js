import React, { Component, Fragmant } from 'react';
import Navbar from './container/navbar/Navbar';

import Main from './container/main/Main';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />


      </div>
    );
  }
}

export default App;
