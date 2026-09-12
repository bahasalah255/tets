import QuoteForm from '../components/quote/QuoteForm.jsx'
import { useQuote } from '../hooks/useQuote.js'

export default function QuoteRequest() {
  const { items, removeProduct, clearQuote } = useQuote()

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange">Demande de devis</p>
        <h1 className="mt-3 text-3xl font-bold text-charcoal">Produits sélectionnés</h1>
        <div className="mt-6 space-y-3">
          {items.length ? (
            items.map((item) => (
              <div key={item.id ?? item.slug} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-4 py-3">
                <span className="text-sm font-medium text-charcoal">{item.name}</span>
                <button type="button" onClick={() => removeProduct(item.id ?? item.slug)} className="text-sm font-semibold text-orange">
                  Retirer
                </button>
              </div>
            ))
          ) : (
            <p className="rounded-2xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
              Aucun produit ajouté à la demande pour le moment.
            </p>
          )}
        </div>
        {items.length ? (
          <button type="button" onClick={clearQuote} className="mt-4 text-sm font-semibold text-stone-600">
            Vider la liste
          </button>
        ) : null}
      </div>
      <QuoteForm onSubmit={(event) => event.preventDefault()} />
    </section>
  )
}