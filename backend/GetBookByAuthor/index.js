const {getBooksByAuthor } = require('../utils');

module.exports = async function (context, req) {
    context.log('Processing getBooksByAuthor function.');
    const { author } = req.params;

    try {
        const book = await getBooksByAuthor(author);
        context.res = {
            body: book
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: 'Failed to fetch books' }
        };
    }
};

