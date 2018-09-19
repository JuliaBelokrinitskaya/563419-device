'use strict';

var
  gulp = require('gulp'),
  del = require('del'),
  plumber = require('gulp-plumber'),

  pug = require('gulp-pug'),
  htmlmin = require('gulp-htmlmin'),

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

gulp.task('html', function () {
  return gulp.src('src/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('src'))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('.'))
    .pipe(server.stream());
});

gulp.task('build', function (done) {
  return run(
    'clean',
    'html',
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

  gulp.watch('src/**/*.pug', ['html']);
});
