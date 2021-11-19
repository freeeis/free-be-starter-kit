module.exports = {
    modules: [
        {
            name: 'db',
            path: 'free-be-mongodb'
        },
        'demo'
    ],
    db: {
        autoCreateIndexes: true,
        forceDate: true,
    },
}