import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos de nous' },
  { to: '/marques', label: 'Marques' },
  { to: '/produits', label: 'Produits' },
]

export default function Nav({ className = '' }) {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                [
                  'rounded-sm px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors',
                  isActive ? 'text-[#F5711B]' : 'text-[#111111] hover:text-[#F5711B]',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  className: PropTypes.string,
}