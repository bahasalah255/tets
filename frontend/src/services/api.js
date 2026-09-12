import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export function getProducts(params = {}) {
  return api.get('/products', { params })
}

export function getProductBySlug(slug) {
  return api.get(`/products/${encodeURIComponent(slug)}`)
}

export function getCategories() {
  return api.get('/categories')
}

export function submitQuoteRequest(payload) {
  return api.post('/quote-requests', payload)
}

export function getRealisations(params = {}) {
  return api.get('/realisations', { params })
}