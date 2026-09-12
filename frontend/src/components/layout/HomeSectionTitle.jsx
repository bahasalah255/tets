import PropTypes from 'prop-types'

export default function HomeSectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{eyebrow}</p> : null}
      <h2
        className="mt-3 text-3xl font-extrabold leading-[0.95] text-[#0F2438] sm:text-4xl md:text-5xl"
        style={{ fontFamily: 'Archivo, Inter, ui-sans-serif, system-ui, sans-serif' }}
      >
        {title}
      </h2>
      {subtitle ? <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">{subtitle}</p> : null}
    </div>
  )
}

HomeSectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
}
