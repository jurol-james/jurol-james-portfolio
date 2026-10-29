import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PersonCodePanel } from './PersonCodePanel'

describe('Person.java profile panel', () => {
  it('shows selectable, accessible Java source with the approved profile details', () => {
    const { container } = render(<PersonCodePanel />)

    expect(screen.getByText('Person.java')).toBeInTheDocument()
    const codeRegion = screen.getByRole('region', { name: 'Java source code for Person.java' })
    const source = within(codeRegion).getByRole('code')

    expect(source).toHaveTextContent('public final class Person')
    expect(source).toHaveTextContent('"Jurol James"')
    expect(source).toHaveTextContent('"Senior Software Engineer"')
    expect(source).toHaveTextContent('"10+ years"')
    expect(source).toHaveTextContent('"Java & Spring Boot"')
    expect(source).toHaveTextContent('"React & TypeScript"')
    expect(source).toHaveTextContent('"System Architecture"')
    expect(source).toHaveTextContent('"Enterprise Integrations"')
    expect(source).toHaveTextContent('"Building reliable software"')
    expect(codeRegion).toHaveAttribute('tabindex', '0')
    expect(container.querySelector('.java-keyword')).toHaveTextContent('public final class')
    expect(container.querySelector('.java-type')).toHaveTextContent('Person')
    expect(container.querySelector('.java-string')).toHaveTextContent('"Jurol James"')
    expect(container.querySelector('.editor-caption')).toHaveTextContent('Static source preview')
  })
})
