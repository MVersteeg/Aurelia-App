var path = require('path');

var sourceRoot = 'source/';
var stylesRoot = 'styles/';
var outputRoot = 'dist/';

module.exports = {
  root: sourceRoot,
  source: sourceRoot + '**/*.js',
  jade: sourceRoot + '**/*.jade',
  style: stylesRoot + '**/*.css',
  stylesSass : stylesRoot + '**/*.sass',
  output: outputRoot,
  outputLibs: outputRoot + 'libs/',
  bootstrap: 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
  bootstrapSassInclude: 'node_modules/bootstrap-sass/assets/stylesheets/',
  bootstrapSass: stylesRoot + 'styles.sass',
  sourceMapRelativePath: '../' + sourceRoot
};