import { useCalculatorContext } from '@/pages/context'
import {
  Calculation,
  Equals,
  Result,
  ResultContainer,
  Root,
} from './index.style'

export const Viewfinder = () => {
  const { numbers } = useCalculatorContext()
  return (
    <Root>
      <Calculation>{numbers.viewfinder}</Calculation>
      <ResultContainer>
        <Equals>=</Equals>
        <Result>{numbers.result}</Result>
      </ResultContainer>
    </Root>
  )
}
