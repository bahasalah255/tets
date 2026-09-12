import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav.jsx'
import QuoteButton from '../quote/QuoteButton.jsx'
import logo from '../../assets/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white text-[#111111] shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className="hidden bg-black text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs font-medium lg:px-16">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="text-red-500">📍</span>
              28, Rue De Buzancy, 20300 Casablanca, Maroc
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-red-500">☎</span>
              0522 247 420
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-red-500">✉</span>
              contact@equipementchefchaouni.ma
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-6 lg:px-16 lg:py-5">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Equipement Chefchaouni"
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
          />
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <Nav />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <QuoteButton className="rounded-md bg-[#F5711B] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-300/30 hover:bg-orange-600" />
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-[#111111] md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          Menu
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-stone-200 bg-white px-6 py-4 md:hidden">
          <Nav />
          <div className="mt-4 flex flex-col gap-3">
            <QuoteButton className="justify-center rounded-md bg-[#F5711B] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-300/30" />
          </div>
        </div>
      ) : null}
    </header>
  )
}