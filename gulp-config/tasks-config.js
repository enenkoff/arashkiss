module.exports = function(gulp, plugins) {
    function getTask(task, path_src, path_dest, condition) {
        return require('./tasks/' + task)(gulp, plugins, path_src, path_dest);
    }

    /* browser sync ------------------------------------- */

    gulp.task('browser:sync', () => {
        return getTask('browser-sync', PATH_CONFIG.browser, PATH_CONFIG.port);
    });

    /* php:compile ------------------------------------- */

    gulp.task('php', () => {
        return getTask('php-build', PATH_CONFIG.src.root, PATH_CONFIG.build.root);
    });

    /* js:compile ------------------------------------- */

    gulp.task('webpack', () => {
        return getTask('webpack', PATH_CONFIG.src.common, PATH_CONFIG.build.js);
    });

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
        'watch:js',
        gulp.parallel('webpack', () => {
            return getTask(
                'watch',
                [PATH_CONFIG.watch.vue, PATH_CONFIG.watch.js],
                'webpack',
            );
        }),
    );

    gulp.task(
        'watch',
        gulp.series(
            gulp.parallel(
                'css:build',
                'webpack',
                'browser:sync',
                () => {
                    getTask('watch', PATH_CONFIG.watch.style, 'css:build');
                    getTask('watch', [PATH_CONFIG.watch.vue, PATH_CONFIG.watch.js], 'webpack');
                },
            ),
        ),
    );

    /* server build --------------------------------------*/

    gulp.task(
        'build',
        gulp.parallel(
            'css:build',
            'webpack',
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
