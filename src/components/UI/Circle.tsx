import tw, { styled } from 'twin.macro'

type CircleProps = {
  children?: React.ReactNode
  size?: number
  withPointer?: boolean
}

const StyledCircle = styled.div<CircleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  ${(props) =>
    props.withPointer &&
    tw`w-full h-full flex items-center justify-center flex-col z-10 cursor-pointer`}

  ${tw`rounded-full absolute top-0 left-0 border`}
`

export const Circle = ({
  children,
  withPointer = false,
  size = 220,
  ...otherProps
}: CircleProps) => {
  return (
    <div
      tw="relative flex items-center justify-center text-center text-lg"
      style={{
        width: size,
        height: size,
      }}
      {...otherProps}
    >
      <StyledCircle
        tw="border-teal-400 ml-1 mt-1"
        size={size}
        withPointer={withPointer}
      />
      <StyledCircle tw="border-black" size={size} withPointer={withPointer} />
      {children}
    </div>
  )
}
