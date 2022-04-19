const express = require('express');
const core = require('free-be-core');

// create the app
const app = express();

let builder = {};

try {
    builder = require('./free/builder');
    Object.assign(app, { freeBuilder: builder });
} catch(_) {
    //
}

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

            core.loadRouters(app);

            // load routers from modules

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

    core.loadRouters(app);

    // load routers from modules

    // hook: onRoutersReady(app)
    core.onRoutersReady(app);
}
