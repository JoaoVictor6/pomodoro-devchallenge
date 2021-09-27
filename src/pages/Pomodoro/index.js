import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AsidePomodoroInfo from '../../Components/AsidePomodoroInfo';
import Button from '../../Components/Button';
import Stopwatch from '../../Components/Stopwatch';
import useSessionContext from '../../context/SessionContext';
import { PomodoroContainer } from './style';

export default function Pomodoro() {
  const {
    setCurrentSession,
    setComeDown,
    comeDown,
    isPaused,
    currentPauseMinutes,
    currentMinutes,
    seconds,
  } = useSessionContext();
  function handleClick() {
    setCurrentSession(0);
    setComeDown(false);
  }
  return (
    <PomodoroContainer>
      {
        comeDown && !isPaused
          ? (
            <Helmet>
              <title>
                {`Pomodoro - ${currentPauseMinutes}:${seconds}`}
              </title>
            </Helmet>
          ) : (
            <Helmet>
              <title>
                {`Pomodoro - ${currentMinutes}:${seconds}`}
              </title>
            </Helmet>
          )
      }
      {
        isPaused ? (
          <Helmet>
            <title>
              Pomodoro - Pausado
            </title>
          </Helmet>
        ) : ''
      }
      <nav>
        <h1>Pomodoro</h1>
        <Button onClick={() => handleClick()}>
          <Link to="/">Início</Link>
        </Button>
      </nav>

      <main>
        <Stopwatch />
        <AsidePomodoroInfo />
      </main>
    </PomodoroContainer>
  );
}
