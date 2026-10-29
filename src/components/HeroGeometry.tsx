export function HeroGeometry() {
  return (
    <div className="geometry-backdrop" aria-hidden="true">
      <div className="visual-glow" />
      <svg className="orbit-art" viewBox="0 0 700 580" fill="none" focusable="false">
        <defs>
          <linearGradient id="flow-one" x1="54" y1="110" x2="640" y2="436">
            <stop className="flow-stop-teal" />
            <stop className="flow-stop-green" offset="0.52" />
            <stop className="flow-stop-teal" offset="1" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="flow-two" x1="76" y1="470" x2="626" y2="120">
            <stop className="flow-stop-green" stopOpacity="0.45" />
            <stop className="flow-stop-teal" offset="0.5" />
            <stop className="flow-stop-green" offset="1" />
          </linearGradient>
          <radialGradient id="orbit-core">
            <stop className="flow-stop-teal" stopOpacity="0.22" />
            <stop className="flow-stop-teal" offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse className="orbit-guide" cx="350" cy="290" rx="295" ry="230" />
        <ellipse className="orbit-guide orbit-guide-dashed" cx="350" cy="290" rx="260" ry="194" />
        <path
          className="orbit-line"
          d="M42 274C58 126 185 43 326 53C470 64 585 146 650 261"
          stroke="url(#flow-one)"
          strokeWidth="2.5"
        />
        <path
          className="orbit-line"
          d="M48 320C72 464 202 544 343 532C486 520 601 434 650 316"
          stroke="url(#flow-two)"
          strokeWidth="2.5"
        />
        <path
          className="orbit-secondary-line"
          d="M88 125C183 214 184 376 70 458M612 122C515 213 514 377 632 455"
        />
        <circle cx="350" cy="290" r="188" fill="url(#orbit-core)" />
        <circle className="orbit-core" cx="350" cy="290" r="40" />
        <circle className="orbit-node orbit-node-teal" cx="42" cy="274" r="5" />
        <circle className="orbit-node orbit-node-green" cx="650" cy="261" r="5" />
        <circle className="orbit-node orbit-node-green" cx="48" cy="320" r="4" />
        <circle className="orbit-node orbit-node-teal" cx="650" cy="316" r="4" />
        <circle className="orbit-core-point" cx="350" cy="290" r="6" />
      </svg>
    </div>
  )
}
