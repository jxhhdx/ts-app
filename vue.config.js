module.exports = {
    devServer: {
      proxy: {
        '/': {
          target: 'http://152.136.254.40:3000',
          changeOrigin: true
        },
      }
    }
  }