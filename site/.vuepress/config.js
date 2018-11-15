const path = require('path');

const resolve = p => path.resolve(__dirname, '../../', p);

const base = process.env.GH ? '/emmenu/' : '/'

module.exports = {
  title: '菜单',
  base,
  head: [
    ['link', { rel: 'menu', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  configureWebpack: {
    resolve: {
      alias: {
        helper: resolve('emmenu/helper'),
        assets: resolve('emmenu/assets'),
        message: resolve('emmenu/core/message'),
      }
    }
  },
  themeConfig: {
    repo: 'em-fe/menu',
    editLinks: false,
    docsDir: 'site',
    lastUpdated: '上次更新', // string | boolean
    searchMaxSuggestions: 5,
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/layout',
      '/menu',
      '/bar',
    ]
  }
}
