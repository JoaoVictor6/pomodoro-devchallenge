import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import RangeBox from '../../Components/RangeBox';
import {
  Container,
} from './style';

export default function Home() {
  return (
    <Container>
      <h1>Pomodoro</h1>
      <RangeBox />
      <Button>
        <Link to="/pomodoro">
          Continuar
        </Link>
      </Button>
    </Container>
  );
}
