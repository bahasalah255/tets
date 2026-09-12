import PropTypes from 'prop-types'

export default function ProductGallery({ images = [] }) {
  if (!images.length) {
    return <div className="rounded-3xl bg-stone-100 p-10 text-sm text-stone-500">Aucune image disponible.</div>
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} className="h-52 w-full rounded-3xl object-cover" />
      ))}
    </div>
  )
}

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ),
}