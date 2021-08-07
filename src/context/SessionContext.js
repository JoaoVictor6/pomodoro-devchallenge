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

  return (
    <Context.Provider
      value={{
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
  const {
    minutes,
    setMinutes,
    pauseMinutes,
    setPauseMinutes,
    sessions,
    setSessions,
    isPaused,
    setIsPaused,
    currentSession,
    setCurrentSession,
    comeDown,
    setComeDown,
  } = context;

  return {
    comeDown,
    setComeDown,
    currentSession,
    setCurrentSession,
    minutes,
    setMinutes,
    pauseMinutes,
    setPauseMinutes,
    sessions,
    setSessions,
    isPaused,
    setIsPaused,
  };
}
