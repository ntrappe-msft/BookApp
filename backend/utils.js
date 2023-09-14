// util.js

const axios = require('axios');

const ISBN_API_KEY = '50541_39fc7079af846a2bdf1d948cce51f2b1'; // 7 days trial API key for isbndb.com. Ends 9/20/2023

async function getBookByISBN(isbn) {
    const url = `https://api2.isbndb.com/book/${isbn}`;
    return fetchData(url);
}

async function getBooksByTitle(title) {
    const url = `https://api2.isbndb.com/books/${title}?&column=title`;
    return fetchData(url);
}

async function getBooksByAuthor(author) {
    const url = `https://api2.isbndb.com/books/${author}?&column=author`;
    return fetchData(url);
}

async function fetchData(url){
    const headers = {
        "Content-Type": 'application/json',
        "Authorization": ISBN_API_KEY
    };
    try {
        const response = await axios.get(url, { headers: headers });
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getBooksByTitle,
    getBookByISBN,
    getBooksByAuthor
};
