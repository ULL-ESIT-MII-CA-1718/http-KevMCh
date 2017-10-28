var http = require('http');

var options = {
  host: 'localhost',
  port: '8080',
  path: '/get/?format=JSON&rnd=new'
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
    // console.log(chunk);
  });

  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
