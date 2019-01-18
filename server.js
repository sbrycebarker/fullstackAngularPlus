const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      nodemailer= require('nodemailer');
      config = require('./config.js');

      const app = express();

//  ===================================== Setup =============================================

//  Middleware
    app.use(cors());

    app.use(session({
      resave: true, //Without this you get a constant warning about default values
      saveUninitialized: true, //Without this you get a constant warning about default values
      secret: config.secret
    }))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))

//  Set Static Folder
    app.use(express.static('./full-A-plus'));

// ================================================== ENDPOINTS =========================================



// ================================================== ENDPOINTS =========================================


let port = 8000;
app.listen(port, function() {
console.log("listening on port " + port)
});
