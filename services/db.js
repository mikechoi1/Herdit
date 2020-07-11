if(process.env.HEROKU_POSTGRESQL_ROSE_URL) {
    module.exports = require('./dbp');
}
else {
    module.exports = require('./dbd');
}