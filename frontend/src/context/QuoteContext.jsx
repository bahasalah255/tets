import PropTypes from 'prop-types'
import { useCallback, useMemo, useState } from 'react'
import { QuoteContext } from './quoteContext.js'

function getProductKey(product) {
  return product?.id ?? product?.slug ?? product?.sku ?? null
}

export function QuoteProvider({ children }) {
  const [items, setItems] = useState([])

  const addProduct = useCallback((product) => {
    const key = getProductKey(product)

    if (!key) {
      return
    }

    setItems((currentItems) => {
      if (currentItems.some((item) => getProductKey(item) === key)) {
        return currentItems
      }

      return [...currentItems, product]
    })
  }, [])

  const removeProduct = useCallback((productKey) => {
    setItems((currentItems) =>
      currentItems.filter((item) => getProductKey(item) !== productKey),
    )
  }, [])

  const clearQuote = useCallback(() => {
    setItems([])
  }, [])

  const hasProduct = useCallback(
    (productKey) => items.some((item) => getProductKey(item) === productKey),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      quoteCount: items.length,
      addProduct,
      removeProduct,
      clearQuote,
      hasProduct,
    }),
    [items, addProduct, removeProduct, clearQuote, hasProduct],
  )

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

QuoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
}