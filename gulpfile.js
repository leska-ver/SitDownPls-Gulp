const {src, dest, parallel, series, watch} = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('node-sass'));
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
const revDel = require('gulp-rev-delete-original');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');
const fileinclude = require('gulp-file-include');
const svgSprite = require('gulp-svg-sprite');
const svgOptimize = require('gulp-svgo');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const browserSync = require('browser-sync').create();


//dev-версия
const clean = () => {//Обновляет dist после каждой инициализации
  return del (['dist'])
}

const resources = () => {
  return src('src/resources/**')//Это для тех папок/файлы которые ни где не импортируются но они используются для продакшн. Для таких как для js библиотек
  .pipe(dest('dist/resources'))
}

const fonts = () => {
  return src(['./src/fonts/*.woff2', './src/fonts/*.woff'])
  .pipe(dest('./dist/fonts'))
}

const php = () => {
  return src('src/PHPMailer/**')
  .pipe(dest('dist/PHPMailer'))
}

const phpMail = () => {
  return src('src/**/*.php')
  .pipe(dest('dist'))
}

//sourcemap, rename, autoprefixer, cleanCSS, browser-sync +
const styles = () => {
  return src('./src/scss/main.scss')
    .pipe(sourcemaps.init()) 
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', notify.onError()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist/css/'))
    .pipe(browserSync.stream());
}

// const scripts = () => {
//   return src([
//     'src/js/**/*.js',
//   ])
//   .pipe(sourcemaps.init())
//   .pipe(babel({
//     presets: ['@babel/env']
//   }))
//   .pipe(concat('main.js'))
//   .pipe(sourcemaps.write())
//   .pipe(dest('dist/js'))
//   .pipe(browserSync.stream())
// }

/*WEBPACK из-за @import "../mixins/_*/
const scripts = () => {
	// return src('./src/js/main.js')
  return src([
    'src/js/**/*.js',
  ])
		.pipe(webpackStream({
			mode: 'development',
			output: {
				filename: 'main.js',
			},
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}]
			},
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
      ]
		}))
		.on('error', function (err) {
			console.error('WEBPACK ERROR', err);
			this.emit('end'); // Не останавливайте выполнение остальной части задачи
		})

		.pipe(sourcemaps.init())
		.pipe(uglify().on("error", notify.onError()))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./dist/js'))
		.pipe(browserSync.stream());
}

// const svgSprites = () => {
//   return src('./src/img/to-sprite/**.svg')
//     .pipe(svgOptimize())
//     .pipe(svgSprite({
//       mode: {
//         stack: {
//           sprite: "../sprite.svg"
//         }
//       }
//     }))
//     .pipe(dest('./dist/img'))
// }

const svgSprites = () => {
  return src('./src/img/to-sprite/**/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../sprite.svg'
      }
    }
  }))
  .pipe(dest('./dist/img'))
  .pipe(browserSync.stream())
}

const htmlInclude = () => {
  return src(['./src/*.html'])
  .pipe(fileinclude({
    prefix: '@',
    basepath: '@file'    
  }))
  .pipe(dest('./dist'))
  .pipe(browserSync.stream());
}

const imgToApp = () => {
  return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg'])
  .pipe(imagemin([imagemin.mozjpeg(), imagemin.optipng(), imagemin.svgo()]))
  .pipe(dest('./dist/img'))
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  watch('./src/scss/**/*.scss', styles);
  watch('./src/index.html', htmlInclude);
  watch('./src/img/**.jpg', imgToApp);
  watch('./src/img/**.png', imgToApp);
  watch('./src/img/**.jpeg', imgToApp);
  watch('./src/img/**.svg', svgSprites);
  watch('./src/js/**/*.js', scripts);
}

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;


// Таски с Build
const stylesBuild = () => {
	return src('./src/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', notify.onError()))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(dest('./dist/css/'))
}


// const scriptsBuild = () => {
//   return src([
//     'src/js/**/*.js',
//   ])
//   .pipe(babel({
//     presets: ['@babel/env']
//   }))
//   .pipe(concat('main.js'))
//   .pipe(uglify().on('error', notify.onError()))
//   .pipe(dest('dist/js'))
// }

/*WEBPACK с Build из-за @import "../mixins/_*/
const scriptsBuild = () => {
	// return src('./src/js/main.js')
  return src([
        'src/js/**/*.js',
      ])
		.pipe(webpackStream({
			mode: 'production',
			output: {
				filename: 'main.js',
			},
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}]
			},
		}))
		.on('error', function (err) {
			console.error('WEBPACK ERROR', err);
			this.emit('end'); // Не останавливайте выполнение остальной части задачи
		})

		//sourcemaps удалили он здесь не нужен
		.pipe(uglify().on("error", notify.onError()))
		.pipe(dest('./dist/js'))
		.pipe(browserSync.stream());
}


exports.dev = series(clean, resources, htmlInclude, styles, scripts, php, phpMail, fonts, imgToApp, svgSprites, watchFiles);
exports.build = series(clean, resources, htmlInclude, stylesBuild, scriptsBuild, php, phpMail, fonts, imgToApp, svgSprites);
