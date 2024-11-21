const binaryClassification = require('../services/inferenceService');
const crypto = require('crypto');
const storeData = require('../services/storeData');

const postBinaryHandler = async (request, h) => {
    const { image } = request.payload;
    const { model } = request.server.app;

    const { label, suggestion } = await binaryClassification(model, image);
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const data = {
        id,
        result: label,
        suggestion,
        createdAt,
    };

    await storeData(id, data);

    return h
        .response({
            status: 'success',
            message: 'Model is predicted successfully',
            data: data,
        })
        .code(201);
};

module.exports = postBinaryHandler;
