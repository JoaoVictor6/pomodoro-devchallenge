import PropTypes from 'prop-types';
import { useState, createContext, useContext } from 'react';

const Context = createContext();

export function SessionContext({ children }) {
  const [minutes, setMinutes] = useState(0);
  const [pauseMinutes, setPauseMinutes] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Context.Provider
      value={{
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
  } = context;

  return {
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
