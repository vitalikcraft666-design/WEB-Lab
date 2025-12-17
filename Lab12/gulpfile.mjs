import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import cssnano from 'gulp-cssnano';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import { deleteAsync } from 'del';

const sass = gulpSass(dartSass);

const paths = {
    styles: "src/scss/**/*.scss",
    scripts: "src/js/**/*.js",
    images: "src/images/**/*",
    dist: "dist"
};

export function styles() {
    return gulp.src(paths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${paths.dist}/css`));
}

export function scripts() {
    return gulp.src(paths.scripts)
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest(`${paths.dist}/js`));
}

export function minifyCSS() {
    return gulp.src(`${paths.dist}/css/*.css`)
        .pipe(cssnano())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(`${paths.dist}/css`));
}

export function minifyJS() {
    return gulp.src(`${paths.dist}/js/*.js`)
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(`${paths.dist}/js`));
}

export function images() {
    return gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(`${paths.dist}/images`));
}

export function clean() {
    return deleteAsync(paths.dist);
}

export function watchFiles() {
    gulp.watch(paths.styles, styles);
    gulp.watch(paths.scripts, scripts);
    gulp.watch(paths.images, images);
}

export default gulp.series(
    clean,
    styles,
    scripts,
    images,
    watchFiles
);
