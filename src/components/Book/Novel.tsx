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
class Novel extends React.Component {
    render() {
        return (
            <h1>Hello world</h1>
        );
    }
}
