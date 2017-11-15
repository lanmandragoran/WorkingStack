var express = require('express')
var cors = require('cors')
var deck = require('./deck')


//setup our app

var app = express();
app.use(cors())
var logger = require('./logger').init(app)


app.use('/', deck)
app.use('/deck', deck)

app.listen(7167, function() {
  console.log('Example app listening on port 7167!');
});

module.exports = app

/*

  app.use(morgan('combined', {stream: accessLogStream}))
  app.use(morgan('dev'));
  //make a variable for the log directory
var logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
  })

  */