import { ButtonHTMLAttributes } from 'react'
import { useCalculatorContext } from '../../pages/context'
import { Key, KeyType } from '../Keyboard'
import { Root } from './index.style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: Key
  keyType: KeyType
}

export const Button = ({ label, keyType, ...rest }: ButtonProps) => {
  const { onClickButton } = useCalculatorContext()
  return (
    <Root onClick={onClickButton(label, keyType)} {...rest}>
      {label}
    </Root>
  )
}
