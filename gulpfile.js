var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install", shell.task([
  "npm install -g static-server",
  "npm install -g nodemon",
  "sudo gem install asciidoctor"
]));

gulp.task("doc", shell.task("asciidoctor summary.adoc -o index.html"));

gulp.task("server", shell.task("static-server -p 8080"));

gulp.task("the-protocol", shell.task("nodemon src/the-protocol/server.js"));
gulp.task("get", shell.task("nodemon src/the-protocol/get.js"));
gulp.task("post", shell.task("nodemon src/the-protocol/post.js"));

gulp.task("browser-and-http", shell.task("nodemon src/browser-and-http/server.js"));

gulp.task("sending-a-request", shell.task("nodemon src/sending-a-request/server.js"));

gulp.task("asynchronous-requests", shell.task("nodemon src/asynchronous-requests/server.js"));

gulp.task("fetching-xml-data", shell.task("nodemon src/fetching-xml-data/server.js"));

gulp.task("http-sandboxing", shell.task("nodemon src/http-sandboxing/server.js"));
