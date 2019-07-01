import React from 'react';
import './TimerLengthController.css';

class TimerLengthController extends React.Component {
    constructor(props) {
        super(props);
        this.changeTimeDuration = this.changeTimeDuration.bind(this);
    }

    changeTimeDuration(changeSign) {
        let { defaultTime } = this.props;
        console.log(defaultTime);
        if (changeSign === '-') {
            --defaultTime;
        } else if (changeSign === '+') {
            ++defaultTime;
        }
        this.props.timeHandler(defaultTime);
    }

    render() {
        return (
            <div id="timer-length" className="container">
                <div className="text-center">
                    {this.props.type + ' Length'}
                </div>
                <div className="row">
                    <div className="col">
                        <button onClick={() => this.changeTimeDuration('+')}>
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col">
                        {this.props.defaultTime}
                    </div>
                    <div className="col">
                        <button onClick={() => this.changeTimeDuration('-')}>
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerLengthController;