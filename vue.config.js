module.exports = {
  assetsDir: 'static',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/global";',
      },
    },
  },
};
