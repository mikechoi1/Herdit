const pool = require('../services/db');
const requireLogin = require('../middlewares/requireLogin');
const postDeletePermission = require('../middlewares/postDeletePermission');

module.exports = app => {
    app.get('/api/posts', async (req, res) => {
        try {
            const posts = await pool.query('SELECT * FROM posts');
            res.send(posts.rows);
        } catch (err) {
            console.log(err.message);
        }
    });

    app.post('/api/posts', requireLogin, async (req, res) => {
        try {
            const { postTitle, postBody } = req.body;
            //posts table currently does not have a column for postBody
            const subpage = '/h/all';
            const userId = req.user.id;
            const username = req.user.displayname;
            const rating = 0;
            const newPost = await pool.query("INSERT INTO posts (title, subpage, username, rating, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *", [postTitle, subpage, username, rating, userId]);
            res.send(newPost.rows);
        } catch (err) {
            console.log(err.message);
        }
    });

    app.delete('/api/post/:postId/:userId', postDeletePermission, async (req, res) => {
        try {
            const { postId } = req.params;
            await pool.query("DELETE FROM posts WHERE id=$1", [postId]);
            const posts = await pool.query('SELECT * FROM posts');
            res.send(posts.rows);
        } catch (err) {
            console.log(err);
        }
    })
};
