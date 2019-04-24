import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetCounters } from './actions/index';
import './App.css';
import {
  Container,
  Button
} from 'reactstrap';
import NavBar from './components/navbar';
import Counters from './components/counters';

const App = ({dispatch}) => {
  return ( 
      <React.Fragment>
        <NavBar/>
        <Container>
          <div style={{float: "left"}}>
            <Counters />
            <Button color="success" className="btn-sm m-2" onClick={() => dispatch(resetCounters())}>
              Reset
            </Button>
          </div>
        </Container>
    </React.Fragment>
   );
}

export default connect()(App);