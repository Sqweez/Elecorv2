module.exports = {
    transpileDependencies: ['vuetify'],
    configureWebpack: config => {
        optimization = {
            concatenateModules: false,
            providedExports: false,
            usedExports: false
        }
    }
}
