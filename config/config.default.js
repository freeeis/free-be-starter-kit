const path = require('path');

module.exports = {
    locales: ['zh-cn', 'en-us'],
    /**
     * Default locale (can be overwrite by the app.ctx.locale var)
     */
    defaultLocale: 'zh-cn',
    /**
     * Enabled modules in order.
     * Each one can be a name, or an object with name and path.
     */
    modules: [],

    // other global configurations.
    baseUrl: '/api',
    bodySizeLimit: '10mb',
    staticFolders: [path.join(__dirname, "../public/uploads")],
    ImageThumbWidth: 300,
    assetsUrlPrefix: '/assets',
    defaultResponseMessage: 'OK',

    cacheTimeout: 24 * 3600 * 1000,
    cookieTimeout: 7 * 24 * 3600 * 1000,
}