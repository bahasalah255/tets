import PropTypes from 'prop-types'

export default function Input({ className = '', label, ...props }) {
  return (
    <label className="block">
      {label ? <span className="mb-2 block text-sm font-medium text-stone-700">{label}</span> : null}
      <input
        className={[
          'w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20',
          className,
        ].join(' ')}
        {...props}
      />
    </label>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
}