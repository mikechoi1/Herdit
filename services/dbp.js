const Pool = require('pg').Pool;
const pool = new Pool({
    connectionString: process.env.HEROKU_POSTGRESQL_ROSE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;