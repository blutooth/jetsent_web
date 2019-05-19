const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const vue = require('./loaders/vue')


module.exports = environment

environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        Popper: ['popper.js', 'default']
    })
)

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)


