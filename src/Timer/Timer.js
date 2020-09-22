import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  state = {
    active: false,
    currentCount: this.props.time,
    intervalId: null,
  };
  countToggle = () => {
    if (!this.state.active) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  };
  startTimer = () => {
    this.state.currentCount === 0 &&
      this.setState({ currentCount: this.props.time });
    this.props.onTimeStart();
    this.intervalId = setInterval(this.timer, this.props.step);
    this.setState({ active: true });
  };
  stopTimer = () => {
    this.props.onTimePause();
    clearInterval(this.intervalId);
    this.setState({ active: false });
  };
  componentDidMount() {
    this.props.autostart && this.startTimer();
  }
  timer = () => {
    this.setState({ currentCount: this.state.currentCount - this.props.step });
    this.props.onTick(this.state.currentCount);
  };
  render() {
    if (this.state.currentCount <= 0) {
      clearInterval(this.intervalId);
        this.state.active = false;
    }
    return (
      <div className="wrapper">
        <div className="time">
          {this.state.currentCount > 0 ? this.state.currentCount : 0} ms
        </div>
        <button className="button" type="default" onClick={this.countToggle}>
          {this.state.active ? "pause" : "start"}
        </button>
      </div>
    );
  }
}

export default Timer;
