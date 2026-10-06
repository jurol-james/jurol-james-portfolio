import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const publicDirectory = resolve(process.cwd(), 'public')
const component = readFileSync(
  resolve(process.cwd(), 'src/components/ProfessionalJourney.tsx'),
  'utf8',
)
const corporateAssets = [
  { name: 'Tellworks Logistics', file: 'tellworks-logistics.svg', viewBox: '0 0 200 52.255' },
  { name: 'AIMS+', file: 'aimsplus.svg', viewBox: '0 0 274 70' },
  { name: 'CoDev', file: 'codev.svg', viewBox: '0 0 429.587 105.529' },
  { name: 'NEC', file: 'nec.svg', viewBox: '0 0 902.6 71.1' },
  { name: 'Hadean Supercomputing Ltd', file: 'hadean.svg', viewBox: '0 0 424 119.1' },
]

describe('Professional Journey logo assets', () => {
  it('uses the existing full JUROL logo and local corporate SVGs', () => {
    expect(component).toContain("src: '/jurol-logo.svg'")
    expect(component).not.toMatch(
      /aimsplus\.com|tellworks\.com|cdn\.prod\.website-files\.com|ph\.nec\.com/i,
    )
    expect(component).not.toContain('aimsplus-logo-300x77.png')
    expect(component).toContain("src: '/images/professional-journey/hadean.svg'")
    expect(component).not.toContain('hadean.com')

    for (const asset of corporateAssets) {
      const assetPath = resolve(publicDirectory, 'images/professional-journey', asset.file)
      expect(existsSync(assetPath), `${asset.name} SVG exists locally`).toBe(true)
      const svg = readFileSync(assetPath, 'utf8')
      expect(svg, `${asset.name} viewBox`).toContain(`viewBox="${asset.viewBox}"`)
      expect(svg, `${asset.name} is an SVG`).toMatch(/<svg\b/i)
      expect(svg, `${asset.name} has no script, embedded raster, or foreign content`).not.toMatch(
        /<(?:script|foreignObject|image)\b/i,
      )
      expect(svg, `${asset.name} has no event handlers or JavaScript URLs`).not.toMatch(
        /\bon[a-z]+\s*=|javascript\s*:/i,
      )
      expect(svg, `${asset.name} has no external references or remote dependencies`).not.toMatch(
        /(?:href|xlink:href)\s*=\s*["'](?:https?:|\/\/|data:|javascript:)|@import|url\(\s*["']?(?:https?:)?\/\//i,
      )
      expect(svg, `${asset.name} has no remote fonts`).not.toMatch(
        /@font-face|fonts\.googleapis\.com/i,
      )
      expect(svg, `${asset.name} has no editor-only layer metadata`).not.toMatch(
        /\bid="Layer_[^"]+"|\bid="レイヤー_[^"]+"|data-name=/i,
      )
    }

    const hadean = readFileSync(
      resolve(publicDirectory, 'images/professional-journey/hadean.svg'),
      'utf8',
    )
    expect(hadean).toContain('fill:#FFFFFF')
    expect(hadean).not.toMatch(/<(?:script|foreignObject|image)\b/i)
    expect(hadean).not.toMatch(/\bon[a-z]+\s*=|javascript\s*:/i)
    expect(hadean).not.toMatch(
      /(?:href|xlink:href)\s*=\s*["'](?:https?:|\/\/|data:|javascript:)|@import|url\(\s*["']?(?:https?:)?\/\//i,
    )
  })
})
