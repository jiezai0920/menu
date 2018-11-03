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
        title: '二级菜单',
        to: {
          path: '/bar.html',
        },
      },
      {
        title: '二级菜单',
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
        title: '二级菜单',
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
    url: 'http://baidu.com',
    target: '_blank',
    title: '百度',
  },
];
