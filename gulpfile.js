var cp          = require('child_process');
var browserSync = require('browser-sync');
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var shell       = require('gulp-shell');

var siteRoot = '_site';

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span>$ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build','--config','_config.yml,_config-dev.yml', '--drafts'], {stdio: 'inherit'}).on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site',
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    port: 4000
  });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['*.html',
              '*.md',
              '_layouts/*.html',
              '_includes/**/*.html',
              '_includes/**/*.md',
              '_posts/*',
              '_drafts/*',
              '_servicios/**/*.md',
              '_data/**/*.yml',
              '_config.yml',
              '_images/*',
              '_sass/*.scss',
              'css/*.scss'],
              ['jekyll-rebuild']);
});

/**
 * Build the Jekyll Site for production
 */
gulp.task('jekyll-build-prod', function (done) {
  browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
});

/**
 * Deploy
 */
gulp.task('deploy', shell.task([
  'git add --all && git commit -m "update blog" && git push && git push txorua'
]));

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
