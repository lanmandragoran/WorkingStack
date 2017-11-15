var morgan = require('morgan');
var fs = require('fs')
var path = require('path')
var rfs = require('rotating-file-stream')
var uuid = require('uuid')
var app = require('./server.js')
  
  //make a variable for the log directory
module.exports = {
    init: function(app){
        var logDirectory = path.join(__dirname, 'log')

            morgan.token('id', function getId (req) {
                return req.id
            })
            

            // ensure log directory exists
            fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
        
            var accessLogStream = rfs('access.log', {
                interval: '1d', // rotate daily
                path: logDirectory
            })
        
            // setup the logger
            app.use(assignId)
            app.use(morgan(':id :remote-addr ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms', {stream: accessLogStream}))
        
            function assignId (req, res, next) {
                const identifier = uuid.v4()
                req.id = appropriateId(identifier)
                next()
            }

            function appropriateId(identifier) {
                const arr = identifier.split('-')
                const strArr = arr.join('')
                const charArr = strArr.split('')
                const intArr = charArr.map((el, index) => {
                    if(1* el < 10){
                        el = el + 65
                    }
                    else {
                        el = el.charCodeAt(0)
                    }
                    return el
                })
                
                intArr.forEach((el, index) => {
                    if(el < 65 || (el > 90 && el < 97)){
                        el = 0
                    }
                    else {
                        return el;
                    }
                })
                
                const finalArr = intArr.map((el) => {
                        if(el != 0){
                            if(el >= 97) {
                                const newChar = String.fromCharCode(el)
                                return newChar
                            }
                        }
                    })
                    const finId = finalArr.join('')
                    return finId
                }
    }
}

