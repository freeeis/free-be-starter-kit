/*
 * @Description: The global configuration file forr the dev env.
 *
 * @Author: zhiquan <x.zhiquan@gmail.com>
 * @Date: 2021-08-03 09:09:24
 * @LastEditTime: 2023-03-07 15:04:46
 * @LastEditors: zhiquan
 */
module.exports = {
    modules: [
        {
            name: 'db',
            path: 'free-be-mongodb',
        },
        'demo',
    ],
    db: {
        autoCreateIndexes: true,
        forceDate: true,
    },
}