const gulp = require('gulp'),
    config = require('./config.js');

gulp.task(config.watch.task, config.watch.tasks.map(i => i + '/watch').concat('server'));