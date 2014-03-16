theAgenda
=========

Intelligent task-management at your fingertips. Work in Progress.

## Getting Started

**TODO:** Server setup with [Spring](http://spring.io/)

### Client setup

Make sure NodeJS is installed. On the OSX terminal, you can install it via Homebrew

```
brew install node
```

Make sure Bower (for front-end package management) and Gulp (build and
test tasks for development) are installed. You can do this with NPM

```
npm install -g bower
npm install -g gulp
```

From the root folder of this directory, install the Node and Bower
dependencies

```
npm install && bower install
```

Then run a Gulp task

```
gulp <task>
```

See `gulpfile.js` to view all available tasks. Here
are a few key ones (most of which don't exist but will soon!):

 - `default` - (Calling `gulp` without arguments) Opens a localhost server, builds code and begins
 	watching for changes
 - `test` - Run the full client-side integration test suite
 - `clean` - Reformat and lint code
 - `build` - Builds scripts, templates, and stylesheets for preview in
 	development
 - `dist` - Builds and minifies scripts, templates, and stylesheets for
 	production
 
Check out [gulp.js](http://gulpjs.com/) to learn more.

## Authors

@StefanieMikloska and @nfrasser!

## License

MIT

