import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DayView extends Component {
  render() {
    return (
      <div>
        <h1>Day View</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/calendar">Calendar</Link>
        </div>
      </div>
    );
  }
}
