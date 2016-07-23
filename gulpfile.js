var gulp = require('gulp'),
		gutil = require('gulp-util'),
		browserify = require('gulp-browserify'),
		// browserify let's us import JS libraries like jQuery
		compass = require('gulp-compass'),
		// compass processes our SCSS
		connect = require('gulp-connect'),
		// connect lets us run a server
		concat = require('gulp-concat');

var jsSources = ['components/scripts/scripts.js'],
		sassSources = ['components/sass/style.scss'],
		htmlSources = ['development/*.html'];

gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('development/js'))
	.pipe(connect.reload())
});

gulp.task('compass', function() {
	gulp.src(sassSources)
	.pipe(compass({
		css: 'development/css',
		sass: 'components/sass',
		image: 'development/images',
		style: 'expanded'
	}))
		.on('error', gutil.log)
	.pipe(connect.reload())
});

gulp.task('connect', function() {
	connect.server({
		root: 'development/',
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src(htmlSources)
	.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
	gulp.watch(htmlSources, ['html']);
});

gulp.task('default', ['js','compass', 'watch', 'connect', 'html']);