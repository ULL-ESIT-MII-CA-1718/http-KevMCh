var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("serve", shell.task("node server.js"));
gulp.task("serve-denied", shell.task("node server-request-denied.js"));
gulp.task("serve-allow", shell.task("node server-request-allow.js"));
