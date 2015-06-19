var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

gulp.task('serve', ['build'], function(done) {
  browserSync({
    open: false,
    port: 3000,
    server: {
      baseDir: "dist",
      routes: {
        "/system-config.js": "config.js",
        "/jspm_packages": "jspm_packages"
      },
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(req.url);
        next();
      }
    }
  }, done);
});