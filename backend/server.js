const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;


const ISBN_API_KEY = '50541_39fc7079af846a2bdf1d948cce51f2b1' // 7 days trial API key for isbndb.com. Ends 9/20/2023

async function getBookByISBN(isbn) {
    const url = `https://api2.isbndb.com/book/${isbn}`;
    const headers = {
        "Content-Type": 'application/json',
        "Authorization": ISBN_API_KEY
    };
    console.log("here");
    try {
        const response = await axios.get(url, { headers: headers });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// async function getBooksByTitle(title) {
//     const url = `https://api2.isbndb.com/book/${title}`;
//     const headers = {
//         "Content-Type": 'application/json',
//         "Authorization": ISBN_API_KEY
//     };
//     console.log("here");
//     try {
//         const response = await axios.get(url, { headers: headers });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// }


app.get('/getBookByISBN/:isbn', async (req, res) => {
    const { isbn } = req.params;
    try {
        const book = await getBookByISBN(isbn);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book' });
    }
});

// app.get('/getBooksByTitle/:isbn', async (req, res) => {
//     const { isbn } = req.params;
//     req.bo
//     try {
//         const book = await getBooksByTitle(isbn);
//         res.json(book);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch book' });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
