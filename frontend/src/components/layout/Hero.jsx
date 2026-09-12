import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import defaultImage from '../../assets/image.png'

const categories = [
  { label: 'Outillage', slug: 'outillage' },
  { label: 'Quincaillerie', slug: 'quincaillerie' },
  { label: 'Visserie', slug: 'visserie' },
  { label: 'Soudure', slug: 'soudure' },
]

export default function Hero({
  imageSrc = defaultImage,
  title = 'Du matériel solide, pour du travail bien fait.',
  subtitle = "Fournisseur d'outillage, de quincaillerie, de visserie et de matériel de soudure à Casablanca depuis 2008.",
}) {
  return (
    <section className="bg-[#F7F5F2]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          <div className="flex items-center rounded-lg bg-[#0F2438] px-6 py-12 text-white md:px-12 md:py-20 lg:px-16">
            <div className="max-w-xl">
              <h1 className="max-w-lg font-['Archivo'] text-4xl font-extrabold leading-[0.92] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-slate-200 sm:text-lg">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/produits"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Voir les produits
                </Link>
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-300"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F5F2]">
            <div className="h-full overflow-hidden rounded-lg border-2 border-orange-500 bg-white shadow-[0_20px_50px_rgba(15,36,56,0.12)]">
              <img
                src={imageSrc}
                alt="Equipement Chefchaouni workshop and hardware display"
                className="h-[320px] w-full object-cover object-[80%_center] sm:h-[380px] md:h-[420px] lg:h-[560px] lg:object-[78%_center]"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 w-full overflow-x-auto border-t border-[#ddd6cc] bg-[#F7F5F2]">
          <div className="flex min-w-max divide-x divide-[#d8d0c4]">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                to={`/produits?categorie=${category.slug}`}
                className={[
                  'px-6 py-4 text-sm font-medium text-[#1A1A1A] transition hover:text-orange-600',
                  index === 0 ? 'pl-0' : '',
                ].join(' ')}
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
