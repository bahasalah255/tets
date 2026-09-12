import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { slug } = useParams()

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange">Fiche produit</p>
      <h1 className="mt-3 text-3xl font-bold text-charcoal">Produit: {slug}</h1>
    </section>
  )
}