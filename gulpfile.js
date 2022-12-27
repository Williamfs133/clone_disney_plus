const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function buildStyles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function buildJs(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(buildStyles, images, buildJs);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(buildStyles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(buildJs));
}