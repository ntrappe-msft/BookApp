import fillStarPath from '../../assets/star-fill.png';
import emptyStarPath from '../../assets/star-empty.png';
import halfStarPath from '../../assets/half-star.png';

// Globals
const LONGEST_BOOK = 4000000;
const SHORT = 40001;
const MED = 85001;
const LONG = 150001;
const WORDS = 0;
const PAGES = 1;
const PREVIEW_LEN = 275;
const SPACE = ' ';

// Exported Globals
export const DEFAULT_SYNOPSIS = 'No description provided.';
export const DEFAULT_COVER = '/src/assets/blank-cover.png';
export const DEFAULT_AUTHOR = 'No Author';
export const DEFAULT_TITLE = 'Untitled';
export const DEFAULT_DATE = 'Unknown';
export const DEFAULT_REVIEWS = 'No reviews found.';

/**
 * Based on the rating, will return an element with 5 stars (images)
 * that correspond to it (will only show empty, half, and full)
 * @param {number} rating - Rating of the book from 0 to 5
 * @returns {JSX.Element} - A React element representing 5 stars.
 */
export function getStars(rating: number): JSX.Element {
    console.clear()
    console.log('rating of ' + rating)
    const MAX_STARS = 5;                // max star rating
    const HALF_STAR = 0.5;              // 0.5 rating = 1/2 filled star
    let Stars: JSX.Element[] = [];      // set of stars
    let i = 0;                          // iterator

    /* If an invalid rating, just use 5 empty stars */
    if (rating < HALF_STAR || rating > MAX_STARS) {
        console.warn('ERROR: Rating should be within [0.5, 5]');
        for (i = 0; i < MAX_STARS; i++) {
            Stars.push(<img key={i} className="star" src={emptyStarPath} alt="empty star"/>);
        }
    /* For a valid rating, iterate thru full, half, & empty stars */
    } else {
        for (i = 0; i < MAX_STARS; i++) {
            if (rating >= 1) {
                rating -= 1;
                Stars.push(<img key={i} className="star" src={fillStarPath} alt="full star"/>);
                console.log('add full star')
            } else if (rating >= HALF_STAR) {
                rating -= HALF_STAR;
                Stars.push(<img key={i} className="star" src={halfStarPath} alt="half star"/>);
                console.log('add half star')
            } else {
                Stars.push(<img key={i} className="star" src={emptyStarPath} alt="empty star"/>);
                console.log('add empty star')
            }
        }
    }
    console.log(Stars)
    return <div className="stars">{Stars}</div>;
}

/**
 * If no synopsis provided or short, always just have that synopsis showing. Otherwise,
 * if PreviewSynopsis is true, return a synopsis with only 275 characters and 'Read More'.
 * If not, return the full synopsis with 'Read Less'.
 * @param {string} synopsis - The full synopsis/description of the book
 * @param {boolean} PreviewSynopsis - True - preview version, False - full version
 * @returns {JSX.Element} - A React element representing text of synopsis
 */
export function setSynopsis(synopsis: string, PreviewSynopsis: boolean): JSX.Element {
    // Default (no synopsis given) or too short
    if (synopsis == DEFAULT_SYNOPSIS || (synopsis.length <= PREVIEW_LEN)) {
        console.log('old synopsis: ', <p>{synopsis}</p>)
        return (<>{synopsis}</>);
    }
    // We can cut down synopsis depending on if PreviewSynopsis is true
    if (!PreviewSynopsis) {
        return (
            <p>{synopsis} <b>Read Less.</b></p>
        )
    } else {
        // Preview is the first 275 characters of synopsis. If it ends with a space char, it
        // looks weird, so remove it. Then slap on a 'Read More' in bold.
        let preview = synopsis.slice(0, PREVIEW_LEN);
        const lastChar = synopsis.slice(PREVIEW_LEN - 1, PREVIEW_LEN);
        if (lastChar == SPACE) {
            preview = preview.slice(0, PREVIEW_LEN - 1);
        }
        console.log('new synopsis: ', <p>{preview}... <b>Read More.</b></p>)
        return (
            <p>{preview}... <b>Read More.</b></p>
        )
    }
}

export function setLength(words: number): string {
    if (words < 1 || words > LONGEST_BOOK) {
        console.warn('ERROR: ' + words + ' is an invalid length of book.')
        return 'Unknown';
    } else if (words < SHORT) {
        return 'Short';
    } else if (words < MED) {
        return 'Medium';
    } else if (words < LONG) {
        return 'Long';
    } else {
        return 'Giant';
    }
}

export function getLengthMetric(words: number, opt: number): string {
    if (opt === WORDS) {
        return `${words} Words`;
    } else if (opt === PAGES) {
        return `${Math.round(words/275)} Pages`
    } else {
        return 'idk';
    }
}