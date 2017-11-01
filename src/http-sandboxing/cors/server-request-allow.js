"use strict";

const express = require('express');
const app = express();
var cors = require('cors');
const expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 3020));

app.use(expressLayouts);
app.use(express.static(__dirname));

var corsOptions = {
  origin: 'http://localhost:8080/'
}

app.get("/xmlhttp_info.txt", cors(corsOptions), (request, response) => {
  response.send("Response from server 3020: <b>Hello client!</b>" );
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
