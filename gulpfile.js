'use strict';

var
  gulp = require('gulp'),
  del = require('del'),

  run = require('run-sequence'),
  server = require('browser-sync').create()
;

gulp.task('clean', function() {
  return del([
    'css',
    'fonts',
    'img',
    'js',
    '*.html'
  ]);
});

gulp.task('build', function (done) {
  return run(
    'clean',
    done
  );
});

gulp.task('serve', function () {
  server.init({
    server: '.',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
});
