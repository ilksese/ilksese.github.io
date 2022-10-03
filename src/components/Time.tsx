import React from "react";
import './Time.less'

interface TimeState {
    date: Date
}

export default class Time extends React.PureComponent<{}, TimeState> {
    private timer: NodeJS.Timer | undefined;
    constructor(props:any) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {date} = this.state;
        const year = date.getFullYear().toString().padStart(4, '0');
        const month = date.getMonth().toString().padStart(2, '0');
        const day = date.getDay().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return (
            <React.Fragment key="cp-time">
                <div className="cp-time center column">
                    <div className="cp-time-static row">
                        <div className="cp-time-year">{year}</div>
                        <div className="cp-time-month">{month}</div>
                        <div className="cp-time-day">{day}</div>
                    </div>
                    <div className="cp-time-dynamic row">
                        <div className="cp-time-hours">{hours}</div>
                        <div className="cp-time-minutes">{minutes}</div>
                        <div className="cp-time-seconds">{seconds}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}