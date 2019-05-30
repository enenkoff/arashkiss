module.exports = {
    build: {
        css: 'src/assets/css/' /* path to ready css */,
        js: 'dist/' /* path to ready js */,
    },
    src: {
        common: 'src/' /* path to source folder */,
        js: 'src/js/' /* path to source js folder */,
        sass: 'src/styles/sass/**/*.+(sass|scss)' /* path to source sass files */,
    },
    watch: {
        style: 'src/styles/sass/**/*.scss' /* path for watch sass files */,
        vue: 'src/**/*.vue' /* path to source js folder */,
        js: 'src/**/*.js' /* path to source js folder */,
    },
    browser: './' /* path for browsersync directory */,
    port: '6063',
};
