import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import {  connect } from 'react-redux';
import { increment } from './actions/counter';

class _App extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div className="App">
        <div style={{ fontSize: 160 }}>{count}</div>
        <button onClick={increment}>
          imcrement
        </button>
      </div>
    );
  }
}


const mapStateToMaps = state => ({
  count: state.counter
});

const mapDispatchToProps = (dispatch) => bindActionCreators( {
  increment
}, dispatch)

export default connect(mapStateToMaps, mapDispatchToProps)(_App);
