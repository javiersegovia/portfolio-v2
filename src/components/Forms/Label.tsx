interface ILabelProps {
  htmlFor: string
  description?: string
  children?: React.ReactNode
}

export const Label = ({ htmlFor = '', description, children }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} tw="block">
      {description && (
        <span tw="block mb-1 text-sm font-medium font-mono">{description}</span>
      )}
      {children}
    </label>
  )
}
