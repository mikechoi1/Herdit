const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const client = require('../services/db');

//serialize user (set up a cookie)
passport.serializeUser((user, done) => {
    //arg 1: error obj, 2: user's database id
    done(null, user.id);
});

//deserialize user (take db id from cookie and turn back into user model??)
passport.deserializeUser(async (id, done) => {
    const user = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    done(null, user.rows[0]);
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    //GoogleStrat automatically changes from https to http when passing through proxy so need this attribute to stay https
    proxy: true
    //callback function called whenever google oauth redirects back to our app
}, async (accessToken, refreshToken, profile, done) => {
    //need to create account if new or get user variable if already exists in db
    try {
        const user = await client.query('SELECT * FROM users WHERE googleId = $1', [profile.id]);
        if(!user)
            user = await client.query('INSERT INTO users (displayName, email, googleId) VALUES($1, $2, $3)', [profile.displayName, profile._json.email, profile.id]);
        //arg1: error obj, 2: user's data object
        done(null, user.rows[0]);
    } catch (er) {
        console.log(er.message);
    }
}));