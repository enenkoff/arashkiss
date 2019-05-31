module.exports = function (gulp, plugins, path_src, path_dest) {

    return gulp.src(path_src + 'index.html')
        .pipe(plugins.extReplace('.php'))
        .pipe(gulp.dest(path_dest))
};