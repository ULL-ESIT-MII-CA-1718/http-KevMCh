var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("promises", shell.task("static-server -p 8080"));
