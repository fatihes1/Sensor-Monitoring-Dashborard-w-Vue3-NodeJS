const winston = require('winston');

const logger = winston.createLogger({
    level : 'info',
    format : winston.format.json(),
    defaultMeta: { service : 'sensor-service'},
    transports: [
        new winston.transports.File({ filename: 'v1/src/logs/sensors/error.log', level: 'error'}),
        new winston.transports.File({ filename: 'v1/src/logs/sensors/info.log', level: 'info'}),
        new winston.transports.File({ filename: 'v1/src/logs/sensors/combined.log'}),
    ],
});

module.exports = logger;