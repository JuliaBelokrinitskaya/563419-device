'use strict';

var
  gulp = require('gulp'),
  del = require('del'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),

  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  minify = require('gulp-csso'),

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

gulp.task('styles-compile', function () {
  return gulp.src('src/sass/style.sass')
    .pipe(plumber())
    .pipe(sass({
      indentedSyntax: true,
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(gulp.dest('css'));
});

gulp.task('styles', ['styles-compile'], function () {
  return gulp.src('src/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(minify())
    .pipe(gulp.dest('css'))
    .pipe(server.stream());
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
    'styles',
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

  gulp.watch('src/**/*.sass', ['styles']);
  gulp.watch('src/**/*.pug', ['html']);
});
