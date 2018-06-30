import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          <Link to="/calendar">Calendar</Link>
        </div>
        <div>
          <Link to="/day">Day View</Link>
        </div>
      </div>
    );
  }
}

export default Home;
