import React from 'react';
import { getAllByAltText, render } from '@testing-library/react';
import Book from '../../src/components/Book/Book'
import { GetStars } from '../../src/components/Book/BookHelpers'

describe('Render Book Component', () => {
    it('Mount <Book />', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Book />)
    })
})

describe('Book Fxn Tests', () => {
    it('Check Stars for Rating of -1 (Invalid)', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(-1));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'empty star')
        expect(StarImages[1]).to.have.property('alt', 'empty star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 0', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(0));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'empty star')
        expect(StarImages[1]).to.have.property('alt', 'empty star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 0.5', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(0.5));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'half star')
        expect(StarImages[1]).to.have.property('alt', 'empty star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 1', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(1));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'empty star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 1.5', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(1.5));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'half star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 2', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(2));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'full star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 2.5', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(2.5));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'full star')
        expect(StarImages[2]).to.have.property('alt', 'half star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 3', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(3));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'full star')
        expect(StarImages[2]).to.have.property('alt', 'full star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 4', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(4));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'full star')
        expect(StarImages[2]).to.have.property('alt', 'full star')
        expect(StarImages[3]).to.have.property('alt', 'full star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 4.2', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(4.2));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'full star')
        expect(StarImages[2]).to.have.property('alt', 'full star')
        expect(StarImages[3]).to.have.property('alt', 'full star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 4.5', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(4.5));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'full star')
        expect(StarImages[2]).to.have.property('alt', 'full star')
        expect(StarImages[3]).to.have.property('alt', 'full star')
        expect(StarImages[4]).to.have.property('alt', 'half star')
    })

    it('Check Stars for Rating of 5', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(5));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'full star')
        expect(StarImages[2]).to.have.property('alt', 'full star')
        expect(StarImages[3]).to.have.property('alt', 'full star')
        expect(StarImages[4]).to.have.property('alt', 'full star')
    })

    it('Check Stars for Rating of 7 (Invalid)', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(GetStars(7));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'empty star')
        expect(StarImages[1]).to.have.property('alt', 'empty star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })
})