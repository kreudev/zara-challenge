interface IconProps {
  name: 'bag' | 'bag-active' | 'close'
  className?: string
  width?: number
  height?: number
}

export const Icon = ({
  name,
  className,
  width = 24,
  height = 24,
}: IconProps) => {
  return (
    <svg
      aria-label={name}
      height={height}
      width={width}
      className={className}
    >
      <use href={`#${name}-icon`} />
    </svg>
  )
}
