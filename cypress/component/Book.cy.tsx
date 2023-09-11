import Book from '../../src/components/Book/Book'
import { GetWords } from '../../src/components/Book/BookHelpers'

describe('Render Book Component', () => {
  it('Mount <Book />', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Book />)
  })

  it('check contents', () => {
    cy.mount(<Book />)
    cy.get('[id=book-text]').should('have.text', 'Hello World')
  })
})

describe('Book Fxn Tests', () => {
  it('Basic fxn call', () => {
    const result = GetWords()
    expect(result).contains('sup');
  })

  it('Basic NOT fxn call', () => {
    const result = GetWords()
    expect(result).not.contains('dog');
  })
})