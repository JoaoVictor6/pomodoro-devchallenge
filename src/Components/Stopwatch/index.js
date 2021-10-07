import { useEffect, useState } from 'react';
import useSessionContext from '../../context/SessionContext';
import { StopwatchContainer, ProgressBar, TimerView } from './style';

export default function Stopwatch() {
  const {
    minutes,
    isPaused,
    pauseMinutes,
    comeDown,
    setComeDown,
    currentSession,
    setCurrentSession,
    sessions,
    setIsPaused,
    seconds,
    setSeconds,
    currentPauseMinutes,
    setCurrentPauseMinutes,
    currentMinutes,
    setCurrentMinutes,
  } = useSessionContext();
  const [timePercent, setTimePercent] = useState(0);
  // eslint-disable-next-line consistent-return
  function stopwatch() {
    if (currentSession === sessions) {
      setIsPaused(true);
      return 0;
    }
    if (comeDown) {
      if (isPaused) {
        return 0;
      }
      if (currentPauseMinutes === 0 && seconds === 0) {
        setCurrentSession(currentSession + 1);
        setCurrentPauseMinutes(pauseMinutes);
        return setComeDown(false);
      }
      if (seconds === 0 && currentPauseMinutes !== 0) {
        setCurrentPauseMinutes(currentPauseMinutes - 1);
        return setSeconds(59);
      }

      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    } else {
      if (isPaused) {
        return 0;
      }
      if (currentMinutes === 0 && seconds === 0) {
        setCurrentMinutes(minutes);
        return setComeDown(true);
      }
      if (seconds === 0 && currentMinutes !== 0) {
        setCurrentMinutes(currentMinutes - 1);
        return setSeconds(59);
      }

      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(stopwatch, 1000);

    if (comeDown) {
      const totalInSeconds = seconds + (currentPauseMinutes * 60);
      setTimePercent(100 - (totalInSeconds * 100) / (pauseMinutes * 60));
    } else {
      const totalInSeconds = seconds + (currentMinutes * 60);
      setTimePercent(100 - (totalInSeconds * 100) / (minutes * 60));
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds, isPaused, comeDown]);
  return (
    <StopwatchContainer>
      <ProgressBar comedown={comeDown} percent={timePercent}>
        <TimerView>
          {
            // eslint-disable-next-line no-nested-ternary
            comeDown
              ? currentPauseMinutes.toString().length === 1 ? `0${currentPauseMinutes}` : currentPauseMinutes
              : currentMinutes.toString().length === 1 ? `0${currentMinutes}` : currentMinutes
          }
          :
          {seconds.toString().length === 1 ? `0${seconds}` : seconds}
        </TimerView>
      </ProgressBar>
    </StopwatchContainer>
  );
}
