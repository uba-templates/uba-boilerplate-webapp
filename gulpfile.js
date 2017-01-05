var gulp = require('gulp');
var connect = require('gulp-connect');


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
        root: './',
    });
});

gulp.task('default', ['webserver', 'watch']);
