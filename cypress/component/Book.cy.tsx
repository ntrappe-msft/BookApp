import React from 'react';
import Book from '../../src/components/Book/Book'

// Will 'mount' aka attach the Book to DOM before each test
beforeEach(() => {
    cy.mount(<Book />)
})

// Test Set #1
describe('Render Book Component', () => {
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