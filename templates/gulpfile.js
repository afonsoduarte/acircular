'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src('scss/style.scss')
        .pipe($.sourcemaps.init())
            .pipe($.sass({errLogToConsole: true}))
            .pipe($.autoprefixer('last 2 versions'))
        .pipe($.sourcemaps.write('./maps'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
        .pipe($.size())
        .pipe($.notify("Compilation complete."));
});

gulp.task('scripts', function () {
    return gulp.src('js/**/*.js')
        .pipe(reload({stream:true}))
        .pipe($.size());
});


// Default task build the app
gulp.task('default', function () {
    gulp.start('watch');
});

// User browserSync to serve site 
gulp.task('serve', ['styles'], function () {
    browserSync.init({
        proxy: "acircular.dev"
    });
});

gulp.task('watch', ['serve'], function () {
 
    // watch for changes
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('scss/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['scripts']);
});
