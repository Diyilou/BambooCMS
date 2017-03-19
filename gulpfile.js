/**
 * 2016-9-26 mingxin
 */

var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var uglify = require('gulp-uglify');

var fileRoute = {
    src: './src', // 源文件目录
    tar: './public' // 处理之后的文件目录
};

/**
 * 管理css文件
 */

gulp.task('css', function() {

    gulp.src(fileRoute.src + '/css/*.scss')
        .pipe(gulpSass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(fileRoute.tar + '/css/'));
});

/**
 * 管理 js 文件
 */

gulp.task('js', function () {

    gulp.src(fileRoute.src + '/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest(fileRoute.tar + '/js/'));
});


gulp.task('default', ['css','js']);
