import { Button } from '../Button'
import { Actions, Numbers, Root } from './index.style'

export interface INumbersKeyBoards  {
  viewfinder: string;
  historicViewFinder: string
  lastKey: Key | null
  lastType: KeyType | null
  keyValue: string;
  keyType: KeyType | null;
  result: number;
}

export enum KeyType {
  'NUMBER',
  'OPERATOR',
  'EQUAL',
  'CLEAR',
  'COMMA'
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
  'DIVISION' = '/',
  'MULTIPLE' = 'x',
  'EQUAL' = '=',
  'CLEAR' = 'C',
  'CLEAR_ELEMENT' = 'CE',
  'PERCENTAGE' = '%',
  'POSITIVE_NEGATIVE' = '+-',
  'COMMA' = ',',
}

export const Keyboard = () => {
  return (
    <Root>
      <Numbers>
        <Button label={Key.CLEAR_ELEMENT} keyType={KeyType.CLEAR} />
        <Button label={Key.CLEAR} keyType={KeyType.CLEAR} />
        <Button label={Key.PERCENTAGE} keyType={KeyType.OPERATOR} />
        <Button label={Key.SEVEN} keyType={KeyType.NUMBER} />
        <Button label={Key.EIGHT} keyType={KeyType.NUMBER} />
        <Button label={Key.NINE} keyType={KeyType.NUMBER} />
        <Button label={Key.FOUR} keyType={KeyType.NUMBER} />
        <Button label={Key.FIVE} keyType={KeyType.NUMBER} />
        <Button label={Key.SIX} keyType={KeyType.NUMBER} />
        <Button label={Key.ONE} keyType={KeyType.NUMBER} />
        <Button label={Key.TWO} keyType={KeyType.NUMBER} />
        <Button label={Key.THREE} keyType={KeyType.NUMBER} />
        <Button label={Key.POSITIVE_NEGATIVE} keyType={KeyType.EQUAL} />
        <Button label={Key.ZERO} keyType={KeyType.NUMBER} />
        <Button label={Key.COMMA} keyType={KeyType.COMMA} /> 
      </Numbers>
      <Actions>
        <Button label={Key.DIVISION} keyType={KeyType.OPERATOR} />
        <Button label={Key.MULTIPLE} keyType={KeyType.OPERATOR}  />
        <Button label={Key.MENUS} keyType={KeyType.OPERATOR} />
        <Button label={Key.SUM} keyType={KeyType.OPERATOR} />
        <Button label={Key.EQUAL} keyType={KeyType.EQUAL} />
      </Actions>
    </Root>
  )
}
