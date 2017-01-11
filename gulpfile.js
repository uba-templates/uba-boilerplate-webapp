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
        console.log("代理服务启动完毕");
    });

});


gulp.task('default', ['webserver', 'watch']);
