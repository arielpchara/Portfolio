// jshint esversion:6

const gulp = require('gulp'),
    browserify = require('browserify'),
    gls = require('gulp-live-server'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    vueify = require('vueify'),
    brfs = require('brfs'),
    gutil = require('gulp-util'),
    config = require('./config.js');


gulp.task(config.scripts.task, function() {
    return browserify({
            entries: config.scripts.src,
            debug: true
        })
        .transform(vueify)
        .transform(brfs)
        .bundle()
        .on('error', gutil.log)
        .pipe(source(config.scripts.bundle))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write(config.sourcemaps || ""))
        .pipe(gulp.dest(config.scripts.dest));
});


gulp.task(config.scripts.task + '/watch', [config.scripts.task], () => {
    return gulp.watch(config.scripts.watch, [config.scripts.task]);
});