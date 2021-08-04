import { useState, createContext, useContext } from 'react';

const Context = createContext();

export function SessionContext({ children }) {
  const [minutes, setMinutes] = useState(0);
  const [pauseMinutes, setPauseMinutes] = useState(0);
  const [sessions, setSessions] = useState(0);

  return (
    <Context.Provider
      value={{
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

export default function useSessionContext() {
  const context = useContext(Context);
  const {
    minutes,
    setMinutes,
    pauseMinutes,
    setPauseMinutes,
    sessions,
    setSessions,
  } = context;

  return {
    minutes,
    setMinutes,
    pauseMinutes,
    setPauseMinutes,
    sessions,
    setSessions,
  };
}
