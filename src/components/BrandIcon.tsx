type Props = {
  icon: { path: string }
  className?: string
}

/** Renders a simple-icons style glyph (24×24 path) in the current text color. */
export function BrandIcon({ icon, className = 'size-3.5' }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={icon.path} />
    </svg>
  )
}
