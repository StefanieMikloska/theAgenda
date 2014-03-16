var gulp = require('gulp'),
  paths = {
    scripts: 'client/scripts/**/*.js',
    styles: 'client/styles/**/*.scss',
    templates: 'client/templates/**/*.hbs',
    vendor: 'client/vendor/',
    build: 'client/build/', // Change to the public folder
    dist: 'client/dist/' // Change to the public folder
  };

var transpiler = require('gulp-es6-module-transpiler'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  handlebars = require('gulp-ember-handlebars'),
  changed = require('gulp-changed'),
  connect = require('gulp-connect');

gulp.task('scripts', function () {

  // Transpile all JavaScripts into the build folder
  return gulp.src(paths.scripts)
    .pipe(changed(paths.build))
    .pipe(transpiler({
      type: 'amd'
    }))
    .pipe(gulp.dest(paths.build))
    .pipe(connect.reload());

});

gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(handlebars({
      outputType: 'browser'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(paths.build))
    .pipe(connect.reload());
});

gulp.task('connect', connect.server({
  root: ['client'],
  port: 8080,
  livereload: true,
  open: {
    browser: 'Google Chrome'
  }
}));

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('default', [
  'connect',
  'scripts',
  'templates',
  'watch'
]);
