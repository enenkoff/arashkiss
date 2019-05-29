module.exports = {
    build: {
        css: 'src/assets/css/' /* path to ready css */,
    },
    src: {
        common: 'src/' /* path to source folder */,
        sass: 'src/styles/sass/**/*.+(sass|scss)' /* path to source sass files */,
    },
    watch: {
        style: 'src/styles/sass/**/*.scss' /* path for watch sass files */,
    },
};
