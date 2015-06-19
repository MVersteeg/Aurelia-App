var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'server.js'
  })
    .on('start', function onStart() {
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {

      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, 500);
    });
});

gulp.task('browser-sync', ['build', 'nodemon'], function() {
  browserSync.init({
    proxy: 'http://localhost:4000',
    port: 3000
  });
});
