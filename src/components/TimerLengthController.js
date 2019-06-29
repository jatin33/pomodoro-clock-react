import React from 'react';

class TimerLengthController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: 25,
            type: ''
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.type + ' Length'}
                </div>
                <div className="row">
                    <div className="col">
                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                    </div>
                    <div className="col">
                        {this.state.duration}
                    </div>
                    <div className="col">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerLengthController;