import React, { createContext, ReactNode, useState } from 'react'
import { INumbersKeyBoards, Key, KeyType } from '../components/Keyboard'

export type CalculatorProps = {
  onClickButton: (key: Key, type: KeyType) => () => void
  numbers: INumbersKeyBoards
}

const CalculatorContext = createContext({} as CalculatorProps)

const DEFUALT_NUMBERS = {
  viewfinder: '',
  historicViewFinder: '',
  lastKey: null,
  lastType: null,
  keyValue: '',
  keyType: null,
  result: 0,
}

const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [numbers, setNumbers] = useState<INumbersKeyBoards>(DEFUALT_NUMBERS)

  const onCreateOperation = (keyValue: Key, typeValue: KeyType) => {
    const started = numbers.historicViewFinder.includes(`${KeyType.OPERATOR}`)
    const numbersEdited = started
      ? onCreateEqual(keyValue, typeValue)
      : structuredClone(numbers)
    numbersEdited.lastKey = keyValue
    numbersEdited.lastType = typeValue
    if (numbers.lastKey !== keyValue) {
      if (numbers.lastType === typeValue && started) {
        numbersEdited.viewfinder = numbersEdited.viewfinder.slice(
          0,
          numbersEdited.viewfinder.length - 3,
        )
      }

      numbersEdited.keyType = typeValue
      numbersEdited.keyValue = `${keyValue}`
      numbersEdited.viewfinder = `${
        started ? numbersEdited.result : numbersEdited.viewfinder
      } ${keyValue} `
    }
    return numbersEdited
  }

  const onCreateNumber = (keyValue: Key, typeValue: KeyType) => {
    const numbersEdited = structuredClone(numbers)
    numbersEdited.lastKey = keyValue
    numbersEdited.lastType = typeValue
    numbersEdited.keyType = typeValue
    switch (numbers.keyType) {
      case KeyType.EQUAL:
        numbersEdited.keyValue = `${keyValue}`
        numbersEdited.viewfinder = `${keyValue}`
        numbersEdited.result = 0
        break
      default:
        numbersEdited.keyValue += `${keyValue}`
        numbersEdited.viewfinder += `${keyValue}`
        break
    }
    return numbersEdited
  }

  const onCreateComma = (keyValue: Key, typeValue: KeyType) => {
    const started = numbers.historicViewFinder.includes(`${KeyType.OPERATOR}`)

    const numbersEdited = structuredClone(numbers)
    numbersEdited.lastKey = keyValue
    numbersEdited.lastType = typeValue
    numbersEdited.keyType = typeValue
    numbersEdited.keyValue += `${keyValue}`

    const { splited } = splitViewFinder(numbersEdited.viewfinder)
    const verifyDigits = started ? splited[2] : splited[0]
    console.log(
      '🚀 ~ file: context.tsx:78 ~ onCreateComma ~ verifyDigits',
      verifyDigits,
    )

    if (verifyDigits.length && !verifyDigits.includes(',')) {
      numbersEdited.viewfinder += `${keyValue}`
    }

    return numbersEdited
  }

  const replaceAndParseFloat = (value: string) => {
    const replaced = value !== undefined ? value.replace(',', '.') : value
    return parseFloat(replaced)
  }

  const splitViewFinder = (viewfinder: string) => {
    const splited = viewfinder.split(' ')
    const firstNumber = replaceAndParseFloat(splited[0])
    const operator = splited[1] as Key
    const secondNumber = replaceAndParseFloat(splited[2])
    return {
      firstNumber,
      operator,
      secondNumber,
      splited,
    }
  }

  const onCreateEqual = (keyValue: Key, typeValue: KeyType) => {
    const numbersEdited = structuredClone(numbers)
    numbersEdited.lastKey = keyValue
    numbersEdited.lastType = typeValue
    if (numbers.keyType === KeyType.NUMBER) {
      numbersEdited.keyType = typeValue
      const { firstNumber, operator, secondNumber } = splitViewFinder(
        numbersEdited.viewfinder,
      )

      let endResult = numbersEdited.result

      switch (operator) {
        case Key.SUM:
          endResult = firstNumber + secondNumber
          break
        case Key.MENUS:
          endResult = firstNumber - secondNumber
          break
        case Key.MULTIPLE:
          endResult = firstNumber * secondNumber
          break
        case Key.DIVISION:
          endResult = firstNumber / secondNumber
          break
        case Key.PERCENTAGE:
          endResult = secondNumber * (firstNumber / 100)
          break
        default:
          endResult = firstNumber
          break
      }

      numbersEdited.result = isNaN(endResult) ? 0 : endResult

      return numbersEdited
    } else if (keyValue === Key.POSITIVE_NEGATIVE) {
      numbersEdited.result *= -1
    }

    return numbersEdited
  }

  const onClickButton = (keyValue: Key, typeValue: KeyType) => () => {
    let numbersEdited = { ...numbers }

    switch (typeValue) {
      case KeyType.NUMBER:
        numbersEdited = onCreateNumber(keyValue, typeValue)
        break
      case KeyType.OPERATOR:
        numbersEdited = onCreateOperation(keyValue, typeValue)
        break
      case KeyType.EQUAL:
        numbersEdited = onCreateEqual(keyValue, typeValue)
        break
      case KeyType.CLEAR:
        if (
          keyValue === Key.CLEAR_ELEMENT &&
          numbersEdited.lastType === KeyType.NUMBER
        ) {
          const { splited } = splitViewFinder(numbersEdited.viewfinder)
          const onlyFirstNumber =
            splited[2] === undefined || splited[1] === undefined

          if (onlyFirstNumber) {
            numbersEdited = DEFUALT_NUMBERS
          } else {
            numbersEdited.viewfinder = `${splited[0]} ${splited[1]} `
          }
        } else {
          numbersEdited = DEFUALT_NUMBERS
        }

        break
      case KeyType.COMMA:
        numbersEdited = onCreateComma(keyValue, typeValue)
        break
      default:
        break
    }

    numbersEdited.historicViewFinder += `${typeValue}`
    setNumbers(numbersEdited)
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
