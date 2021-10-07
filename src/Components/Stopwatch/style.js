import styled, { css } from 'styled-components';

export const StopwatchContainer = styled.div`
  width: 18rem;
  height: 18rem;
  border-radius: 100%;
  background: #3C4262;
  box-shadow: 0 0 10px 0 #3C4262;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    border-radius: 100%;
  }

`;
export const TimerView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 700;
  width: 15rem;
  height: 15rem;
  background: #3C4262;
  border-radius: 100%;
  transition: all .2s;
`;

export const ProgressBar = styled.div`
  width: 16rem;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  ${(props) => {
    if (props.comedown) {
      return css`
        background: conic-gradient(#F2C94C 0% ${props.percent}%, #3C4262 ${props.percent}% 100%);
      `;
    }
    return css`
      background: conic-gradient(#219653 0% ${props.percent}%, #3C4262 ${props.percent}% 100%);
    `;
  }}
`;
