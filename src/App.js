import React from 'react';
import './App.css';
import TimerLengthController from './components/timer-length/TimerLengthController';
import Timer from './components/timer/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionDuration: 25,
      breakDuration: 5
    }
    this.updateSessionGlobal = this.updateSessionGlobal.bind(this);
    this.updateBreakGlobal = this.updateBreakGlobal.bind(this);
  }

  updateSessionGlobal(duration) {
    this.setState({
      sessionDuration: duration
    })
  }

  updateBreakGlobal(duration) {
    this.setState({
      breakDuration: duration
    })
  }

  render() {
    return (
      <div>
        <div id="clock-title" className="text-center bg-dark text-white">POMODORO CLOCK</div>
        <div className="row">
          <div className="border rounded border-dark col-xs-3  p-2 mx-auto">
            <TimerLengthController
              type={'Session'}
              defaultTime={this.state.sessionDuration}
              timeHandler={this.updateSessionGlobal} />
          </div>
          <div className="border rounded border-dark col-xs-3  p-2 mx-auto">
            <TimerLengthController
              type={'Break'}
              defaultTime={this.state.breakDuration}
              timeHandler={this.updateBreakGlobal} />
          </div>
        </div>
        <div className="row">
          <Timer sessionDuration={this.state.sessionDuration} breakDuration={this.state.breakDuration} />
        </div>
      </div>
    );
  }
}

export default App;
