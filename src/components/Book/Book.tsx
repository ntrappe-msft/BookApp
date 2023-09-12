/**
 * This file creates the Book component. It displays a book cover, description,
 * reviews, and more. The user can interact with it to add the book to a shelf,
 * change settings, add reviews, etc. 
 * Note: This component just displays data and offers interactions, it isn't
 * aware of anything beyond itself so it must be feed info.
 * Author(s): Nicole Trappe
 * Date: September 04, 2023 
 */

import { getStars, setLength, getLengthMetric } from "./BookHelpers";
import blankCover from '../../assets/blank-cover.png';

/**
 * Creates the HTML skeleton of the Book component and sets defaults like
 * an empty book cover, filler description, no ratings, etc.
 * @param {string} title - Name of the book
 * @param {string} author - Name of the author
 * @param {number} rating - Score of book between 0 and 5
 * @param {number} numReviews - Total # of reviews
 * @param {number} words - Total # words in the book
 * @param {string} published - Date (Month Year) published
 * @param {string} synopsis - Description of the book
 * @returns {JSX.Element} - A React element for a Book.
 */
function Book({
    title = 'Untitled',
    author = 'No Author',
    rating = 0,
    numReviews = 0,
    words = 0,
    published = 'Unknown',
    synopsis = 'No description provided.'
}) {
    return (
        <>
            <div id="cover-wrapper">
                <img src={blankCover} alt="No bookcover found"/>
            </div>
            <div id="title-wrapper">
                <h2>{title}</h2>
                <h3 id="author-text">{author}</h3>
            </div>
            <div id="stats-wrapper">
                <div id="rating-box">
                    {getStars(rating)}
                    <h5>{numReviews} Reviews</h5>
                </div>
                <div id="length-box">
                    <h4>{setLength(words)}</h4>
                    <h5>{getLengthMetric(words, 1)}</h5>
                </div>
                <div id="stats-box">
                    <h4>{published}</h4>
                    <h5>Published</h5>
                </div>
            </div>
            <p id="synopsis-wrapper">{synopsis}</p>
            <div id="reviews-wrapper">Reviews Wrapper</div>
        </>
    );
}

// React only allows 1 default export, this should be the component itself (Book)
// If we have additional functions we want to test, we have to export them to expose them,
// but they should be "named" exports not "default"
export default Book;