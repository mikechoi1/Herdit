if(process.env.HEROKU_POSTGRES_ROSE_URL) {
    module.exports = require('./dbp');
}
else {
    module.exports = require('./dbd');
}