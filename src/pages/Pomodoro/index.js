import { Link } from 'react-router-dom';
import AsidePomodoroInfo from '../../Components/AsidePomodoroInfo';
import Button from '../../Components/Button';
import Stopwatch from '../../Components/Stopwatch';
import useSessionContext from '../../context/SessionContext';
import { PomodoroContainer } from './style';

export default function Pomodoro() {
  const { setCurrentSession, setComeDown } = useSessionContext();
  function handleClick() {
    setCurrentSession(0);
    setComeDown(false);
  }
  return (
    <PomodoroContainer>
      <nav>
        <h1>Pomodoro</h1>
        <Button onClick={handleClick}>
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
