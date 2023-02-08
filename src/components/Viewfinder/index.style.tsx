import styled from 'styled-components'

export const Root = styled.div`
  color: var(--foreground-rgb);
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.5rem;
  height: 86px;
  width: 288px;
  padding: 0 1.3rem 0 1rem;
`

export const Calculation = styled.p`
  font-size: 20px;
  text-align: end;
  opacity: 0.3;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Result = styled.p`
  font-size: 2.25rem;
`

export const Equals = styled.p`
  font-size: 1.3rem;
  opacity: 0.3;
`
