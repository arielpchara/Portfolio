const gulp = require('gulp'),
    nunjucks = require('gulp-nunjucks-html'),
    minifyHTML = require('gulp-minify-html'),
    config = require('./config.js');

gulp.task(config.templates.task, () => {
    return gulp.src(config.templates.src)
        .pipe(nunjucks({
            searchPaths: config.templates.paths
        }))
        .pipe(minifyHTML())
        .pipe(gulp.dest(config.templates.dest));
});

gulp.task(config.templates.task + '/watch', [config.templates.task], () => {
    return gulp.watch(config.templates.watch, [config.templates.task]);
});