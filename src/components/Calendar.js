import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/day">Day View</Link>
        </div>
      </div>
    );
  }
}
