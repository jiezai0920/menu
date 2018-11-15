export default [
  {
    title: '菜单',
    to: {
      path: '/menu.html',
    },
  },
  {
    title: '一级1',
    child: [
      {
        title: 'layout',
        to: {
          path: '/layout.html',
        },
      },
      {
        title: 'menu',
        to: {
          path: '/menu.html',
        },
      },
      {
        title: '二级腾讯',
        url: 'http://qq.com',
      },
    ],
  },
  {
    title: '一级2',
    child: [
      {
        title: 'menu',
        to: {
          path: '/menu.html',
        },
      },
      {
        title: '二级腾讯',
        url: 'http://qq.com',
      },
      {
        title: 'bar',
        to: {
          path: '/bar.html',
        },
      },
    ],
  },
  {
    url: 'http://baidu.com',
    target: '_blank',
    title: '百度',
  },
];
