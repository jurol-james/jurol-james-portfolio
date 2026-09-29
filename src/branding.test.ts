import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const publicDirectory = resolve(process.cwd(), 'public')
const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')

describe('Jurol brand assets', () => {
  it('references self-hosted browser and Apple touch icons', () => {
    for (const href of ['/favicon.ico', '/favicon-32x32.png', '/apple-touch-icon.png']) {
      expect(html).toContain(`href="${href}"`)
      expect(existsSync(resolve(publicDirectory, href.slice(1)))).toBe(true)
    }
  })

  it('provides 16px, 32px, and 48px entries in the multi-size favicon', () => {
    const icon = readFileSync(resolve(publicDirectory, 'favicon.ico'))
    expect(icon.readUInt16LE(0)).toBe(0)
    expect(icon.readUInt16LE(2)).toBe(1)
    expect(icon.readUInt16LE(4)).toBe(3)
    expect([0, 1, 2].map((index) => icon[index * 16 + 6])).toEqual([16, 32, 48])
  })
})
