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
  livereload = require('gulp-livereload');

gulp.task('scripts', function () {

  // Transpile all JavaScripts into the build folder
  return gulp.src(paths.scripts)
    .pipe(changed(paths.build))
    .pipe(transpiler({
      type: 'amd'
    }))
    .pipe(gulp.dest(paths.build));

});

gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(handlebars({
      outputType: 'browser'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function () {

  var server = livereload();

  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.templates, ['templates']);

  gulp.watch(paths.build + '**').on('change', function (file) {
    server.changed(file.path);
  });

});

gulp.task('default', [
  'scripts',
  'templates',
  'watch'
]);
