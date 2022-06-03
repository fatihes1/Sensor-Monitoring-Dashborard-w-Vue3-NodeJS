const winston = require("winston");
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'main-point-service' },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      new winston.transports.File({ filename: 'v1/src/logs/mainpoint/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'v1/src/logs/mainpoint/info.log', level: 'info' }),
      new winston.transports.File({ filename: 'v1/src/logs/mainpoint/combined.log' }),
    //   new winston.transports.Console();
    ],
  });
  
  module.exports = logger;