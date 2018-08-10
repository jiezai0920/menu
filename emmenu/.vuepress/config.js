const base = process.env.GH ? '/menu/' : '/'

module.exports = {
  title: '菜单',
  base,
  head: [
    ['link', { rel: 'menu', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'em-fe/menu',
    editLinks: false,
    lastUpdated: '上次更新', // string | boolean
    searchMaxSuggestions: 5,
    docsDir: '',
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/menu/zh-cn',
    ]
  }
}
