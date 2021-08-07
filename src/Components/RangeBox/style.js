import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RangeBoxElement = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  @media (max-width: 414px){
    max-width: 100vw;
    overflow-x: auto;
    margin: 2rem 0 2rem 0;
  }
`;

export const InputValueBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
      font-size: 1.5rem;
      margin-top: .5rem;
    }
`;

export const InputValue = styled.div`  
  font-weight: 700;
  font-size: 4rem;
  padding: .5rem 2.4rem;
  background: #3C4262;
  border-radius: 5px;
  
  cursor: pointer;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);

  &:hover{
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 414px){
    gap: .5rem;
  }
`;

export const ButtonDiv = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    border-radius: 50%;
    background: #9C9FAC;
    border-style: none;
    
    cursor: pointer;
    svg {
      font-size: 1rem;
    }

    svg path {
      fill: #333853;
    }
  }
`;
