const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser'); //parse body and assign to res.body
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport'); //just run config

mongoose.connect(keys.mongoURI);

//// copy above into node console to rapid fire test mongodb queires /////

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// If no thing match below, return index.html
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // main/js/class

  // see if any file in path matches req
  app.use(express.static('client/build'));

  // Express will serve up index.html if it doesnt recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('serverstarted@', PORT);
