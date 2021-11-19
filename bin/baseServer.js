const http = require('http');
const path = require('path');

function BaseServer(addr, port, env, serve = true) {
    process.env.NODE_ENV = env;

    /**
     * Create the HTTP server with the given address and port
     * require the app script here. (if require at top of this file, it will connect to db before setting the env variable)
     */
    let app = require(path.join(__dirname, '../app'));

    app.logger.info('环境设置为"' + env + '"');

    let server = http.createServer(app);

    // hook: onServerCreated(app, server)

    // as the test framework will start the server automatically so ignore the listen call
    if (serve)
        server.listen(port, addr);

    server.on('error', onError);
    server.on('listening', onListening);

    /**
     * Event listener for HTTP server "error" event.
     */
    function onError(error) {
        // hook: onServerError(app, server, error)

        if (error.syscall !== 'listen') {
            throw error;
        }

        // handle specific listen errors with friendly messages
        let shoudExit = false;
        switch (error.code) {
            case 'EACCES':
                app.logger.error('没有足够的权限连接数据库！');
                shoudExit = true;
                break;
            case 'EADDRINUSE':
                app.logger.error("端口 " + port + " 已经被使用！");
                shoudExit = true;
                break;
            default:
                throw error;
        }

        if (shoudExit) {
            process.exit(1);
        }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */
    function onListening() {
        // hook: onServerStarted(app, server, address, port)

        let address = server.address();
        app.logger.info("成功开始监听 " + address.address + ":" + address.port);
    }

    server.db = app.db;
    return server;
}

module.exports = BaseServer;
