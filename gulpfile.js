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

gulp.task('serve', function() {
    var server = gls.static('./', 3000);
    server.start();
    gulp.watch(['css/*.css','js/*.js','*.html'], server.notify);
});


gulp.task('scss',function(){
    return gulp.src(['css/src/*.scss'])
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('concat',function(){
    return gulp.src(['js/src/*.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('uglify',['concat'],function(){
    return gulp.src(['js/main.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('html',function(){
    return gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(nunjucks({
        searchPaths: ['src']
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./'));
});

gulp.task('watch',function(){
    gulp.watch(['css/src/**/*.scss'],['scss']);
    gulp.watch(['src/**/*.html'],['html']);
    gulp.watch(['js/src/**/*.js'],['uglify']);
});

gulp.task('default',['watch','scss','uglify','html','serve']);