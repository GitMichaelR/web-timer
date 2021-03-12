import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    //This declared the state of time at the very beginning
    this.state = {
      time: new Date(),
    };
  }
  //This happens when the component mount and the setInterval function get called with a call back function updateClock()
  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }
  //This section clears setInterval by calling intervalID so as to optimise memory
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  //This function set the state of the time to a new time
  updateClock() {
    this.setState({
      time: new Date(),
    });
  }

  dateBuilder(d) {
    let months = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    let days = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];

    let dateArr = String(d).split(" ");

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = dateArr[2];
    let year = dateArr[3];

    return `${day}, ${date}. ${month} ${year}`;
  }

  render() {
    return (
      <div className="time">
        <p className="main"> {this.state.time.toLocaleTimeString()}</p>
        <p className="date"> {this.dateBuilder(this.state.time)}</p>
      </div>
    );
  }
}
export default Clock;
