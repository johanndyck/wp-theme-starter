var gulp = require('gulp'),
		gutil = require('gulp-util'),
		browserify = require('gulp-browserify'),
		// browserify let's us import JS libraries like jQuery
		concat = require('gulp-concat');

var jsSources = [
	'components/scripts/scripts.js'
];


gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('development/js'))
});
