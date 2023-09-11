/**
 * This file creates the Book component. It displays a book cover, description,
 * reviews, and more. The user can interact with it to add the book to a shelf,
 * change settings, add reviews, etc. 
 * Note: This component just displays data and offers interactions, it isn't
 * aware of anything beyond itself so it must be feed info.
 * Author(s): Nicole Trappe
 * Date: September 04, 2023 
 */

import { GetStars } from "./BookHelpers";

function Book() {
    return (
        <>
            <p id="book-text">Hello World</p>
        </>
    )
}

// React only allows 1 default export, this should be the component itself (Book)
// If we have additional functions we want to test, we have to export them to expose them,
// but they should be "named" exports not "default"
export default Book;
