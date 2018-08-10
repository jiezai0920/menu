# em 左侧菜单
> em 公共级左导航业务组件

## 案例演示

<div>
  <w-menu mode="ajax" :getMenuAction="menuAction" :processEnv="processValue" :ajaxHeaders="ajaxHeadersData" @getAllData="getAllData" @curMenuStatus="getCurMenu"></w-menu>
</div>

``` vue
<div>
   <w-menu mode="ajax" :getMenuAction="menuAction" :processEnv="processValue" :ajaxHeaders="ajaxHeadersData" @getAllData="getAllData" @curMenuStatus="getCurMenu"></w-menu>
</div>
```

``` js
import 'em-cookie';
import WMenu from './index';

export default {
  data() {
    return {
     menuAction: 'https://www.easy-mock.com/mock/59705d70a1d30433d838a12a/evente/power',
     processValue: 'development',
     ajaxHeadersData: {
       'Authorization' :window.$cookie.get('Authorization'),
     }
    }
  },
  components: {
    WMenu,
  },
  methods: {
    getAllData(val){
     console.log('获取所有的值',val)
    },
    getCurMenu(val){
      console.log('当前选中菜单名称',val)
    }
  },
}
```

## 如何使用

使用 `<w-menu />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:
```` html
<w-menu><w-menu />
````

## API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|getMenuAction|获取菜单接口|String|是|-|
|processEnv|环境变量|String|是|development|
|ajaxHeaders|获取菜单接口header信息|Object|否|{}|
|handleMenu|mode 为 handle 的时候，要处理的数据|Object|否|-|
|mode|handle: 只处理 handleMenu 参数传过来的数据， ajax 调用 v2 权限接口并处理数据 |String|否|handle|

## 方法

|事件名|说明|返回值|
|---|------|-----|
|getAllData|获取菜单时触发|-|
|curMenuStatus|获取当前选中的菜单名称|-|

<script>
import 'em-cookie';
import WMenu from './index';

export default {
  data() {
    return {
      menuAction: 'https://www.easy-mock.com/mock/59705d70a1d30433d838a12a/evente/power',
      processValue: 'development',
       ajaxHeadersData: {
         'Authorization' :window.$cookie.get('Authorization'),
       }
    }
  },
  components: {
    WMenu,
  },
  methods: {
    getAllData(val){
      console.log('获取所有的值',val)
    },
    getCurMenu(val){
      console.log('当前选中菜单名称',val)
    }
  },
}
</script>

<style lang="scss">
@import './style/menu.scss';
</style>
