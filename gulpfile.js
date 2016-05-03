var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var del = require('del');
var inject = require('gulp-inject');
var rev = require('gulp-rev');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
    return del.sync([path.join('./dist/**')]);
});
gulp.task('copy', function() {
    return gulp.src(['./src/@(images|fonts|css)/**', './src/index.html'])
        .pipe(gulp.dest('dist'))
});
gulp.task('injectSource', function () {
    var target = gulp.src('./dist/index.html');
    var sources = gulp.src(['./dist/**/*.js', './dist/**/*.css'], {read: false});

    return target.pipe(inject(sources, {relative:true}))
        .pipe(gulp.dest('./dist'));
});
gulp.task('rev', function () {
    return gulp.src(['./dist/**/*.js','./dist/**/*.css'])
        .pipe(rev())
        .pipe(gulp.dest('dist'))
});
gulp.task('delete', function () {
    return del.sync([
        path.join('./dist/**/*.js'),
        path.join('./dist/**/*.css'),
        '!'+path.join('./dist/**/*-*.js'),
        '!'+path.join('./dist/**/*-*.css')
    ]);
});
gulp.task('zip', function() {
    return gulp.src('./dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});
gulp.task('zip2', function() {
    return gulp.src('./dist/**/*.css')
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'))
});
gulp.task('package', function() {
    return gulp.src('./dist/**')
        .pipe(zip('app.zip'))
        .pipe(gulp.dest('dist'));
});


gulp.task('build', function() {
    runSequence('copy', 'rev', 'delete', 'injectSource', ['zip', 'zip2'] , 'package');
});
