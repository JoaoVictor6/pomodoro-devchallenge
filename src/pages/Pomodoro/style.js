import styled from 'styled-components';

export const PomodoroContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  nav {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    h1 {
      font-size: 3rem;
    }
  }

  main {
    margin: 4rem auto;
    width: 60%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 414px){
    nav {
      justify-content: center;
      margin-top: .5rem;
      flex-direction: column;
    }

    main {
      flex-direction: column;
    }

    aside {
      margin-left: 0;
    }
  }

`;
