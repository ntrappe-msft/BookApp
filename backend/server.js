const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { getBookByISBN, getBooksByTitle, getBooksByAuthor } = require('./utils');
const app = express();
const PORT = 3000;

app.use(cors());  // This will enable all CORS (Cross-Origin Resource Sharing) requests from the web.

/**
 * 
 * API to retrieve book by ISBN.
 * 
 * */ 
app.get('/getBookByISBN/:isbn', async (req, res) => {
    const { isbn } = req.params;
    try {
        const book = await getBookByISBN(isbn);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book' });
    }
});

/**
 * 
 * API to retrieve book based on title.
 * By default maximum result per page is 20.
 * 
 * */ 
app.get('/getBooksByTitle/:title', async (req, res) => {
    const { title } = req.params;
    
    try {
        const book = await getBooksByTitle(title);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

/**
 * 
 * API to retrieve book based on author.
 * By default maximum result per page is 20.
 * 
 * */ 
app.get('/getBooksByAuthor/:author', async (req, res) => {
    const { author } = req.params;
    
    try {
        const book = await getBooksByAuthor(author);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
