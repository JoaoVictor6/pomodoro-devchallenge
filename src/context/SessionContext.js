import PropTypes from 'prop-types';
import { useState, createContext, useContext } from 'react';

const Context = createContext();

export function SessionContext({ children }) {
  const [minutes, setMinutes] = useState(25);
  const [currentSession, setCurrentSession] = useState(0);
  const [pauseMinutes, setPauseMinutes] = useState(5);
  const [comeDown, setComeDown] = useState(false);
  const [sessions, setSessions] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPauseMinutes, setCurrentPauseMinutes] = useState(pauseMinutes);
  const [currentMinutes, setCurrentMinutes] = useState(minutes);
  const [seconds, setSeconds] = useState(0);

  return (
    <Context.Provider
      value={{
        seconds,
        setSeconds,
        comeDown,
        setComeDown,
        currentSession,
        setCurrentSession,
        isPaused,
        setIsPaused,
        minutes,
        setMinutes,
        pauseMinutes,
        setPauseMinutes,
        sessions,
        setSessions,
        currentPauseMinutes,
        setCurrentPauseMinutes,
        currentMinutes,
        setCurrentMinutes,
      }}
    >
      {children}
    </Context.Provider>
  );
}

SessionContext.prototype = {
  children: PropTypes.element,
};

export default function useSessionContext() {
  const context = useContext(Context);

  return {
    ...context,
  };
}
