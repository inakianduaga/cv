'use strict';

//Dependencies
let gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
  });
  $.fs = require('fs');
  $.environment = require('./lib/environment.js');

//CLI parameters
const VERSION_TYPE = $.environment.get('version', 'minor');
const COMMIT_MESSAGE = $.environment.get('message', false);

/**
 * Reads the package.json file
 * `fs` is used instead of require to prevent caching in watch (require caches)
 * @returns {json}
 */
function getPackageJson() {
  return JSON.parse($.fs.readFileSync('./package.json', 'utf-8'));
}

gulp.task('bump', false, () =>
  gulp.src(['./package.json'])
    .pipe($.bump({ type: VERSION_TYPE}))
    .pipe(gulp.dest('./'))
);

gulp.task('commit', false, ['bump'], () => {

  let pkg = getPackageJson();
  let v = `v${pkg.version}`;
  let message = `Release ${v}`;

  return gulp.src('./')
    .pipe($.git.add())
    .pipe($.git.commit(message));
});

gulp.task('release', 'Bumps package version, tags release & pushes the current branch to the origin repo', ['commit'], () => {

  let pkg = getPackageJson();
  let v = `v${pkg.version}`;
  let message = COMMIT_MESSAGE ? `Release ${v}: ${COMMIT_MESSAGE}` : `Release ${v}`;

  $.git.tag(v, message, function(err){
    if (err) throw err;
  });

  $.git.push('origin', 'HEAD', { args: ' --tags' }, function (err) {
    if (err) throw err;
  });

}, {
  options: {
    'version [minor]': 'The semantic version type for this release [patch|minor|major]. See http://semver.org/ for information.',
    'message': 'Message to add to the commit'
  }
});
