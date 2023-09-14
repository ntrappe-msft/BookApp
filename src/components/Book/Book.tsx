/**
 * This file creates the Book component. It displays a book cover, description,
 * reviews, and more. The user can interact with it to add the book to a shelf,
 * change settings, add reviews, etc. 
 * Note: This component just displays data and offers interactions, it isn't
 * aware of anything beyond itself so it must be feed info.
 * Author(s): Nicole Trappe
 * Date: September 04, 2023 
 */

import { useState } from 'react';
import { getStars, setLength, getLengthMetric, setSynopsis } from './BookHelpers';
import { setReviewNum, setTitle } from './BookHelpers';
import { DEFAULT_SYNOPSIS, DEFAULT_AUTHOR, DEFAULT_TITLE } from './BookHelpers';
import { DEFAULT_DATE, DEFAULT_REVIEWS } from './BookHelpers';
import DEFAULT_COVER from '../../assets/blank-cover.png';
import './Book.css';

/**
 * Creates the HTML skeleton of the Book component and sets defaults like
 * an empty book cover, filler description, no ratings, etc.
 * @param {object} cover - Path to cover photo
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
    cover = DEFAULT_COVER,
    title = DEFAULT_TITLE,
    author = DEFAULT_AUTHOR,
    rating = 0,
    numReviews = 0,
    words = 0,
    published = DEFAULT_DATE,
    synopsis = DEFAULT_SYNOPSIS
}) {
    const [PreviewSynopsis, setPreviewSynopsis] = useState(true);

    const toggleSynopsis = () => {
        setPreviewSynopsis(!PreviewSynopsis)
    }

    return (
        <>
            <div id="collapse-wrapper">
                <button id="collapse-btn"></button>
            </div>
            <div id="cover-wrapper">
                <img src={cover} alt="No bookcover found"/>
            </div>
            <div id="title-wrapper">
                {setTitle(title)}
                <h3 id="author-text">{author}</h3>
            </div>
            <div id="stats-wrapper">
                <div id="rating-box">
                    {getStars(rating)}
                    <h5>{setReviewNum(numReviews)}</h5>
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
            <div id="synopsis-wrapper" onClick={toggleSynopsis}>
                {setSynopsis(synopsis, PreviewSynopsis)}
            </div>
            <div id="reviews-wrapper">{DEFAULT_REVIEWS}</div>
        </>
    );
}

// React only allows 1 default export, this should be the component itself (Book)
// If we have additional functions we want to test, we have to export them to expose them,
// but they should be "named" exports not "default"
export default Book;