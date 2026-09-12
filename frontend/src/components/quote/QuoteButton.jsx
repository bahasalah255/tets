import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useQuote } from '../../hooks/useQuote.js'

export default function QuoteButton({ className = '' }) {
  const { quoteCount } = useQuote()

  return (
    <Link
      to="/devis"
      className={[
        'inline-flex items-center gap-3 rounded-md bg-[#F5711B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600',
        className,
      ].join(' ')}
    >
      <span>Ma demande de devis</span>
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white/15 px-2 text-xs font-bold">
        {quoteCount}
      </span>
    </Link>
  )
}

QuoteButton.propTypes = {
  className: PropTypes.string,
}