import React from "react";
import './Time.less'

interface TimeState {
    date: Date
}

export default class Time extends React.PureComponent<{}, TimeState> {
    private timer: NodeJS.Timer | undefined;
    private ref = React.createRef<any>();
    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    disableCopy = (e: any) => {
        return e.returnValue = false;
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
        this.ref.current.addEventListener("selectstart", this.disableCopy);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.ref.current.removeEventListener("selectstart", this.disableCopy);
    }

    render() {
        const { date } = this.state;
        const year = date.getFullYear().toString().padStart(4, '0');
        const month = date.getMonth().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return (
            <div ref={this.ref} className="cp-time center column">
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
        )
    }
}