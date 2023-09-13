import { render } from '@testing-library/react';
import { getStars, setSynopsis, setReviewNum } from '../../src/components/Book/BookHelpers'
import { DEFAULT_SYNOPSIS } from '../../src/components/Book/BookHelpers'

const SHORT_SYNOPSIS = 'Yo this is like a short description';
const LONG_SYNOPSIS = `In Harry Potter and the Sorcerer's Stone, Harry, an orphan, lives with the 
    Dursleys, his horrible aunt and uncle, and their abominable son, Dudley. One day just before 
    his eleventh birthday, an owl tries to deliver a mysterious letter? The first of a sequence of 
    events that end in Harry meeting a giant man named Hagrid. Hagrid explains Harry's history to 
    him: When he was a baby, the Dark wizard, Lord Voldemort, attacked and killed his parents in 
    an attempt to kill Harry; but the only mark on Harry was a mysterious lightning-bolt scar on 
    his forehead. Now he has been invited to attend Hogwarts School of Witchcraft and Wizardry, 
    where the headmaster is the great wizard Albus Dumbledore. Harry visits Diagon Alley to get 
    his school supplies, especially his very own wand. To get to school, he takes the Hogwarts 
    Express from platform nine and three-quarters at King's Cross Station. On the train, he meets 
    two fellow students who will become his closest friends: Ron Weasley and Hermione Granger. 
    Harry is assigned to Gryffindor House at Hogwarts, and soon becomes the youngest-ever Seeker 
    on the House Quidditch team.`;

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

describe('Test Synopsis Setting', () => {
    it('Try no synopsis given', () => {
        // A default/short synopsis looks like:
        // props:
        //     children: 'Yo this is like a short description'
        const synopsis = setSynopsis(DEFAULT_SYNOPSIS, false)
        expect(synopsis.props.children).to.include(DEFAULT_SYNOPSIS)
        expect(synopsis.props.children).to.not.include('Read More')
        expect(synopsis.props.children).to.not.include('Read Less')
    })

    it('Try short synopsis given + preview', () => {
        const synopsis = setSynopsis(SHORT_SYNOPSIS, true)
        expect(synopsis.props.children).to.include(SHORT_SYNOPSIS)
        expect(synopsis.props.children).to.not.include('Read More')
        expect(synopsis.props.children).to.not.include('Read Less')
    })

    it('Try short synopsis given + NOT preview', () => {
        const synopsis = setSynopsis(SHORT_SYNOPSIS, false)
        expect(synopsis.props.children).to.include(SHORT_SYNOPSIS)
        expect(synopsis.props.children).to.not.include('Read More')
        expect(synopsis.props.children).to.not.include('Read Less')
    })

    it('Try long synopsis given + preview', () => {
        // A preview synopsis looks like:
        // props:
        //     children: Array (3)
        //         0: 'In Harry Potter and the ...'
        //         1: '... '
        //         2: <b> element
        const synopsis = setSynopsis(LONG_SYNOPSIS, true)
        expect(synopsis.props.children[0]).to.include('Dudley')
        expect(synopsis.props.children[2].props.children).to.include('Read More')
        expect(synopsis.props.children[2].props.children).to.not.include('Read Less')
        expect(synopsis.props.children[0]).to.not.include('Hagrid')
    })
})

describe ('Test Review Number Setting', () => {
    it('0 should be No Reviews', () => {
        assert(setReviewNum(0), 'No Reviews', '0 --> No Reviews')
    })

    it('1 should be 1 Review', () => {
        assert(setReviewNum(1), '1 Review', '1 --> 1 Review')
    })

    it('2 should be 2 Reviews', () => {
        assert(setReviewNum(2), '2 Reviews', '# --> # Reviews')
    })

    it('331 should be 331 Reviews', () => {
        assert(setReviewNum(331), '331 Reviews', '# --> # Reviews')
    })

    it('999 should be 999 Reviews', () => {
        assert(setReviewNum(999), '999 Reviews', '# --> # Reviews')
    })

    it('1000 should be 1K Reviews', () => {
        assert(setReviewNum(1000), '1K Reviews', '# --> nK Reviews')
    })

    it('1100 should be 1.1K Reviews', () => {
        assert(setReviewNum(1100), '1.1K Reviews', '# --> nK Reviews')
    })

    it('1500 should be 1.5K Reviews', () => {
        assert(setReviewNum(1500), '1.5K Reviews', '# --> nK Reviews')
    })

    it('2900 should be 2.9K Reviews', () => {
        assert(setReviewNum(2900), '2.9K Reviews', '# --> nK Reviews')
    })

    it('9999 should be 9.9K Reviews', () => {
        assert(setReviewNum(9999), '9.9K Reviews', '# --> nK Reviews')
    })

    it('10,000 should be 10K Reviews', () => {
        assert(setReviewNum(10000), '10K Reviews', '# --> nK Reviews')
    })

    it('10,500 should be 10K Reviews', () => {
        assert(setReviewNum(10500), '10K Reviews', '# --> nK Reviews')
    })

    it('999,999 should be 999K Reviews', () => {
        assert(setReviewNum(999999), '999K Reviews', '# --> nK Reviews')
    })

    it('1,000,000 should be 1M Reviews', () => {
        assert(setReviewNum(1000000), '1M Reviews', '# --> nK Reviews')
    })

    it('1,345,000 should be 1.3M Reviews', () => {
        assert(setReviewNum(1345000), '1.3M Reviews', '# --> nK Reviews')
    })

    it('7,045,222 should be 7M Reviews', () => {
        assert(setReviewNum(7045222), '7M Reviews', '# --> nK Reviews')
    })

    it('9,999,999 should be 9.9M Reviews', () => {
        assert(setReviewNum(9999999), '9.9M Reviews', '# --> nK Reviews')
    })

    it('3,222,333,444 should be 3B Reviews', () => {
        assert(setReviewNum(3222333444), '3B Reviews', '# --> nK Reviews')
    })
})
