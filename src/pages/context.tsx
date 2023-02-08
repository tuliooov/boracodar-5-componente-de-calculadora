import React, { createContext, ReactNode, useState } from 'react'
import { INumbersKeyBoards, Key, KeyType } from '../components/Keyboard'

export type CalculatorProps = {
  onClickButton: (key: Key, type: KeyType) => () => void
  numbers: INumbersKeyBoards
}

const CalculatorContext = createContext({} as CalculatorProps)

const DEFUALT_NUMBERS = {
  viewfinder: '',
  numberDigited: '',
  first: 0,
  result: 0,
  action: null,
}

const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [numbers, setNumbers] = useState<INumbersKeyBoards>(DEFUALT_NUMBERS)

  const onCreateOperation = (keyValue: Key) => {
    const newNumber = {
      ...numbers,
      viewfinder: `${numbers.viewfinder} ${keyValue} `,
      numberDigited: ``,
      action: keyValue,
    }
    if (numbers.numberDigited) {
      switch (keyValue) {
        case Key.SUM:
          newNumber.first = parseInt(numbers.numberDigited)
          newNumber.result = numbers.result + parseInt(numbers.numberDigited)
          break
        case Key.MENUS:
          newNumber.first = parseInt(numbers.numberDigited)
          if (numbers.first) {
            newNumber.result = numbers.result - parseInt(numbers.numberDigited)
          }
          break

        default:
          break
      }
    }

    return newNumber
  }

  const onClickButton = (keyValue: Key, typeValue: KeyType) => () => {
    switch (typeValue) {
      case KeyType.NUMBER:
        setNumbers({
          ...numbers,
          viewfinder: `${numbers.viewfinder}${keyValue}`,
          numberDigited: `${numbers.numberDigited}${keyValue}`,
        })
        break
      case KeyType.OPERATOR:
        // eslint-disable-next-line no-case-declarations

        setNumbers(onCreateOperation(keyValue))
        break
      case KeyType.EQUAL:
        if (numbers.numberDigited) {
          setNumbers({
            ...numbers,
            numberDigited: ``,
            first: parseInt(numbers.numberDigited),
            result: numbers.result + parseInt(numbers.numberDigited),
            action: keyValue,
          })
        }

        break
      case KeyType.CLEAR:
        setNumbers(DEFUALT_NUMBERS)
        break

      default:
        break
    }
  }

  return (
    <CalculatorContext.Provider
      value={{ onClickButton, numbers } || ({} as CalculatorProps)}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

const useCalculatorContext = () => {
  const context = React.useContext(CalculatorContext)
  if (!context) {
    throw new Error('useKeyboardContext must be used within a KeyboardProvider')
  }
  return context
}

export { CalculatorProvider, useCalculatorContext }
