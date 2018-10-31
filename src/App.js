import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import SingleCard from './components/singleCard/singleCard';
import { Switch, Route } from 'react-router-dom';

// import * as actions from './store/action/like';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/view/:id" component={SingleCard} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
