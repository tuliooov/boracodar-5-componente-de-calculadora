import styled from 'styled-components'

export const Root = styled.div`
  height: 368px;
  width: 292px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 0.85rem;
`

export const Numbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 0.85rem;
  column-gap: 0.85rem;
`

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.85rem;
  column-gap: 0.85rem;
`
