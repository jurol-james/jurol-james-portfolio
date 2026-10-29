type TokenKind = 'keyword' | 'type' | 'string' | 'identifier'

interface CodeToken {
  text: string
  kind?: TokenKind
}

const lines: CodeToken[][] = [
  [
    { text: 'public final class', kind: 'keyword' },
    { text: ' ' },
    { text: 'Person', kind: 'type' },
    { text: ' {' },
  ],
  [],
  [
    { text: '    ' },
    { text: 'private final', kind: 'keyword' },
    { text: ' ' },
    { text: 'String', kind: 'type' },
    { text: ' ' },
    { text: 'name', kind: 'identifier' },
    { text: ' = ' },
    { text: '"Jurol James"', kind: 'string' },
    { text: ';' },
  ],
  [],
  [
    { text: '    ' },
    { text: 'private final', kind: 'keyword' },
    { text: ' ' },
    { text: 'String', kind: 'type' },
    { text: ' ' },
    { text: 'role', kind: 'identifier' },
    { text: ' =' },
  ],
  [{ text: '            ' }, { text: '"Senior Software Engineer"', kind: 'string' }, { text: ';' }],
  [],
  [
    { text: '    ' },
    { text: 'private final', kind: 'keyword' },
    { text: ' ' },
    { text: 'String', kind: 'type' },
    { text: ' ' },
    { text: 'experience', kind: 'identifier' },
    { text: ' = ' },
    { text: '"10+ years"', kind: 'string' },
    { text: ';' },
  ],
  [],
  [
    { text: '    ' },
    { text: 'private final', kind: 'keyword' },
    { text: ' ' },
    { text: 'String[]', kind: 'type' },
    { text: ' ' },
    { text: 'expertise', kind: 'identifier' },
    { text: ' = {' },
  ],
  [{ text: '        ' }, { text: '"Java & Spring Boot"', kind: 'string' }, { text: ',' }],
  [{ text: '        ' }, { text: '"React & TypeScript"', kind: 'string' }, { text: ',' }],
  [{ text: '        ' }, { text: '"System Architecture"', kind: 'string' }, { text: ',' }],
  [{ text: '        ' }, { text: '"Enterprise Integrations"', kind: 'string' }],
  [{ text: '    };' }],
  [],
  [
    { text: '    ' },
    { text: 'private final', kind: 'keyword' },
    { text: ' ' },
    { text: 'String', kind: 'type' },
    { text: ' ' },
    { text: 'passion', kind: 'identifier' },
    { text: ' =' },
  ],
  [
    { text: '            ' },
    { text: '"Building reliable software"', kind: 'string' },
    { text: ';' },
  ],
  [{ text: '}' }],
]

export function PersonCodePanel() {
  return (
    <figure className="code-editor" aria-labelledby="person-filename">
      <div className="editor-header">
        <span className="editor-controls" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="editor-tab" id="person-filename">
          <span className="file-mark" aria-hidden="true" />
          Person.java
        </span>
        <span className="editor-language">Java</span>
      </div>
      <div
        className="code-scroll"
        role="region"
        aria-label="Java source code for Person.java"
        tabIndex={0}
      >
        <pre>
          <code>
            {lines.map((line, index) => (
              <span className="code-line" key={index}>
                {line.map((token, tokenIndex) => (
                  <span className={token.kind ? `java-${token.kind}` : undefined} key={tokenIndex}>
                    {token.text}
                  </span>
                ))}
              </span>
            ))}
          </code>
        </pre>
      </div>
      <figcaption className="editor-caption">
        <span>Illustrative Java profile class</span>
        <span>Static source preview</span>
      </figcaption>
    </figure>
  )
}
