import React from 'react';
import './TimerLengthController.css';

class TimerLengthController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: this.props.defaultTime
        }
        this.changeTimeDuration = this.changeTimeDuration.bind(this);
    }

    componentDidMount(){
        this.props.timeHandler(this.state.duration);
    }

    changeTimeDuration(changeSign) {
        let { duration } = this.state;
        console.log(duration);
        if (changeSign === '-') {
            this.setState({
                duration: --duration
            })
        } else if (changeSign === '+') {
            this.setState({
                duration: ++duration
            })
        }
        this.props.timeHandler(this.state.duration);
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
                        {this.state.duration}
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