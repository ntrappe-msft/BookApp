import './App.css'
import Book from './components/Book/Book';
import BookPreview from './components/BookPreview/BookPreview';
import React, { useState, useRef, useEffect } from 'react';
import { IBook } from './models/BookModel';

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState<IBook[]>([]);
    const [selectedBook, setSelectedBook] = useState<IBook | null>(null); // New state to track the selected book
    // const [scrollPosition, setScrollPosition] = useState(0);

    /**
     * Look for a book based on author, title, ISBN, etc. Produce all matches.
     * @param {string} query author, title, ISBN (book identified)
     */
    async function fetchBooks(query: string) {
        try {
            const response = await fetch(`https://microsoftbookify.azurewebsites.net/api/getBooksByTitle/${query}?code=lwLJK1exb9iatSHMs6ucxvdyVs5BE2jlXQnGOSazFQfOAzFuRW4evQ==`);
            const data = await response.json();
            setBooks(data.books);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    /**
     * Sets the position of the window. In a Book, should be 0,0 (aligned to the top).
     * For Previews, go back to the previous scroll position if possible. Scrolling
     * is dependendent on whether we're in a Book or the list of Previews.
     */
    useEffect(() => {
        if (selectedBook) {
            // In a Book, so 0,0
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        } else {
            // In the list of Previews so go back to previous scroll
            const yPos = localStorage.getItem('yPosition');
            const position = yPos ? parseInt(yPos, 10) : 0;
            window.scrollTo({ top: position, left: 0, behavior: "instant" });
        }
    }, [selectedBook]);

    return (
        <>
            { selectedBook ? (
                /* Book IS selected so show Book component and back arrow */
                <>
                    <button id="back-btn" onClick={() => {
                        setSelectedBook(null)
                    }}>&#8592; Books</button>
                    <span id="book-wrapper">
                        <Book
                            cover={selectedBook.image}
                            title={selectedBook.title}
                            author={selectedBook.authors && selectedBook.authors.length > 0 ? selectedBook.authors[0] : "Unknown"}
                            published={selectedBook.date_published}
                            synopsis={selectedBook.synopsis ? selectedBook.synopsis : "No description"}
                        />
                    </span>
                </>
            ) : (
                /* Book IS NOT selected so show Book previews and search bar */
                <>
                    <span className="search-bar-wrapper">
                        <input
                            type="text"
                            placeholder="Search for a book..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                fetchBooks(e.target.value);
                            }}
                        />
                    </span>
                    
                    {books && books.map((book, index) => (
                        <span id="book-preview-wrapper" key={book.isbn13 || index} onClick={() => {
                            // Save current scroll position before opening up book
                            localStorage.setItem('yPosition', (window.scrollY).toString())
                        }}>
                            <BookPreview onClick={() => {
                                setSelectedBook(book)
                            }} // Set the clicked book as the selected book
                                cover={book.image}
                                title={book.title}
                                author={book.authors && book.authors.length > 0 ? book.authors[0] : "Unknown"}
                                readers={1000}  // Placeholder, since the API data doesn't have 'readers'. Need to implement with DB.
                            />
                        </span>
                    ))}
                </>
            )}
        </>
    );
}

export default App;
