const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    //passport will handle the code given back from google oauth
    app.get('/auth/google/callback', passport.authenticate('google'));

    //arg1: route, arg2: function we want to execute whenever user accesse this route
    app.get('/api/logout', (req, res) => {
        //kills the cookie tied to req and logs out
        req.logout();
        res.send(req.user);
    });
    
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};
