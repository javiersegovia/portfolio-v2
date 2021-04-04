import tw, { styled } from 'twin.macro'
import { SerializedStyles } from '@emotion/utils'

type CircleProps = {
  children?: React.ReactNode
  size?: number
  withPointer?: boolean
  circleCss?: SerializedStyles
}

const StyledCircle = styled.div<CircleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  ${(props) =>
    props.withPointer &&
    tw`w-full h-full flex items-center justify-center flex-col z-10 cursor-pointer`}

  ${tw`rounded-full top-0 left-0 border`}
`

export const Circle = ({
  children,
  withPointer = false,
  size = 220,
  circleCss,
  ...otherProps
}: CircleProps) => {
  return (
    <div tw="relative flex items-center justify-center text-center text-lg">
      <StyledCircle
        tw="border-teal-400 absolute ml-1 mt-1"
        size={size}
        withPointer={withPointer}
        css={circleCss}
      />
      <StyledCircle
        tw="border-black flex flex-col"
        size={size}
        withPointer={withPointer}
        css={circleCss}
        {...otherProps}
      >
        {children}
      </StyledCircle>
    </div>
  )
}
