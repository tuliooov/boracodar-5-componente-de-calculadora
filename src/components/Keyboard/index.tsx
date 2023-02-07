import { Button } from '../Button'
import { Actions, Numbers, Root } from './index.style'

export const Keyboard = () => {
  return (
    <Root>
      <Numbers>
        <Button label="CE" />
        <Button label="C" />
        <Button label="%" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+/-" />
        <Button label="0" />
        <Button label="," />
      </Numbers>
      <Actions>
        <Button label="/" />
        <Button label="x" />
        <Button label="-" />
        <Button label="+" />
        <Button label="=" />
      </Actions>
    </Root>
  )
}
