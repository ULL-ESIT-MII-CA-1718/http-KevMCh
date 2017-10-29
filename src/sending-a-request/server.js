"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 8080));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname));

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});

app.get("/xmlhttp_info.txt", (request, response) => {
  console.log(`request.get('Header1') = ${request.get('Header1')}`);
  console.log(`request.get('header2') = ${request.get('header2')}`);
  console.log(`request.xhr = ${request.xhr}`);

  response.append('MyServerSetHeader', 'Success is walking from failure to failure with no loss of enthusiasm');
  response.send("Response from server: <b>Hello client!</b>" );
});
