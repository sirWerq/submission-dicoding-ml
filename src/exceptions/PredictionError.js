const ClientError = require('./ClientError');

class PredictionError extends ClientError {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'PredictionError';
    }
}

module.exports = PredictionError;
