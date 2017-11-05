//simple express server to serve the app on Heroku
const express = require('express');
const app = express();

app.use(express.static (__dirname + '/dist'));

// force redirect to HTTPS
const forceSSL = function(){
    return function (req,res, next) {
        if(req.headers['x-forwarded-proto'] !== 'https'){
            return res.redirect (
                ['https://' + req.host('Host'), req.url].join('')
            );
        }
        next();
    }
}


app.use(forceSSL());
app.listen (process.env.PORT || 8080); 
