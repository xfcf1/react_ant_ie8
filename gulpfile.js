var path = require('path');
var gulp = require('gulp');

gulp.task('copy-ie8-js', function() {
    return gulp.src(['./src/@(scripts)/**'])
        .pipe(gulp.dest('dist'))
});
