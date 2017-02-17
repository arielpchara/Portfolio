var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gls = require('gulp-live-server'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('./config.js');

gulp.task(config.styles.task, function() {
    return gulp.src(config.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.styles.dest));
});

gulp.task(config.styles.task + '/watch', [config.styles.task], () => {
    return gulp.watch(config.styles.watch, [config.styles.task]);
});