const { search } = require('../utils');

module.exports = async function (context, req) {
    context.log('Processing search function.');
    const { title } = req.params;

    try {
        const book = await search(title);
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

