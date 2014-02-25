theAgenda
=========

Intelligent task-management at your fingertips. Work in Progress.

## Getting Started

**TODO:** Server setup with [Spring](http://spring.io/)

### Client setup

All commands are executed in the terminal.

1. Make sure NodeJS is installed. On OSX, you can install it via Homebrew:

```sh
brew install node
```

2. Use NPM to globally install Bower (for front-end package management) and Gulp (development build and test tasks):

```sh
npm install -g bower
npm install -g gulp
```

3. Run a Gulp task. See `gulpfile.js` to view all available tasks. Here are a few key ones

 - `test` - Run the full client-side integration test suite
 - `clean` - Reformat and lint code
 - `build` - Builds scripts, templates, and stylesheets for preview in development
 - `dist` - Builds and minifies scripts, templates, and stylesheets for production
 - `default` - (Calling `gulp` without arguments) Builds code and begins watching for changes


## Authors

@StefanieMikloska and @nfrasser!

## License

MIT

