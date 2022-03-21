import logger from './logger';

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.url}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  logger.log.error(new Error(error.message));

  res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'development' : error.stack,
  });
};

export default { notFound, errorHandler };
