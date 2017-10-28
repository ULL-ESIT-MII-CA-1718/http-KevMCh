var http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
  'msg': 'Hello World!'
});

var options = {
  host: 'localhost',
  path: '/',
  port: '8080',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

callback = function(res) {
  var str = '';

  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');

  res.on('data', function (chunk) {
    // console.log(chunk);
    console.log(`BODY: ${chunk}`);
    str += chunk;
  });

  res.on('end', function () {
    // console.log(str);
    console.log('No more data in response.');
  });

}

var req = http.request(options, callback);

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
