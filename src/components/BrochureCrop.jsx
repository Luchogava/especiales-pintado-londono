export function BrochureCrop({
  alt,
  className = '',
  imageClassName = '',
  objectPosition = 'center',
  overlayClassName = '',
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src="/brochure.png"
        alt={alt}
        className={`h-full w-full object-cover ${imageClassName}`}
        style={{ objectPosition }}
        loading="lazy"
      />
      {overlayClassName ? <div className={`pointer-events-none absolute inset-0 ${overlayClassName}`} /> : null}
    </div>
  )
}
