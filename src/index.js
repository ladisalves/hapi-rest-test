'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 5555,
        host: 'localhost'
    });
    
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'OK';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
