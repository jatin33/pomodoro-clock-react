import React from 'react';

class Timer extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column mx-auto mt-3 border rounded border-dark">
                <div className="m-2 p-2 border rounded">
                    {`${this.props.sessionDuration}:00`}
                </div>
                <div className="m-2 p-2">
                <button>
                <i className="fa fa-play"></i>
                </button>
                <button>
                <i className="fa fa-pause"></i>
                </button>
                <button>
                <i className="fa fa-repeat"></i>
                </button>
                </div>
            </div>
        )
    }
}

export default Timer;