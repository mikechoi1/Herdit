module.exports = (req, res, next) => {
    if(req.user.id != req.params.userId)
        return res.status(401).send({ error: 'You don\'t have permission to delete post!' });
    next();
};
