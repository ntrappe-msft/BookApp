const { getBookByISBN } = require('../utils');

module.exports = async function (context, req) {
    context.log('Processing getBookByISBN function.');
    const { isbn } = req.params;

    try {
        const book = await getBookByISBN(isbn);
        context.res = {
            body: book
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: 'Failed to fetch book' }
        };
    }
};


