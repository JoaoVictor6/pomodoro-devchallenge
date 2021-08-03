import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Components/Button';
import {
  Container, RangeBox, InputBox, ButtonDiv, InputValueBox, InputValue,
} from './style';

export default function Home() {
  const [minutes, setMinutes] = useState(0);
  const [pauseMinutes, setPauseMinutes] = useState(0);
  const [sessions, setSessions] = useState(0);

  function handleClickUpArrowMinute() {
    if (minutes === 60) {
      setMinutes(0);
      return;
    }
    setMinutes(minutes + 1);
  }

  function handleClickDownArrowMinute() {
    if (minutes === 0) {
      setMinutes(60);
      return;
    }
    setMinutes(minutes - 1);
  }

  function handleClickUpArrowPauseMinutes() {
    if (pauseMinutes === 15) {
      setPauseMinutes(0);
      return;
    }
    setPauseMinutes(pauseMinutes + 1);
  }

  function handleClickDownArrowPauseMinutes() {
    if (pauseMinutes === 0) {
      setPauseMinutes(15);
      return;
    }
    setPauseMinutes(pauseMinutes - 1);
  }

  function handleClickUpArrowSessions() {
    if (sessions === 5) {
      setSessions(0);
      return;
    }
    setSessions(sessions + 1);
  }

  function handleClickDownArrowSessions() {
    if (sessions === 0) {
      setSessions(5);
      return;
    }
    setSessions(sessions - 1);
  }

  return (
    <Container>
      <h1>Pomodoro</h1>

      <main>
        <RangeBox>
          <InputBox>
            <ButtonDiv>
              <button type="button" onClick={handleClickUpArrowMinute}>
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <button type="button" onClick={handleClickDownArrowMinute}>
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </ButtonDiv>
            <InputValueBox>
              <InputValue>{minutes}</InputValue>
              <h2>Tempo</h2>
            </InputValueBox>
          </InputBox>

          <InputBox>
            <ButtonDiv>
              <button type="button" onClick={handleClickUpArrowPauseMinutes}>
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <button type="button" onClick={handleClickDownArrowPauseMinutes}>
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </ButtonDiv>
            <InputValueBox>
              <InputValue>{pauseMinutes}</InputValue>
              <h2>Pausa</h2>
            </InputValueBox>
          </InputBox>

          <InputBox>
            <ButtonDiv>
              <button type="button" onClick={handleClickUpArrowSessions}>
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <button type="button" onClick={handleClickDownArrowSessions}>
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </ButtonDiv>
            <InputValueBox>
              <InputValue>{sessions}</InputValue>
              <h2>Sessões</h2>
            </InputValueBox>
          </InputBox>
        </RangeBox>
      </main>
      <Button>
        Continuar
      </Button>
    </Container>
  );
}
