var gulp = require('gulp');
var connect = require('gulp-connect');
var spawn = require('cross-spawn');

gulp.task('watch', function() {
    gulp.watch(['./*.html', './*/*.js', './config/*.js'], ['html']);
});
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
gulp.task('webserver', function() {
    console.log("服务启动完毕");
    connect.server({
        livereload: true,
        root: './'
    });
    var args = ['run', 'proxy'].filter(function(e) {
        return e;
    });
    var proc = spawn('npm', args, {
        stdio: 'inherit'
    });
    proc.on('close', function(code) {
        if (code !== 0) {
            console.error('`npm ' + args.join(' ') + '` failed');
            return;
        }

    });

});


gulp.task('default', ['webserver', 'watch']);
