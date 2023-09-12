import Book from '../../src/components/Book/Book'

// Test Set #1
describe('Render Default Book Component', () => {
    beforeEach(() => {
        cy.mount(<Book />)
    })

    it('Check that Title Exists', () => {
        cy.get('#title-wrapper').should('exist')
        cy.get('#title-wrapper h2')
            .should('exist')
            .should('have.text', 'Untitled')
        cy.get('#title-wrapper h3')
            .should('exist')
            .should('have.text', 'No Author')
    })

    it('Check that Review Number Exists', () => {
        cy.get('#stats-wrapper').should('exist')
        cy.get('#rating-box').should('exist')
        cy.get('#rating-box h5')
            .should('exist')
            .should('have.text', '0 Reviews')
    })

    it('Check that Book Length Exists', () => {
        cy.get('#length-box').should('exist')
        cy.get('#length-box h4')
            .should('exist')
            .should('have.text', 'Unknown')
        cy.get('#length-box h5')
            .should('exist')
            .should('have.text', '0 Pages')
    })

    it('Check that Stats Exists', () => {
        cy.get('#stats-box h4')
            .should('exist')
            .should('have.text', 'Unknown')
        cy.get('#stats-box h5')
            .should('exist')
            .should('have.text', 'Published')
    })
})

// Test Set #2
describe('Render Book Component w/ Only Title', () => {
    beforeEach(() => {
        cy.mount(
            <Book
                title={'Yellowface'}
            />
        )
    })

    it('Set Title', () => {
        cy.get('#title-wrapper').should('exist')
        cy.get('#title-wrapper h2')
            .should('exist')
            .should('have.text', 'Yellowface')
        cy.get('#title-wrapper h3')
            .should('exist')
            .should('have.text', 'No Author')
    })

    it('Check that Review Number Exists', () => {
        cy.get('#stats-wrapper').should('exist')
        cy.get('#rating-box').should('exist')
        cy.get('#rating-box h5')
            .should('exist')
            .should('have.text', '0 Reviews')
    })

    it('Check that Book Length Exists', () => {
        cy.get('#length-box').should('exist')
        cy.get('#length-box h4')
            .should('exist')
            .should('have.text', 'Unknown')
        cy.get('#length-box h5')
            .should('exist')
            .should('have.text', '0 Pages')
    })
})

// Test Set #3
describe('Render Half Filled Book Component', () => {
    beforeEach(() => {
        cy.mount(
            <Book
                title={"Harry Potter and the Sorcerer's Stone"}
                author={'J. K. Rowling'}
                rating={4.3}
                numReviews={124678}
            />
        )
    })

    it('Set Title', () => {
        cy.get('#title-wrapper').should('exist')
        cy.get('#title-wrapper h2')
            .should('exist')
            .should('have.text', "Harry Potter and the Sorcerer's Stone")
        cy.get('#title-wrapper h3')
            .should('exist')
            .should('have.text', 'J. K. Rowling')
    })

    it('Set Review Number', () => {
        cy.get('#stats-wrapper').should('exist')
        cy.get('#rating-box').should('exist')
        cy.get('#rating-box h5')
            .should('exist')
            .should('have.text', '124678 Reviews')
    })
})
