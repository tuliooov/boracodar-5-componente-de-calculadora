import { Root } from './index.style'

interface ButtonProps {
  label: string
}

export const Button = ({ label }: ButtonProps) => {
  return <Root>{label}</Root>
}
