var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var build = require('gulp-build');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/css'));
});

gulp.task('jade', function () {
    return gulp.src('app/jade/**/*.jade')
            .pipe(jade())
            .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/jade/**/*.jade', ['jade']);
});

gulp.task('clean', function () {
    return gulp.src('dist')
            .pipe(clean());
});

gulp.task('scripts', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/jquery-match-height/jquery.matchHeight-min.js'
    ])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'));
});


gulp.task('build', ['clean'], function () {
    gulp.src('app/css/**/*.css')
            .pipe(build())
            .pipe(gulp.dest('dist/css'));

    gulp.src('app/**/*.html')
            .pipe(build())
            .pipe(gulp.dest('dist'));

    gulp.src('app/images/**/*')
            .pipe(gulp.dest('dist/images'));
    gulp.src('app/fonts/**/*')
            .pipe(gulp.dest('dist/fonts'));
    gulp.src('app/js/**/*')
            .pipe(gulp.dest('dist/js'));
    //gulp.src('app/images/**/*.png')
    //        .pipe(build())
    //        .pipe(gulp.dest('dist/images'));
});