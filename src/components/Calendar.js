import React, { Component } from 'react';
import DayNames from './DayNames';
import Week from './Week';
import { Link } from 'react-router-dom';
import moment from 'moment';
moment().format();

export default class Calendar extends Component {
  constructor() {
    super();

    this.state = {
      month: moment().startOf('day')
    };
  }

  previous() {
    var month = this.state.month;
    month.add(-1, 'M');
    this.setState({ month: month });
  }

  next() {
    var month = this.state.month;
    month.add(1, 'M');
    this.setState({ month: month });
  }

  select(day) {
    this.props.selected = day.date;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div>
          <h1>Calendar</h1>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/day" className="link">
              Day View
            </Link>
          </div>
        </div>
        <div className="header">
          <i className="fa fa-angle-left" onClick={this.previous} />
          <div>{this.renderMonthLabel()}</div>
          <i className="fa fa-angle-right" onClick={this.next} />
        </div>
        <DayNames />
        <div className="week">{this.renderWeeks()}</div>
      </div>
    );
  }

  renderWeeks() {
    var weeks = [],
      done = false,
      date = this.state.month
        .clone()
        .startOf('month')
        .add('w' - 1)
        .day('Sunday'),
      monthIndex = date.month(),
      count = 0;

    while (!done) {
      weeks.push(
        <Week
          key={date.toString()}
          date={date.clone()}
          month={this.state.month}
          select={this.select}
          selected={this.props.selected}
        />
      );
      date.add(1, 'w');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    return (
      <span className="week1">{this.state.month.format('MMMM, YYYY')}</span>
    );
  }
}
