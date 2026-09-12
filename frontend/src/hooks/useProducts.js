import { useEffect, useState } from 'react'
import { getProducts } from '../services/api.js'

export function useProducts(params = {}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    async function fetchProducts() {
      setLoading(true)

      try {
        const response = await getProducts(params)

        if (!ignore) {
          setData(response.data?.data ?? response.data ?? [])
          setError(null)
        }
      } catch (requestError) {
        if (!ignore) {
          setError(requestError)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    fetchProducts()

    return () => {
      ignore = true
    }
  }, [params])

  return { data, loading, error }
}