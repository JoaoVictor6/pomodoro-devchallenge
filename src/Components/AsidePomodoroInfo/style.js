import styled from 'styled-components';

export const Aside = styled.aside`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2 {
    font-size: 3rem;
    font-weight: 600;
    color: #219653;
  }

  .come-down {
    color: #BEA24E;
  }

  button {
    padding: 1rem 1.5rem;
  }
`;

export const SessionsDiv = styled.div`
  display: flex;
  gap: 8px;
  margin: .8rem 0 1.7rem;
  div {
    background: #3C4262;

    border-radius: 100%;
    height: 1.2rem;
    width: 1.2rem;

  }
  .active {
    background: ${(props) => (props.pause ? '#F2C94C' : '#219553')};
  }
`;
