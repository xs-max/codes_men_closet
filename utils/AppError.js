class AppError extends Error {
    constructor(message, statusCode ) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.operational = true;
        this.message = message;
        Error.captureStackTrace(this.message, this.constructor);
    }
}

module.exports = AppError;