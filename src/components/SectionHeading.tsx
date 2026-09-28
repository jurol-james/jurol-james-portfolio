interface SectionHeadingProps {
  id: string
  index: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({ id, index, label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{index}</span><span>{label}</span></div>
      <div className="section-heading-main">
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
