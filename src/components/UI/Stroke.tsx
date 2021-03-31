import { styled } from 'twin.macro'

type StrokeProps = {
  children: React.ReactNode
  strokeColor?: string
}

const StrokeText = styled.span<StrokeProps>`
  text-shadow: -1px -1px 0 ${(props) => props.strokeColor},
    1px -1px 0 ${(props) => props.strokeColor},
    -1px 1px 0 ${(props) => props.strokeColor},
    1px 1px 0 ${(props) => props.strokeColor};
`

export const Stroke = ({
  children,
  strokeColor = '#000',
  ...otherProps
}: StrokeProps) => {
  return (
    <StrokeText strokeColor={strokeColor} {...otherProps}>
      {children}
    </StrokeText>
  )
}
