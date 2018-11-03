# bar

<w-bar class="demo" :navs="navDatas" title="二级导航"></w-bar>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|title|导航标题|String|否|无|
|navs|导航数据。目前 路由跳转只支持 path 方法。|Array|否|[]|
|disabled|禁用|Boolean|否|false|
|open|是否全部打开|Boolean|否|false|

<script>
import WBar from '../emmenu/core/bar/Bar';

export default {
  data() {
    return {
      navDatas: [
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
      ],
    };
  },
  components: {
    WBar,
  },
}
</script>

<style lang="scss">
@import '../emmenu/assets/css/bar.scss';

.demo {
  position: relative;
  height: 500px;
  border: 1px solid #dcdcdc;
}
</style>
