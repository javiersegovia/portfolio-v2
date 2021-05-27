import { ButtonHTMLAttributes } from 'react'
import { Spinner } from '@components/SVG/Spinner'
import { HiCheck } from 'react-icons/hi'
import _tw from 'twin.macro'

type TButtonSizes = 'XS' | 'SM' | 'MD' | 'LG' | 'XL'
type TButtonVariants = 'PRIMARY' | 'SUCCESS'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  showCheckOnSuccess?: boolean
  size?: TButtonSizes
  variant?: TButtonVariants
  isFab?: boolean
}

export const Button = ({
  type = 'button',
  size = 'MD',
  variant = 'PRIMARY',
  disabled = false,
  children,
  isLoading = false,
  isFab = false,
  showCheckOnSuccess = false,
  ...otherProps
}: IButtonProps) => {
  const isPrimary = variant === 'PRIMARY'
  const isSuccess = variant === 'SUCCESS'

  return (
    <button
      // Disabled the rule for this line because is not working properly here
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      css={[
        _tw`w-full flex justify-center rounded-md font-medium transition duration-100 text-center font-mono`,

        size === 'MD' && _tw`py-3`,
        size === 'SM' && _tw`py-2`,

        isFab && _tw`p-0 rounded-full w-auto`,

        disabled && _tw`opacity-40 cursor-not-allowed`,

        isPrimary && _tw`transform active:scale-95 bg-primary-400 text-white`,

        isSuccess && _tw`transform active:scale-95 bg-green-400 text-white`,
        isSuccess && !disabled && _tw`hover:bg-green-600`,
        isSuccess && disabled && _tw`opacity-100`,
      ]}
      {...otherProps}
    >
      {isLoading ? (
        <Spinner />
      ) : showCheckOnSuccess && isSuccess ? (
        <HiCheck tw="text-2xl" />
      ) : (
        <>{children}</>
      )}
    </button>
  )
}

export default Button
