import { useCallback, useEffect, useState } from 'react';
interface CountDownBoxProps {
  title: string;
  count: number;
}

const CountDownBox = ({ title, count }: CountDownBoxProps) => (
  <div className="flex flex-col border justify-center items-center w-1/2 lg:w-1/4 p-5 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg text-white flex-1">
    <h2 className="text-5xl font-extrabold">{count}</h2>
    <h2 className="text-lg">{title}</h2>
  </div>
);

const initialCountDownState = {
  days: 0,
  minutes: 0,
  hours: 0,
  seconds: 0,
  timeUp: "Time's Up!",
};

const Countdown = () => {
  const [deadline, setDeadline] = useState(0);
  const [state, setState] = useState(initialCountDownState);
  const count = useCallback(
    (x) => {
      const now = new Date().getTime();
      const t = deadline - now;
      const dd = Math.floor(t / (1000 * 60 * 60 * 24));
      const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const ss = Math.floor((t % (1000 * 60)) / 1000);

      const days = dd < 10 ? 0 + dd : dd;
      const hours = hh < 10 ? 0 + hh : hh;
      const minutes = mm < 10 ? 0 + mm : mm;
      const seconds = ss < 10 ? 0 + ss : ss;

      setState((prevState) => ({
        ...prevState,
        days,
        minutes,
        hours,
        seconds,
      }));

      if (t < 0) {
        clearInterval(x);
        setState(initialCountDownState);
      }
    },
    [deadline]
  );

  useEffect(() => {
    setDeadline(new Date('Oct 08, 2021 21:00:00').getTime());
    const x: any = setInterval(() => count(x), 1000);
    return () => clearInterval(x);
  }, [count]);

  return (
    <div id="countdown" className="flex justify-center gap-3 w-10/12 flex-wrap">
      <CountDownBox title="Days" count={state.days} />
      <CountDownBox title="Hours" count={state.hours} />
      <CountDownBox title="Minutes" count={state.minutes} />
      <CountDownBox title="Seconds" count={state.seconds} />
    </div>
  );
};

export default Countdown;
