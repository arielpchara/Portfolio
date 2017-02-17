const gulp = require('gulp'),
    config = require('./config.js'),
    gls = require('gulp-live-server');


gulp.task(config.server.task, function() {
    var server = gls.static(config.server.path, config.server.port);
    server.start();
    gulp.watch(config.server.watch, server.notify);
});