import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ value, label, suffix = '', duration = 1200 }) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(0)

  useEffect(() => {
    const start = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      const nextValue = Math.round(progress * value)
      setCount(nextValue)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [duration, value])

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="text-3xl font-extrabold text-[#0F2438]" style={{ fontFamily: 'Archivo, Inter, ui-sans-serif, system-ui, sans-serif' }}>
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-stone-600">{label}</p>
    </div>
  )
}

AnimatedCounter.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number,
}
