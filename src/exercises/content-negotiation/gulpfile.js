var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("content-negotiation", shell.task("static-server -p 8080"));
