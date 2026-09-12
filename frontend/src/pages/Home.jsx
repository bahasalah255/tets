import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/layout/AnimatedCounter.jsx'
import HomeSectionTitle from '../components/layout/HomeSectionTitle.jsx'
import defaultHeroImage from '../assets/image.png'

const HERO = {
  tag: "Fournisseur d'outillage à Casablanca depuis 2008",
  title: 'OUTILLAGE, QUINCAILLERIE & MATÉRIEL PRO',
  subtitle: "Plus de 15 ans d'expérience au service des professionnels et particuliers.",
  image: defaultHeroImage,
}

const BRAND_COUNT = 4
const SATISFIED_CLIENTS = 1200

const BRANDS = [
  { name: 'Bahco', logo: '', category: 'Outillage' },
  { name: 'Stanley', logo: '', category: 'Outillage' },
  { name: 'Magmaweld', logo: '', category: 'Soudure' },
  { name: 'Fixman', logo: '', category: 'Quincaillerie' },
]

const OPENING_HOURS = ['Lundi - Vendredi : 08h00 - 18h30', 'Samedi : 08h30 - 13h00', 'Dimanche : Fermé']

function PlaceholderLogo({ name }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-stone-100 text-2xl font-black text-stone-400">
      {initials}
    </div>
  )
}

PlaceholderLogo.propTypes = {
  name: HomeSectionTitle.propTypes?.name,
}

export default function Home() {
  return (
    <div className="bg-[#F7F5F2]">
      <section className="relative overflow-hidden bg-[#0F2438] text-white">
        <div className="absolute inset-0">
          <img
            src={HERO.image}
            alt="Atelier de matériel et d'outillage"
            className="h-full w-full object-cover object-[78%_center] opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2438]/90 via-[#0F2438]/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-orange-500 md:text-base">{HERO.tag}</p>
            <h1
              className="mt-4 max-w-4xl text-4xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: 'Archivo, Inter, ui-sans-serif, system-ui, sans-serif' }}
            >
              {HERO.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              {HERO.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/produits"
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Voir nos produits
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <HomeSectionTitle
              title="15+ ANS D'EXPÉRIENCE"
              subtitle="Depuis 2008, nous accompagnons les professionnels, ateliers, artisans et particuliers à Ain Sebaa, Casablanca, avec une offre sérieuse en outillage, quincaillerie, visserie et soudure."
            />
            <Link to="/a-propos" className="mt-6 inline-flex text-sm font-semibold text-orange-500 transition hover:text-orange-600">
              En savoir plus
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <AnimatedCounter value={2008} label="Depuis" />
            <AnimatedCounter value={BRAND_COUNT} label="Familles de produits" />
            <AnimatedCounter value={18} label="Marques distribuées" suffix="+" />
            <AnimatedCounter value={SATISFIED_CLIENTS} label="Clients satisfaits" suffix="+" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-[#0F2438] p-8 text-white shadow-lg md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">UNE OFFRE POUR LES PROS</p>
            <h3
              className="mt-4 text-3xl font-extrabold leading-[0.95]"
              style={{ fontFamily: 'Archivo, Inter, ui-sans-serif, system-ui, sans-serif' }}
            >
              Des solutions adaptées aux grands chantiers et aux besoins métiers.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 md:text-base">
              Nous structurons une offre claire pour les sociétés, ateliers et équipes terrain qui
              cherchent des produits fiables, disponibles et faciles à commander.
            </p>
            <Link
              to="/devis"
              className="mt-6 inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Demander un devis
            </Link>
          </article>

          <article className="rounded-3xl border-2 border-orange-500 bg-white p-8 shadow-lg md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">QUALITÉ GARANTIE</p>
            <h3
              className="mt-4 text-3xl font-extrabold leading-[0.95] text-[#0F2438]"
              style={{ fontFamily: 'Archivo, Inter, ui-sans-serif, system-ui, sans-serif' }}
            >
              Des produits robustes, choisis pour durer.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 md:text-base">
              Nous privilégions des références reconnues pour leur fiabilité afin de garantir un
              meilleur rendement sur le terrain.
            </p>
            <Link
              to="/produits"
              className="mt-6 inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Voir nos produits
            </Link>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        <HomeSectionTitle
          align="center"
          eyebrow="Nos partenaires"
          title="Nos marques partenaires"
          subtitle="Nous travaillons avec des marques fiables pour couvrir l'essentiel des besoins en outillage, quincaillerie et soudure."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {BRANDS.map((brand) => (
            <article key={brand.name} className="rounded-3xl border border-stone-200 bg-white p-5 text-center shadow-sm">
              <PlaceholderLogo name={brand.name} />
              <p className="mt-4 text-base font-semibold text-[#0F2438]">{brand.name}</p>
              <p className="mt-1 text-sm text-stone-500">{brand.category}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">
            <HomeSectionTitle
              title="Demande de devis"
              subtitle="Expliquez-nous votre besoin et notre équipe reviendra vers vous rapidement avec une proposition claire."
            />

            <form className="mt-8 grid gap-4">
              <input className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-500" type="text" name="name" placeholder="Nom complet" />
              <input className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-500" type="tel" name="phone" placeholder="Téléphone" />
              <input className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-500" type="email" name="email" placeholder="Email" />
              <textarea className="min-h-36 rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-500" name="message" placeholder="Votre message" />
              <button type="submit" className="inline-flex w-fit rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                Envoyer la demande
              </button>
            </form>
          </div>

          <div className="space-y-6 rounded-3xl bg-[#0F2438] p-6 text-white shadow-lg md:p-10">
            <div>
              <h3
                className="text-3xl font-extrabold leading-[0.95]"
                style={{ fontFamily: 'Archivo, Inter, ui-sans-serif, system-ui, sans-serif' }}
              >
                Contact rapide
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                Adresse, téléphone, WhatsApp et horaires pour nous joindre facilement.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-slate-100">
              <p><span className="font-semibold text-orange-300">Adresse :</span> Ain Sebaa, Casablanca</p>
              <p><span className="font-semibold text-orange-300">Téléphone :</span> +212 5 00 00 00 00</p>
              <p>
                <span className="font-semibold text-orange-300">WhatsApp :</span>{' '}
                <a className="underline decoration-orange-400/60 underline-offset-4" href="https://wa.me/212500000000" target="_blank" rel="noreferrer">
                  Ouvrir la discussion
                </a>
              </p>
              <div>
                <p className="font-semibold text-orange-300">Horaires :</p>
                <ul className="mt-2 space-y-1 text-slate-200">
                  {OPENING_HOURS.map((hour) => (
                    <li key={hour}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                title="Carte Google Maps"
                src="https://www.google.com/maps?q=Ain%20Sebaa%20Casablanca&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
