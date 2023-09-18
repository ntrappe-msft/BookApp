import './App.css'
import Book from './components/Book/Book';
import BookPreview from './components/BookPreview/BookPreview';
import Yellowface from './assets/Yellowface.png';
import HarryPotter from './assets/HarryPotter.png';
import React, { useState, useRef } from 'react';
import { IBook } from './models/BookModel';

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState<IBook[]>([]);
    const [selectedBook, setSelectedBook] = useState<IBook | null>(null); // New state to track the selected book

    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    console.log(`window width ${windowSize.current[0]} and height ${windowSize.current[1]}`);

    async function fetchBooks(query: string) {
        try {
            const response = await fetch(`https://microsoftbookify.azurewebsites.net/api/getBooksByTitle/${query}?code=lwLJK1exb9iatSHMs6ucxvdyVs5BE2jlXQnGOSazFQfOAzFuRW4evQ==`);
            const data = await response.json();
            setBooks(data.books);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    return (
        <span id="app-content">
            {selectedBook ? ( // If a book is selected, show the Book component
                <>
                    <button id="back-btn" onClick={() => setSelectedBook(null)}>&#8592; Books</button> {/* Back button */}
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
                <> {/* Otherwise, show the search bar and book previews */}
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
                        <span id="book-preview-wrapper" key={book.isbn13 || index}>
                            <BookPreview
                                onClick={() => setSelectedBook(book)} // Set the clicked book as the selected book
                                cover={book.image}
                                title={book.title}
                                author={book.authors && book.authors.length > 0 ? book.authors[0] : "Unknown"}
                                readers={1000}  // Placeholder, since the API data doesn't have 'readers'. Need to implement with DB.
                            />
                        </span>
                    ))}
                </>
            )}
        </span>
    );
}

export default App;
