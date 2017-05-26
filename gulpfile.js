var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
	console.log('gulp ready');
});

gulp.task('sass', function(){
	gulp.src('sass/styles.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./style'));
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['sass']);
});