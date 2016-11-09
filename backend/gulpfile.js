const config = require('node-config-manager')
const gulp = require('gulp')
const jshint = require('gulp-jshint')
const eslint = require('gulp-eslint')
const nodemon = require('gulp-nodemon')
const fs = require('fs')
const configManager = require('./lib/util/configManager')
const exec = require('child_process').exec
const airBnbRules = require('./.eslintrc')
const log = require('./lib/util/logger')

if (!fs.existsSync('log')) { fs.mkdirSync('log') }


function handleError(err) {
  log.error(err.toString())
  this.emit('end')
}

gulp.task('precompile', () => {
  return gulp.src('./lib/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

gulp.task('es6compile', () => {
  return gulp.src('./lib/**/*.js')
    .pipe(eslint(airBnbRules))
    .pipe(gulp.dest('./lib'))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
});

gulp.task('buildDev', ['precompile', 'es6compile'])

gulp.task('serveDev', ['buildDev'], (event)=> {
    nodemon({
        script: 'main.js',
        env: { 'NODE_ENV': 'development' }
    })
})

gulp.task('serve', (event) => {
  exec('npm start', (error) => {
    if (error) {
      log.error(`Error: ${ error }`)
    }
    event(error)
  })
})

gulp.task('default', ['serveDev']);