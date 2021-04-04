import tw, { css } from 'twin.macro'
import {
  FieldErrors,
  FieldError,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form'
import { ErrorMessage } from './ErrorMessage'
import { Label } from './Label'

export const baseStyles = css`
  ${tw`bg-white shadow-sm block w-full p-3 border text-sm leading-6`}
  ${tw`rounded-md border-gray-300 focus:outline-none focus:ring-2`}
  ${tw`focus:border-blue-400 focus:ring-blue-400`}
`

export const errorStyles = tw`text-red-600 border-red-500 focus:border-red-500 focus:ring-red-500`

type TInputProps = {
  name: string
  label?: string
  value?: string
  type?: string
  className?: string
  placeholder?: string
  error?: FieldErrors | FieldError
  validations?: RegisterOptions
  isTextArea?: boolean
}

export const Input = ({
  name,
  className = '',
  type = 'text',
  placeholder,
  label,
  validations = {},
  isTextArea = false,
  error,
  ...otherProps
}: TInputProps) => {
  const { register } = useFormContext()
  const InputElement = isTextArea ? 'textarea' : 'input'

  return (
    <Label htmlFor={name} description={label} tw="block w-full">
      <InputElement
        {...otherProps}
        ref={register({ ...validations, valueAsNumber: type === 'number' })}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        rows={3}
        css={[baseStyles, !!error && errorStyles]}
        className={className}
      />
      {Boolean(validations) && <ErrorMessage>{error?.message}</ErrorMessage>}
    </Label>
  )
}
