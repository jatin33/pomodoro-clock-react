import React from 'react';
import './App.css';
import TimerLengthController from './components/TimerLengthController';

function App() {
  return (
    <div>
      <div id="clock-title" className="text-center bg-dark text-white">
        POMODORO CLOCK
      </div>
      <div className="row">
      <div className="border border-dark col-xs-3  p-2 mx-auto">
        <TimerLengthController
          type={'Session'} />
      </div>
      <div className="border border-dark col-xs-3  p-2 mx-auto">
        <TimerLengthController type={'Break'} />
      </div>
      </div>
    </div>
  );
}

export default App;
