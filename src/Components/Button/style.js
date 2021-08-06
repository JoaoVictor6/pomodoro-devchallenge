import styled from 'styled-components';

export const ButtonElement = styled.button`
  border-style: none;
  background: #3C4262;
  font-weight: 700;
  font-size: 2rem;
  border-radius: 5px;
  padding: .5rem 2.5rem;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);

  a {
    text-decoration: none;
  }

  &:hover{
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
  }
  cursor: pointer;
`;
