var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var es6Path = 'src/es6/*.js';
var compilePath = 'public/';

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css',
                              './public/app/*.js',
                              './public/syntax/*.js',
                              './public/widget/*.js'], {
        read: false
    });

    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));

});

gulp.task('serve', ['babel', 'style', 'inject'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3010
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting....');
        });
});

gulp.task('babel', function () {
    // These options are what should be present in the .babelrc file
    // if the .babelrc file didn't cause gulp-babel to crash for some reason
    var babelOptions = {presets: ['es2015']}; 
    
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(babel(babelOptions))
        .pipe(gulp.dest(compilePath + '/syntax'));
});

// TODO: Clean out babel output directory task - make babel preprossessing depend on this task

// TODO: Create a gulp task for running babel before running karma tests