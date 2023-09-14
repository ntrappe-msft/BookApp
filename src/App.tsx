/**
 * This file is the entire Book App. It should be treated like the control
 * and brains of the operation, synchronizing, rendering components, checking 
 * settings, and populating data.
 * Author(s):
 * Date: September 04, 2023 
 */

import './App.css'
import { useState } from 'react';
// import Book from './components/Book/Book';
// import BookPreview from './components/BookPreview/BookPreview';
// import Yellowface from './assets/Yellowface.png';
// import HarryPotter from './assets/HarryPotter.png';
import BookList from './components/BookList/BookList';

function App() {
    const [openBook, setOpenBook] = useState(false);

    return (
        <>
            <h2>idk</h2>
            { openBook ? (
                <p>Open book</p>
            ) : (
                <BookList/>
            )}
        </>
    );
}

export default App;
