const gulp = require('gulp');
const prefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const gulp_if = require('gulp-if');
const browserSync = require('browser-sync').create();

const config = {
    paths: {
        scss: './src/scss/**/*.scss',
        html: './public/index.html'
  },
    output: {
        generalPath: './public',
        masterCss: 'master.min.css'
  },
    isDevelop: true
};

gulp.task('scss', () => {

    console.info('Compiling SCSS files...');

    gulp.src(config.paths.scss)
    .pipe(gulp_if(config.isDevelop, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(config.output.masterCss))
    .pipe(prefix({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(gulp_if(!config.isDevelop, cleanCss()))
    .pipe(gulp_if(config.isDevelop, sourcemaps.write()))
    .pipe(gulp.dest(config.output.generalPath))
    .pipe(browserSync.stream())
});

gulp.task('server', () => {

    browserSync.init({
        server: {
            baseDir: config.output.generalPath
        }
    });

    gulp.watch(config.paths.scss, ['scss']);
    gulp.watch(config.paths.html).on('change', browserSync.reload);
});

gulp.task('default', ['scss', 'server']);
