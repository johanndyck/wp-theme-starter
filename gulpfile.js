var gulp = require('gulp'),
		gutil = require('gulp-util'),
		browserify = require('gulp-browserify'),
		// browserify let's us import JS libraries like jQuery
		compass = require('gulp-compass'),
		// compass processes our SCSS
		concat = require('gulp-concat');

var jsSources = ['components/scripts/scripts.js'],
		sassSources = ['components/sass/style.scss'];

gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('development/js'))
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
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js'])
	gulp.watch('components/sass/*.scss', ['compass'])
});

gulp.task('default', ['js','compass']);