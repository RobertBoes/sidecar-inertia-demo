const path = require('path')
const mix = require('laravel-mix')

mix
    .js('resources/js/ssr.js', 'public/js')
    .options({
        manifest: false
    })
    .vue({
        version: 3,
        useVueStyleLoader: true,
        options: {
            optimizeSSR: true
        }
    })
    .alias({
        '@': path.resolve('resources/js')
    })
    .webpackConfig({
        target: 'node',
        externals: {
            node: true,
        },
        resolve: {
            alias: {
                ziggy: path.resolve('vendor/tightenco/ziggy/src/js'),
            },
        },
    })
