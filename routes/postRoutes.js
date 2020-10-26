const pool = require('../services/db');

module.exports = (app) => {
    app.get('/api/posts', async (req, res) => {
        try {
            const posts = await pool.query('SELECT * FROM posts');
            res.send(posts.rows);
        } catch (err) {
            console.log(err.message);
        }
    });

    app.post('./api/addPost', (req, res) => {
        try {
            const { a } = req.body;

        } catch (err) {
            console.log(err);
        }
    });
};
