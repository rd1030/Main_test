var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function (){
    return gulp.src(['scss/style.scss])
    .pipe(sass())
    .pipe(gulp.dest('css/style.css'))
}
);

gulp.task('watch',function(){
    gulp.watch(['sass/**/*.sass', 'scss/**/*.scss'],['sass']);
});

gulp.task('default',['watch']);
