module.exports = {
  devServer: {
    proxy: {
      "/base": {
        target: process.env.VUE_APP_API_URL, //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/base": ""
        }
      }
    }
  },
  chainWebpack: config => {
    // config.plugins.delete("prefetch-index");
    // config.plugins.delete("preload-index");
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: "async"
    });
  },
  productionSourceMap: false
};
