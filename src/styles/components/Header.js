import styled from 'styled-components';

export const MainHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #4169e1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 40rem;
  z-index: 2;

  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
  }

  nav > a {
    text-decoration: none;
    font-weight: bolder;
    color: #f2f2f2;
  }

  nav > a:hover {
    text-decoration: underline;
    text-decoration-color: #ddd;
  }

  .song {
    font-weight: bolder;
    color: #f2f2f2;
    text-decoration: none;
  }

  .digital_india {
    width: 80px;
    height: 80px;
    justify-cotent: center;
    align-items: center;
    margin-right: 60px;
  }

  .flag-container {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  .ashok_chakra {
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 30px;
    
  }

  @media (max-width: 400px) {
    height: 8%;

    nav,
    h3 {
      padding: 1rem;
    }
  }
`;
