/**
 * This file creates the Book component. It displays a book cover, description,
 * reviews, and more. The user can interact with it to add the book to a shelf,
 * change settings, add reviews, etc. 
 * Note: This component just displays data and offers interactions, it isn't
 * aware of anything beyond itself so it must be feed info.
 * Author(s): Nicole Trappe
 * Date: September 04, 2023 
 */

import React, { useState } from 'react';
import { getStars } from "./BookHelpers";
import blankCover from '../../assets/blank-cover.png';

/**
 * Creates the HTML skeleton of the Book component and sets defaults like
 * an empty book cover, filler description, no ratings, etc.
 * @returns {JSX.Element} - A React element for a Book.
 */
function Book() {
    const [Title, SetTitle] = useState<string>('Untitled');
    const [Author, SetAuthor] = useState<string>('No Author');
    const [Rating, SetRating] = useState<number>(0);
    const [NumReviews, SetReviews] = useState<number>(0);
    const [Length, SetLength] = useState<string>('Unknown');
    const [NumPages, SetNumPages] = useState<number>(0);
    const [Published, SetPublished] = useState<string>('Unknown');

    const UpdateTitle = (NewTitle: string) => {
        SetTitle(NewTitle);
    };
    const UpdateAuthor = (NewAuthor: string) => {
        SetAuthor(NewAuthor);
    };
    const UpdateRating = (NewRating: number) => {
        SetRating(NewRating);
    };
    const UpdateNumReviews = (NewNumReviews: number) => {
        SetRating(NewNumReviews);
    };
    const UpdateLength = (NewLength: string) => {
        SetLength(NewLength);
    };
    const UpdateNumPages = (NewNumPages: number) => {
        SetNumPages(NewNumPages);
    };
    const UpdatePublished = (NewPublished: string) => {
        SetPublished(NewPublished);
    };

    return (
        <>
            <div id="cover-wrapper">
                <img src={blankCover} alt="No bookcover found"/>
            </div>
            <div id="title-wrapper">
                <h2>{Title}</h2>
                <h3 id="author-text">{Author}</h3>
            </div>
            <div id="stats-wrapper">
                <div id="rating-box">
                    { getStars(Rating) }
                    <h5>{NumReviews} Reviews</h5>
                </div>
                <div id="length-box">
                    <h4>{Length}</h4>
                    <h5>{NumPages} Pages</h5>
                </div>
                <div id="stats-box">
                    <h4>{Published}</h4>
                    <h5>Published</h5>
                </div>
            </div>
            <p id="synopsis-wrapper">No description provided.</p>
            <div id="reviews-wrapper">Reviews Wrapper</div>
        </>
    );
}

function setTitle(title: string) {

}


// React only allows 1 default export, this should be the component itself (Book)
// If we have additional functions we want to test, we have to export them to expose them,
// but they should be "named" exports not "default"
export default Book;
