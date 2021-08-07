import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import useSessionContext from '../../context/SessionContext';
import {
  RangeBoxElement, InputBox, ButtonDiv, InputValueBox, InputValue, Main,
} from './style';

export default function RangeBox() {
  const {
    minutes,
    setMinutes,
    pauseMinutes,
    setPauseMinutes,
    sessions,
    setSessions,
  } = useSessionContext();

  function handleClickUpArrowMinute() {
    if (minutes === 60) {
      setMinutes(1);
      return;
    }
    setMinutes(minutes + 1);
  }

  function handleClickDownArrowMinute() {
    if (minutes === 1) {
      setMinutes(60);
      return;
    }
    setMinutes(minutes - 1);
  }

  function handleClickUpArrowPauseMinutes() {
    if (pauseMinutes === 15) {
      setPauseMinutes(1);
      return;
    }
    setPauseMinutes(pauseMinutes + 1);
  }

  function handleClickDownArrowPauseMinutes() {
    if (pauseMinutes === 1) {
      setPauseMinutes(15);
      return;
    }
    setPauseMinutes(pauseMinutes - 1);
  }

  function handleClickUpArrowSessions() {
    if (sessions === 5) {
      setSessions(1);
      return;
    }
    setSessions(sessions + 1);
  }

  function handleClickDownArrowSessions() {
    if (sessions === 1) {
      setSessions(5);
      return;
    }
    setSessions(sessions - 1);
  }

  return (
    <Main>
      <RangeBoxElement>
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
      </RangeBoxElement>
    </Main>
  );
}
