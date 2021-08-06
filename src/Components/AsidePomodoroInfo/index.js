import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { Aside, SessionsDiv } from './style';
import Button from '../Button';
import useSessionContext from '../../context/SessionContext';

export default function AsidePomodoroInfo() {
  const { isPaused, setIsPaused } = useSessionContext();
  function handlPauseEvent() {
    setIsPaused(!isPaused);
  }
  return (
    <Aside>
      <h2>Trabalho</h2>

      <SessionsDiv>
        <div className="active" />
        <div />
        <div />
        <div />
        <div />
      </SessionsDiv>

      <Button onClick={handlPauseEvent}>
        {isPaused ? <FontAwesomeIcon icon={faPlay} />
          : <FontAwesomeIcon icon={faPause} />}
      </Button>
    </Aside>
  );
}
