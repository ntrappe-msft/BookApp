import { render } from '@testing-library/react';
import { getStars } from '../../src/components/Book/BookHelpers'

describe('Invalid Book Fxn Tests', () => {
    it('Check Stars for Rating of -1 (Invalid)', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(getStars(-1));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'empty star')
        expect(StarImages[1]).to.have.property('alt', 'empty star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })

    it('Check Stars for Rating of 7 (Invalid)', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(getStars(7));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'empty star')
        expect(StarImages[1]).to.have.property('alt', 'empty star')
        expect(StarImages[2]).to.have.property('alt', 'empty star')
        expect(StarImages[3]).to.have.property('alt', 'empty star')
        expect(StarImages[4]).to.have.property('alt', 'empty star')
    })
})
describe('Valid Book Fxn Tests', () => {
    it('Check Stars for Rating of 0', () => {
        // get the <div></div> that holds 5 star images
        const { getAllByAltText } = render(getStars(0));
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
        const { getAllByAltText } = render(getStars(0.5));
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
        const { getAllByAltText } = render(getStars(1));
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
        const { getAllByAltText } = render(getStars(1.5));
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
        const { getAllByAltText } = render(getStars(2));
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
        const { getAllByAltText } = render(getStars(2.5));
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
        const { getAllByAltText } = render(getStars(3));
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
        const { getAllByAltText } = render(getStars(4));
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
        const { getAllByAltText } = render(getStars(4.2));
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
        const { getAllByAltText } = render(getStars(4.5));
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
        const { getAllByAltText } = render(getStars(5));
        const StarImages = getAllByAltText(/star/);
        // iterate through each of the children star images
        expect(StarImages[0]).to.have.property('alt', 'full star')
        expect(StarImages[1]).to.have.property('alt', 'full star')
        expect(StarImages[2]).to.have.property('alt', 'full star')
        expect(StarImages[3]).to.have.property('alt', 'full star')
        expect(StarImages[4]).to.have.property('alt', 'full star')
    })
})