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

const styles = require("./tasks/styles.js"),
    scripts = require("./tasks/scripts.js"),
    templates = require("./tasks/templates.js"),
    watch = require("./tasks/watch.js"),
    server = require("./tasks/server.js");