const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const vue = require('./loaders/vue')


module.exports = environment

environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
        $: 'jQuery',
        jQuery: 'jQuery',
        jquery: 'jQuery',
        Popper: ['popper.js', 'default']
    })
)

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

environment.loaders.append('expose', {
    test: require.resolve('jquery'),
    use: [{
        loader: 'expose-loader',
        options: '$'
    }, {
        loader: 'expose-loader',
        options: 'jQuery',

    },{
        loader: 'expose-loader',
        options: 'jquery'}]
})