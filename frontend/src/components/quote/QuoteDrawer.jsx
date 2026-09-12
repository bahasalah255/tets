import { useQuote } from '../../hooks/useQuote.js'

export default function QuoteDrawer() {
  const { items } = useQuote()

  return (
    <aside className="rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">Ma demande</p>
      <p className="mt-3 text-sm text-stone-600">{items.length} produit(s) sélectionné(s).</p>
    </aside>
  )
}