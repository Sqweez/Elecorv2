const mix = require('laravel-mix')

const config = require('./webpack.config');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/js/styles/app.scss', 'public/css')
    .webpackConfig(config)
    .options({
        extractVueStyles: false,
        processCssUrls: false
    })

if (mix.inProduction()) {
    mix.version()
}
