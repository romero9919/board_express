module.exports = {
    apps: [
        {
            name: 'myboard',
            script: './app.js',
            instances: 0,
            exec_mode: 'cluster'
        }
    ]
}