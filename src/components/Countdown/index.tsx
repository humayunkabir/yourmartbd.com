import { Component } from 'react';
interface CountDownBoxProps {
  title: string;
  count: number;
}

const CountDownBox = ({ title, count }: CountDownBoxProps) => (
  <div className="flex flex-col border justify-center items-center w-1/4 p-5 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg text-white">
    <h2 className="text-5xl">{count}</h2>
    <h2 className="text-2xl">{title}</h2>
  </div>
);

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: '',
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? '0' + dd : dd;
    var hours = hh < 10 ? '0' + hh : hh;
    var minutes = mm < 10 ? '0' + mm : mm;
    var seconds = ss < 10 ? '0' + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: 'TIME IS UP',
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date('Oct 08, 2021 21:00:00').getTime();
    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div id="countdown" className="flex justify-center gap-3 w-10/12">
        <CountDownBox title="Days" count={days} />
        <CountDownBox title="Hours" count={hours} />
        <CountDownBox title="Minutes" count={minutes} />
        <CountDownBox title="Seconds" count={seconds} />
      </div>
    );
  }
}

export default Countdown;
