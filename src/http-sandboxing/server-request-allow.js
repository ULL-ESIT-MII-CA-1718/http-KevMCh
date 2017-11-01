"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 3020));

app.use(expressLayouts);
app.use(express.static(__dirname));

app.get("/xmlhttp_info.txt", (request, response) => {
  response.append('Access-Control-Allow-Origin', '*');
  response.send("Response from server 3020: <b>Hello client!</b>" );
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
