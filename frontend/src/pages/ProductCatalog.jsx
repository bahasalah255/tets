import ProductFilters from '../components/product/ProductFilters.jsx'

export default function ProductCatalog() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[320px_1fr] lg:px-8">
      <ProductFilters />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange">Produits</p>
        <h1 className="mt-3 text-3xl font-bold text-charcoal">Catalogue avec filtres</h1>
      </div>
    </section>
  )
}