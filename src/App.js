import React, { Component } from 'react';
import Navbar from './container/navbar/Navbar';
import Main from './container/main/Main';
import SingleCard from './container/SingleCard/SingleCard';
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
