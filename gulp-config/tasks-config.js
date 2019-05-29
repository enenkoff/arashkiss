module.exports = function(gulp, plugins) {
    function getTask(task, path_src, path_dest, condition) {
        return require('./tasks/' + task)(gulp, plugins, path_src, path_dest);
    }

    /* css:compile ------------------------------------- */

    gulp.task('css:build', () => {
        return getTask('css-build', PATH_CONFIG.src.sass, PATH_CONFIG.build.css);
    });

    /* watchers --------------------------------------*/

    gulp.task(
        'watch:css',
        gulp.parallel('css:build', () => {
            return getTask('watch', PATH_CONFIG.watch.style, 'css:build');
        }),
    );

    gulp.task(
        'watch',
        gulp.series(
            gulp.parallel(
                'css:build',
                () => {
                    getTask('watch', PATH_CONFIG.watch.style, 'css:build');
                },
            ),
        ),
    );

    /* server build --------------------------------------*/

    gulp.task(
        'build',
        gulp.parallel(
            'css:build',
            done => {
                done();
            },
        ),
    );

    /* gulp default --------------------------------------*/

    gulp.task('default', gulp.series('watch'), done => {
        done();
    });
};
