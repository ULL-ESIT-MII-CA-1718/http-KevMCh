var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("abstracting-requests", shell.task("static-server -p 8080"));
