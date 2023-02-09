import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`

export const OpenCalculator = styled.button`
  all: unset;
  background-color: #605b89;
  font-size: 18px;
  padding: 1em 2em;
  border-radius: 8px;
  transition: background-color 0.2s;
  cursor: pointer;
  width: fit-content;
  :hover {
    background-color: #49456b;
  }
`

export const Texts = styled.div`
  h1 {
    color: var(--foreground-rgb);
    font-size: 42px;
  }
  h1 strong {
    color: var(--primary100);
  }

  p {
    color: var(--foreground-rgb);
    font-size: 18px;
  }

  p strong {
    color: var(--primary100);
  }
`

export const TextsContainer = styled.div`
  color: var(--foreground-rgb);
  font-size: 24px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  footer {
    position: fixed;
    bottom: 2rem;
    font-size: 16px;
  }

  footer a {
    text-decoration: none;
    color: var(--primary100);
  }
`
