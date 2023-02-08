import { Button } from '../Button'
import { Actions, Numbers, Root } from './index.style'

export interface INumbersKeyBoards {
  viewfinder: string
  numberDigited: string | null
  first: number
  result: number
  action: Key | null
}

export enum KeyType {
  'NUMBER',
  'OPERATOR',
  'EQUAL',
  'CLEAR'
}

export enum Key {
  'ZERO' = 0,
  'ONE' = 1,
  'TWO' = 2,
  'THREE' = 3,
  'FOUR' = 4,
  'FIVE' = 5,
  'SIX' = 6,
  'SEVEN' = 7,
  'EIGHT' = 8,
  'NINE' = 9,
  'SUM' = '+',
  'MENUS' = '-',
  'EQUAL' = '=',
  'CLEAR' = 'C',
}

export const Keyboard = () => {
  return (
    <Root>
      <Numbers>
        <Button label="CE" disabled />
        <Button label={Key.CLEAR} keyType={KeyType.CLEAR} />
        <Button label="%" disabled />
        <Button label={Key.SEVEN} keyType={KeyType.NUMBER} />
        <Button label={Key.EIGHT} keyType={KeyType.NUMBER} />
        <Button label={Key.NINE} keyType={KeyType.NUMBER} />
        <Button label={Key.FOUR} keyType={KeyType.NUMBER} />
        <Button label={Key.FIVE} keyType={KeyType.NUMBER} />
        <Button label={Key.SIX} keyType={KeyType.NUMBER} />
        <Button label={Key.ONE} keyType={KeyType.NUMBER} />
        <Button label={Key.TWO} keyType={KeyType.NUMBER} />
        <Button label={Key.THREE} keyType={KeyType.NUMBER} />
        <Button label="+/-" disabled />
        <Button label={Key.ZERO} keyType={KeyType.NUMBER} />
        <Button label="," disabled /> 
      </Numbers>
      <Actions>
        <Button label="/" disabled />
        <Button label="x" disabled />
        <Button label={Key.MENUS} keyType={KeyType.OPERATOR} />
        <Button label={Key.SUM} keyType={KeyType.OPERATOR} />
        <Button label={Key.EQUAL} keyType={KeyType.EQUAL} />
      </Actions>
    </Root>
  )
}
