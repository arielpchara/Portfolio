var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('scss',function(){
    return gulp.src('html/css/*.scss')
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('html/css'));
});

gulp.task('watch', function() {
    gulp.watch('html/css/*.scss', ['scss']);
});

gulp.task('default',['scss','watch']);