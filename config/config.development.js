module.exports = {
    modules: [
        {
            name: 'db',
            path: 'free-be-mongodb'
        },
    ],
    db: {
        autoCreateIndexes: true,
        forceDate: true,
    },
}