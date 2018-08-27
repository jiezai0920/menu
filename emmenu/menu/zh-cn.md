# em 左侧菜单
> em 公共级左导航业务组件

## w-bar 案例演示

<div style="height:500px;">
  <w-bar class="demo-bar" name="数据大屏" data="data" :status="true"></w-bar>
</div>

``` vue
<div>
   <w-menu mode="ajax" :getMenuAction="menuAction" :processEnv="processValue" :ajaxHeaders="ajaxHeadersData" @getAllData="getAllData" @curMenuStatus="getCurMenu"></w-menu>
</div>
```

``` js
import WBar from './bar';

export default {
  components: {
    WBar,
  },
}
```

## w-menu 案例演示

<div>
  <w-menu class="demo-menu" mode="ajax" :getMenuAction="menuAction" :processEnv="processValue" :ajaxHeaders="ajaxHeadersData" @getAllData="getAllData" @curMenuStatus="getCurMenu"></w-menu>
</div>

``` vue
<div>
   <w-menu mode="ajax" :getMenuAction="menuAction" :processEnv="processValue" :ajaxHeaders="ajaxHeadersData" @getAllData="getAllData" @curMenuStatus="getCurMenu"></w-menu>
</div>
```

``` js
import WMenu from './menu';

export default {
  data() {
    return {
      menuAction: 'https://www.easy-mock.com/mock/59705d70a1d30433d838a12a/evente/power',
      processValue: 'testing',
       ajaxHeadersData: {
         'Authorization' : 'Authorization',
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

## w-menu API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|getMenuAction|获取菜单接口|String|是|-|
|processEnv|环境变量|String|是|development|
|hideBarMode|是否显示 bar 子菜单|Boolean|否|false|
|ajaxHeaders|获取菜单接口header信息|Object|否|{}|
|handleMenu|mode 为 handle 的时候，要处理的数据|Object|否|-|
|mode|handle: 只处理 handleMenu 参数传过来的数据， ajax 调用 v2 权限接口并处理数据 |String|否|handle|

## w-menu 方法

|事件名|说明|返回值|
|---|------|-----|
|getAllData|获取菜单时触发|-|
|curMenuStatus|获取当前选中的菜单名称|-|
|curBarStatus|获取当前选中子级的菜单名称|-|

## wbar API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|status|是否显示|Boolean|否|-|
|data|数据，当为字符串的时候默认获取字符串拼接的缓存|Object\|String|是|-|
|name|当前高亮的名字|String|否|-|

## w-bar 方法

|事件名|说明|返回值|
|---|------|-----|
|getAllData|获取菜单时触发|-|
|curMenuStatus|获取当前选中的菜单名称|-|
|curBarStatus|获取当前选中子级的菜单名称|-|

<script>
import WBar from './Bar';
import WMenu from './Menu';

export default {
  data() {
    return {
      menuAction: 'https://www.easy-mock.com/mock/59705d70a1d30433d838a12a/evente/power',
      processValue: 'testing',
       ajaxHeadersData: {
         'Authorization' : 'Authorization',
       }
    }
  },
  components: {
    WMenu,
    WBar,
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

.demo-menu {
  position: relative;
}

.demo-bar {
  position: relative;
  height: 300px;
  left: 0;
}
</style>
