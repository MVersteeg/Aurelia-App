var gulp = require('gulp');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var paths = require('../paths');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var runSequence = require('run-sequence');

var compilerOptions = {
  modules: 'system',
  moduleIds: false,
  comments: false,
  compact: false,
  stage: 2,
  optional: [
    "es7.decorators",
    "es7.classProperties"
  ]
};

gulp.task('build-jade', function () {
  gulp.src(paths.jade)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(jade({
      pretty: true
    }))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath}))
    .pipe(gulp.dest(paths.output))
});

gulp.task('build-script', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel(compilerOptions))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-style', function () {
  return gulp.src(paths.style)
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-bootstrap-sass', function () {
  return gulp.src(paths.bootstrapSass)
    //.pipe(sourcemaps.init()) //crashes
    .pipe(sass({includePaths: [paths.bootstrapSassInclude]}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(rename({basename:'bootstrap'}))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.output ));
});

//gulp.task('build-bootstrap-lib', function () {
//  return gulp.src(paths.bootstrap)
//    .pipe(rename({basename:'bootstrap'}))
//    .pipe(gulp.dest(paths.output));
//});

gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    ['build-jade', 'build-script', 'build-style', 'build-bootstrap-sass'],
    callback
  );
});
