/*
 * @Description: The global configuration file forr the dev env.
 *
 * @Author: zhiquan <x.zhiquan@gmail.com>
 * @Date: 2021-08-03 09:09:24
 * @LastEditTime: 2023-03-17 10:35:00
 * @LastEditors: zhiquan
 */

module.exports = {
    modules: [
        {
            name: 'db',
            path: 'free-be-mongodb',
        },
        'account',
        'core-modules',
        'demo',
    ],
    db: {
        autoCreateIndexes: true,
        forceDate: true,
    },
    account: {
        whiteList: [
            /^\/assets\/.*$/,
        ]
    },
}