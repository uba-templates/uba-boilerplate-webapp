var gulp = require('gulp');
var connect = require('gulp-connect');
var mockServer = require('gulp-mock-server');


gulp.task('watch', function() {
    gulp.watch(['./*.html', './*/*.js'], ['html']);
});
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: './'
    });
});


gulp.task('mock', function() {
    gulp.src('.').pipe(mockServer({
        port: 8080
    }));
});


gulp.task('default', ['webserver', 'watch', 'mock']);
