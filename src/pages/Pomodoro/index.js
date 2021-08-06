import { Link } from 'react-router-dom';
import AsidePomodoroInfo from '../../Components/AsidePomodoroInfo';
import Button from '../../Components/Button';
import Stopwatch from '../../Components/Stopwatch';
import { PomodoroContainer } from './style';

export default function Pomodoro() {
  return (
    <PomodoroContainer>
      <nav>
        <h1>Pomodoro</h1>
        <Button>
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
