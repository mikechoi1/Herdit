const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    //passport will handle the code given back from google oauth
    app.get('/auth/google/callback', passport.authenticate('google'));
};
