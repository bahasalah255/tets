import { useContext } from 'react'
import { QuoteContext } from '../context/quoteContext.js'

export function useQuote() {
	const context = useContext(QuoteContext)

	if (!context) {
		throw new Error('useQuote must be used inside QuoteProvider')
	}

	return context
}