import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const publicDirectory = resolve(process.cwd(), 'public')
const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')

describe('Jurol brand assets', () => {
  it('references self-hosted browser and Apple touch icons', () => {
    for (const href of [
      '/favicon.svg',
      '/favicon.ico',
      '/favicon-32x32.png',
      '/apple-touch-icon.png',
    ]) {
      expect(html).toContain(`href="${href}"`)
      expect(existsSync(resolve(publicDirectory, href.slice(1)))).toBe(true)
    }
    const svg = readFileSync(resolve(publicDirectory, 'favicon.svg'), 'utf8')
    expect(svg).toContain('<path')
    expect(svg).toContain('<circle')
    expect(svg).not.toContain('<image')
    expect(svg).not.toContain('data:image')
    expect(svg).not.toContain('<rect')
    expect(svg).not.toMatch(/<(?:script|foreignObject)\b/i)
    expect(svg).not.toMatch(/\son[a-z]+\s*=/i)
    expect(svg).not.toMatch(/(?:href|xlink:href)=["'](?:https?:|\/\/)/i)
    expect(svg).not.toMatch(/(?:@import|javascript:|url\(\s*(?:https?:|\/\/))/i)
  })

  it('ships the refined self-contained full logo with the original JUROL colors', () => {
    const logoPath = resolve(publicDirectory, 'jurol-logo.svg')
    expect(existsSync(logoPath)).toBe(true)
    const logo = readFileSync(logoPath, 'utf8')
    expect(logo).toContain('viewBox="0 0 337 337"')
    expect(logo).toContain('stroke="#46C855"')
    expect(logo).toContain('fill="#233E3D"')
    expect(logo).toContain('fill="#46C855"')
    expect(logo).not.toMatch(/<(?:script|foreignObject|image)\b/i)
    expect(logo).not.toMatch(/\son[a-z]+\s*=/i)
    expect(logo).not.toMatch(/(?:href|xlink:href)=["'](?:https?:|\/\/)/i)
    expect(logo).not.toMatch(/(?:@import|javascript:|url\(\s*(?:https?:|\/\/))/i)
    expect(logo).not.toMatch(/<(?:style|text)\b/i)
  })

  it('provides 16px, 32px, and 48px entries in the multi-size favicon', () => {
    const icon = readFileSync(resolve(publicDirectory, 'favicon.ico'))
    expect(icon.readUInt16LE(0)).toBe(0)
    expect(icon.readUInt16LE(2)).toBe(1)
    expect(icon.readUInt16LE(4)).toBe(3)
    expect([0, 1, 2].map((index) => icon[index * 16 + 6])).toEqual([16, 32, 48])
    const png32 = readFileSync(resolve(publicDirectory, 'favicon-32x32.png'))
    const touchIcon = readFileSync(resolve(publicDirectory, 'apple-touch-icon.png'))
    expect([png32.readUInt32BE(16), png32.readUInt32BE(20)]).toEqual([32, 32])
    expect([touchIcon.readUInt32BE(16), touchIcon.readUInt32BE(20)]).toEqual([180, 180])
  })
})
