let handler = {
    success: successHandler,
    error: errorHandler
}

function successHandler(response, message, data) {
    return response.status(200).json({
        message: message,
        data: data
    });
}

function errorHandler(response, status, error) {
    console.log(error);
    return response.status(status).json({
        message: error
    });
}

module.exports = handler;
