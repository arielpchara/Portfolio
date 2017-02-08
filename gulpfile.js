// jshint esversion:6

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    nunjucks = require('gulp-nunjucks-html'),
    minifyHTML = require('gulp-minify-html'),
    gls = require('gulp-live-server'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename");

const styles = require("./tasks/styles.js");
const scripts = require("./tasks/styles.js");

gulp.task('serve', function() {
    var server = gls.static('./dest', 3000);
    server.start();
    gulp.watch(['css/*.css', 'js/*.js', '*.html'], server.notify);
});

gulp.task('concat', function() {
    return gulp.src(['src/scripts/*.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dest/scripts'));
});

gulp.task('uglify', ['concat'], function() {
    return gulp.src(['js/main.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./dest/scripts'));
});

gulp.task('html', function() {
    return gulp.src('src/templates/*.html')
        .pipe(plumber())
        .pipe(nunjucks({
            searchPaths: ['src/templates']
        }))
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function() {
    gulp.watch(['src/styles**/*.scss'], ['scss']);
    gulp.watch(['src/templates/**/*.html'], ['html']);
    gulp.watch(['src/scripts/**/*.js'], ['uglify']);
});

gulp.task('default', ['watch', 'scss', 'uglify', 'html', 'serve']);