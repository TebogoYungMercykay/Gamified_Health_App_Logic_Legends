export const  errorHandler = (err, req, res, next) => {
    // Log the error

    let statusCode = 500;
    let errorMessage = 'Internal Server Error';
  
    // Check if the error has a status code and message
    if (err.statusCode && err.message) {
      statusCode = err.statusCode;
      errorMessage = err.message;
    }
  
    // Send the error response to the client
    res.status(statusCode).json({
      error: errorMessage
    });
}