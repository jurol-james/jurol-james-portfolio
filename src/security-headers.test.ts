import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const config = JSON.parse(readFileSync(resolve(process.cwd(), 'vercel.json'), 'utf8')) as {
  headers: { source: string; headers: { key: string; value: string }[] }[]
}

describe('Vercel security headers', () => {
  it('applies the security policy to all routes without weakening existing HSTS', () => {
    expect(config.headers).toHaveLength(1)
    expect(config.headers[0].source).toBe('/(.*)')

    const headers = config.headers[0].headers
    const values = new Map(headers.map(({ key, value }) => [key.toLowerCase(), value]))
    expect(values.size).toBe(headers.length)
    expect(values.get('x-frame-options')).toBe('DENY')
    expect(values.get('x-content-type-options')).toBe('nosniff')
    expect(values.get('referrer-policy')).toBe('strict-origin-when-cross-origin')
    expect(values.has('strict-transport-security')).toBe(false)

    const permissions = values.get('permissions-policy')
    expect(permissions).toBe(
      'camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()',
    )

    const policy = values.get('content-security-policy')
    expect(policy).toBeDefined()
    expect(policy).not.toMatch(/\*|'unsafe-inline'|'unsafe-eval'/)

    const directives = Object.fromEntries(
      policy!.split(';').map((directive) => {
        const [name, ...sources] = directive.trim().split(/\s+/)
        return [name, sources]
      }),
    )
    expect(directives['default-src']).toEqual(["'self'"])
    expect(directives['base-uri']).toEqual(["'self'"])
    expect(directives['object-src']).toEqual(["'none'"])
    expect(directives['frame-ancestors']).toEqual(["'none'"])
    expect(directives['frame-src']).toEqual(["'none'"])
    expect(directives['form-action']).toEqual(["'self'"])
    expect(directives['script-src']).toContain("'self'")
    expect(directives['style-src']).toEqual(["'self'", 'https://fonts.googleapis.com'])
    expect(directives['img-src']).toEqual(["'self'"])
    expect(directives['font-src']).toEqual(["'self'", 'https://fonts.gstatic.com'])
    expect(directives['connect-src']).toEqual(["'self'"])
    expect(directives['manifest-src']).toEqual(["'self'"])
    expect(directives['media-src']).toEqual(["'none'"])
  })

  it('allows the unchanged theme bootstrap by its exact script hash', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')
    const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
    expect(inlineScripts).toHaveLength(1)

    const hash = `sha256-${createHash('sha256').update(inlineScripts[0][1]).digest('base64')}`
    const policy = config.headers[0].headers.find(
      ({ key }) => key.toLowerCase() === 'content-security-policy',
    )?.value
    expect(
      policy?.split(';').find((directive) => directive.trim().startsWith('script-src')),
    ).toContain(`'${hash}'`)
  })
})
