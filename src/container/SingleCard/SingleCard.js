import React, { Component } from 'react';
import SingleCard from '../../components/singleCard/singleCard';
import './SingleCard.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions.js';
class singleCard extends Component {
  render() {
    return (
      <div className="singleCard">
        <SingleCard onClick={this.props.addlike} />
      </div>
    );
  }
}

export default connect(actions)(singleCard);

//
//
// const mapStateToProps = state => ({
//   counter: state.counter
// });
// export default connect(
//   mapStateToProps,
//   actions
// )(App);
