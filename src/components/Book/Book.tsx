import { GetWords } from './BookHelpers';

function Book() {
    return (
        <>
            <p id="book-text">Hello World</p>
            <p id="fxn-test"><GetWords /></p>
        </>
    )
}

// React only allows 1 default export, this should be the component itself (Book)
// If we have additional functions we want to test, we have to export them to expose them,
// but they should be "named" exports not "default"
export default Book;
