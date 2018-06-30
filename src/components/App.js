import React, { Component } from 'react';
import Home from './Home';
import Calendar from './Calendar';
import DayView from './DayView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/day" component={DayView} />
        </Switch>
      </Router>
    );
  }
}
