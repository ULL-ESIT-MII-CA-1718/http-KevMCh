var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install", shell.task([
      "npm install -g nodemon"
]));

gulp.task("the-protocol", shell.task("nodemon src/the-protocol/server.js"));
gulp.task("get", shell.task("nodemon src/the-protocol/get.js"));
gulp.task("post", shell.task("nodemon src/the-protocol/post.js"));
