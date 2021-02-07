const pool = require('../services/db');
const requireLogin = require('../middlewares/requireLogin');

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

    app.delete('/api/post/', async (req, res) => {
        try {
            
            const { postId } = req.body;
            const updatedPosts = await pool.query("DELET FROM posts WHERE user_id=$1 RETURNING *", [postId]);
            res.send(updatedPosts.rows);
        } catch (err) {
            console.log(err);
        }
    })
};
