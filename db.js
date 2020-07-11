if(process.env.DATABASE_URL) {
    module.exports = require('./dbp');
}
else {
    module.exports = require('./dbd');
}