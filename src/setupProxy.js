const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target : 'http://localhost:8888',//目标服务器
            changeorigin: true,
            pathRewrite: {'^/api': ''}
        })
    ),
    app.use(
        '/ddd',
        createProxyMiddleware({
            target : 'http://localhost:9999',//目标服务器
            changeorigin: true,
            pathRewrite: {'^/ddd': ''}
        })
    )
}