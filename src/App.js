import React, { Component, Fragmant } from 'react';
import Navbar from './container/navbar/Navbar';
import Main from './container/main/Main';
import SingleCard from './container/SingleCard/SingleCard';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/view/commint" component={SingleCard} exact/>
        </Switch>



      </div>
    );
  }
}

export default App;
