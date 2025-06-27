const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.emails[0].value.toLowerCase();

      // Try finding by Google ID first
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // Try finding by email
        user = await User.findOne({ email });

        if (user) {
          console.log("🟡 Found existing user by email, updating Google ID...");
          user.googleId = profile.id;
          await user.save();
        } else {
          console.log("🟢 Creating new user...");
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email,
            role: 'student',
          });
        }
      } else {
        console.log("🔵 Found user by Google ID.");
      }

      return done(null, user);
    } catch (err) {
      console.error("❌ Error in Google Strategy:", err);
      return done(err);
    }
  }
));
