import PropTypes from 'prop-types'

export default function Badge({ children, className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}