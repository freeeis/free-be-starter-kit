/*
 * @Description: 入口文件。
 * 启动free内核，启动app，调用钩子函数。
 * 如果数据没有启动完成，等待。
 * 
 * @Author: zhiquan <x.zhiquan@gmail.com>
 * @Date: 2022-04-19 16:44:52
 * @LastEditTime: 2023-03-07 14:43:19
 * @LastEditors: zhiquan
 */

const express = require('express');
const core = require('free-be-core');

// create the app
const app = express();

// hook: onBegin(app)
core.onBegin(app);

// collect all modules, and order according to the dependencies relationship, attach the modules list to app.
core.loadModules(app);

// hook: onModulesReady(app)
core.onModulesReady(app);

// export the app object
module.exports = app;

core.onAppReady(app);

if (app.db) {
    let waitingDBTimer = setInterval(() => {
        if (app.db.__ready) {
            clearInterval(waitingDBTimer);

            // hook: onLoadRouters(app)
            core.onLoadRouters(app);

            // load routers from modules
            core.loadRouters(app);

            // hook: onRoutersReady(app)
            core.onRoutersReady(app);
        } else {
            app.logger.debug('Waiting for DB...');
            app.db.tryConnect();
        }
    }, 500);
} else {
    // hook: onLoadRouters(app)
    core.onLoadRouters(app);

    // load routers from modules
    core.loadRouters(app);

    // hook: onRoutersReady(app)
    core.onRoutersReady(app);
}
