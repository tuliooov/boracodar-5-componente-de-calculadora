import styled from 'styled-components'

export const Root = styled.button`
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background-color: #27262f;
  box-shadow: 0px 0px 4px 1px #00000040;
  font-size: 1.5rem;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
  :active {
    opacity: 0.4;
  }
`
