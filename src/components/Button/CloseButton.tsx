import { RiCloseFill } from 'react-icons/ri'
import tw from 'twin.macro'

type CloseButtonSizes = 'base' | 'lg' | 'xl' | 'xxl'

interface CloseButtonProps {
  onClick?: () => void
  size?: CloseButtonSizes
}

const getSizeStyles = (size?: CloseButtonSizes) => {
  switch (size) {
    case 'xxl':
      return tw`text-7xl`

    case 'xl':
      return tw`text-5xl`

    case 'lg':
      return tw`text-3xl`

    default:
      return tw`text-xl`
  }
}

export const CloseButton = ({
  onClick = () => {},
  size = 'base',
  ...buttonProps
}: CloseButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      tw="absolute top-5 right-5 text-gray-400 hover:text-red-500"
      css={[getSizeStyles(size)]}
      {...buttonProps}
    >
      <RiCloseFill />
    </button>
  )
}
