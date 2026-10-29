interface SectionHeadingProps {
  id: string
  index: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({ id, index, label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <p className="section-label">
        <b>{index}</b> {label}
      </p>
      <h2 id={id}>{title}</h2>
      {description ? (
        <p className="section-description">{description}</p>
      ) : (
        <span className="section-description" aria-hidden="true" />
      )}
    </div>
  )
}
