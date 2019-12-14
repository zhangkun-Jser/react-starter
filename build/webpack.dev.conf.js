let mockport = 8000;

process.argv.forEach(function setMockPort(val, index) {
  if (val === '--env.mockport') {
    mockport = process.argv[index + 1];
    return false;
  }
});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // 服务器外部可访问要声明host
    host: '0.0.0.0',
    hot: true,
    inline: true,
    open: true,
    proxy: {
      '**/*.action': {
        target: 'http://localhost:' + mockport,
        /* bypass: function bypass(req, res, proxyOptions) {
          // handle default jsp action
          if (req.headers.accept.indexOf('html') != -1) {
            return 'index.html';
          }
        }, */
      },
    },
  },
};
