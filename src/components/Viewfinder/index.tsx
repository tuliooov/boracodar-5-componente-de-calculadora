import {
  Calculation,
  Equals,
  Result,
  ResultContainer,
  Root,
} from './index.style'

export const Viewfinder = () => {
  return (
    <Root>
      <Calculation>1 + 1</Calculation>
      <ResultContainer>
        <Equals>=</Equals>
        <Result>2</Result>
      </ResultContainer>
    </Root>
  )
}
