import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { Aside, SessionsDiv } from './style';
import tickingSoundEffect from '../../assets/sounds/clockTicking.wav';
import doneSoundEffect from '../../assets/sounds/done.ogg';
import donePosComeDownSoundEffect from '../../assets/sounds/donePosComeDown.ogg';
import Button from '../Button';
import useSessionContext from '../../context/SessionContext';

export default function AsidePomodoroInfo() {
  const {
    isPaused, setIsPaused, sessions, comeDown, currentSession,
  } = useSessionContext();

  useEffect(() => {
    const soundTicking = new Audio(tickingSoundEffect);
    if (!isPaused) {
      soundTicking.loop = true;
      soundTicking.play();
    }
    return () => {
      soundTicking.pause();
    };
  }, [isPaused]);

  useEffect(() => {
    const soundDone = new Audio(doneSoundEffect);
    const soundDoneComedown = new Audio(donePosComeDownSoundEffect);
    if (comeDown) {
      soundDone.play();
    } else {
      soundDoneComedown.play();
    }
    return () => {
      soundDone.pause();
    };
  }, [comeDown]);

  function handlPauseEvent() {
    setIsPaused(!isPaused);
  }
  const sessionsPossible = [1, 2, 3, 4, 5];
  const session = sessionsPossible.filter((item) => item <= sessions);

  return (
    <Aside>
      {comeDown ? <h2 className="come-down">Pausa</h2> : <h2>Trabalho</h2>}

      <SessionsDiv pause={comeDown}>
        {
          session.map((_, index) => <div className={currentSession >= index ? 'active' : ''} />)
        }
      </SessionsDiv>

      <Button onClick={handlPauseEvent}>
        {isPaused ? <FontAwesomeIcon icon={faPlay} />
          : <FontAwesomeIcon icon={faPause} />}
      </Button>
    </Aside>
  );
}
