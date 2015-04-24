var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    gls = require('gulp-live-server'),
    nunjucks = require('gulp-nunjucks-html');

    gulp.task('serve', function() {
        var server = gls.static(['./html/','./ static/'],8080);
            server.start();
            gulp.watch(['static/**/*.css','static/**/*.html','static/**/*.js'], server.notify);
    });

    gulp.task('html', function() {
        gulp.watch('src/templates/**/*.html', ['html']);
        return gulp.src('src/templates/*.html')
                .pipe(nunjucks({
                  searchPaths: ['src/templates']
                }))
                .pipe(gulp.dest('static'));
    });

    gulp.task('scss',function(){
        gulp.watch('html/css/*.scss', ['scss']);
        return gulp.src('html/css/*.scss')
                .pipe(plumber())
                .pipe(sass({errLogToConsole: true}))
                .pipe(gulp.dest('html/css'));
    });

    gulp.task('default',['scss','html','serve',]);