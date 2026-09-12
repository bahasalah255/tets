import PropTypes from 'prop-types'

const variants = {
  primary: 'bg-orange text-white hover:bg-orange-600',
  secondary: 'bg-charcoal text-white hover:bg-black',
  ghost: 'bg-transparent text-charcoal hover:bg-stone-100',
}

export default function Button({ as: Component = 'button', variant = 'primary', className = '', ...props }) {
  return (
    <Component
      className={[
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    />
  )
}

Button.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
}