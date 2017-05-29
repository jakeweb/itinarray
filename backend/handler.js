let handler = {
    success: successHandler,
    error: errorHandler
}

function successHandler(response, data) {
    return response.status(200).json(data);
}

function errorHandler(response, status, error) {
    console.log(error);
    return response.status(status).json(error);
}

module.exports = handler;
