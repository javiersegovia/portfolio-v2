import { styled } from 'twin.macro'

type StrokeProps = {
  children: React.ReactNode
  lightColor?: string
  darkColor?: string
}

const StrokeText = styled.span<StrokeProps>`
  text-shadow: -1px -1px 0 ${(props) => props.lightColor},
    1px -1px 0 ${(props) => props.lightColor},
    -1px 1px 0 ${(props) => props.lightColor},
    1px 1px 0 ${(props) => props.lightColor};

  .dark & {
    text-shadow: -1px -1px 0 ${(props) => props.darkColor},
      1px -1px 0 ${(props) => props.darkColor},
      -1px 1px 0 ${(props) => props.darkColor},
      1px 1px 0 ${(props) => props.darkColor};
  }
`

export const Stroke = ({
  children,
  lightColor = '#000',
  darkColor = '#fff',
  ...otherProps
}: StrokeProps) => {
  return (
    <StrokeText lightColor={lightColor} darkColor={darkColor} {...otherProps}>
      {children}
    </StrokeText>
  )
}
