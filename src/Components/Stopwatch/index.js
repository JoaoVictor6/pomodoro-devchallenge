import { useEffect, useState } from 'react';
import useSessionContext from '../../context/SessionContext';
import { StopwatchContainer } from './style';

export default function Stopwatch() {
  const { minutes, isPaused } = useSessionContext();
  const [currentMinutes, setCurrentMinutes] = useState(minutes);
  const [seconds, setSeconds] = useState(0);
  // eslint-disable-next-line consistent-return
  function stopwatch() {
    if (isPaused) {
      return 0;
    }
    if (minutes === 0 && seconds === 0) {
      setSeconds(seconds);
      return setCurrentMinutes(currentMinutes);
    }
    if (seconds === 0 && currentMinutes !== 0) {
      setCurrentMinutes(currentMinutes - 1);
      return setSeconds(59);
    }

    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(stopwatch, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, isPaused]);

  return (
    <StopwatchContainer>
      <div>
        {currentMinutes.toString().length === 1 ? `0${currentMinutes}` : currentMinutes}
        :
        {seconds.toString().length === 1 ? `0${seconds}` : seconds}
      </div>
    </StopwatchContainer>
  );
}
