const postBinaryHandler = require('../server/handler');

const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: postBinaryHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
                maxBytes: 1048576,
            },
        },
    },
];

module.exports = routes;
