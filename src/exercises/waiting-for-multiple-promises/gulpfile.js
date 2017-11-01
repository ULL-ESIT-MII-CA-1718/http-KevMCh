var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("waiting-for-multiple-promises", shell.task("static-server -p 8080"));
