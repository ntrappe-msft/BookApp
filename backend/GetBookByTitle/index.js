const { getBooksByTitle } = require('../utils');

module.exports = async function (context, req) {
    context.log('Processing getBooksByTitle function.');
    const { title } = req.params;

    try {
        const book = await getBooksByTitle(title);
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

