var gulp = require('gulp'),
  paths = {
    scripts: 'client/scripts',
    styles: 'client/styles',
    templates: 'client/templates',
    vendor: 'client/vendor',
    build: 'client/build', // Change to the public folder
    dist: 'client/dist' // Change to the public folder
  };

var transpiler = require('gulp-es6-module-transpiler'),
  sass = require('gulp-sass'),
  handlebars = require('gulp-ember-handlebars');

gulp.task('scripts', function () {

  // Transpile all JavaScripts into the build folder
  return gulp.src(paths.scripts + '/**/*.js')
    .pipe(transpiler({
      type: 'amd'
    }))
    .pipe(gulp.dest(paths.build + '/'));

});

gulp.task('default', function () {
  // place code for your default task here
});
