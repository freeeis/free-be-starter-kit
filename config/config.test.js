/*
 * @Description: The global configuration file for the test env.
 *
 * @Author: zhiquan <x.zhiquan@gmail.com>
 * @Date: 2021-08-03 09:09:24
 * @LastEditTime: 2023-03-23 15:36:19
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