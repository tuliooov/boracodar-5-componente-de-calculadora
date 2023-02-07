import { Keyboard } from '../Keyboard'
import { Viewfinder } from '../Viewfinder'
import { Root } from './index.style'

export const Calculator = () => {
  return (
    <Root>
      <Viewfinder />
      <Keyboard />
    </Root>
  )
}
