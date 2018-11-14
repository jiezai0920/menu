# em 左侧菜单
> em 公共级左导航业务组件

<w-menu :env="env" :rule="menuTestRule" class="demo" active="home" logoutAction="https://www.easy-mock.com/mock/5ab386ecca15e11ded65b593/chinese/getLoginOutCallBackUrl"></w-menu>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|env|根据环境变化的各项目链接|String|否|{}|
|title|主办名称|Array|否|活动主办自己的系统|
|icon|主办icon|Boolean|否|https://static2.evente.cn/static/img/icon.jpg|
|logoutAction|退出登录的接口地址|String|否|false|
|rule|权限接口请求回来的数据|Array|否|false|

### 方法

|事件名|说明|返回值|
|---|------|-----|
|analysised|获取菜单时触发|所有顶级权限|

<script>
import WMenu from '../emmenu/core/menu/Menu';
//  权限测试数据
import menuTestRule from './menudata';
//  环境地址配置
import envConf from './env';

export default {
  data() {
    return {
      env: envConf.production,
      menuTestRule,
    };
  },
  components: {
    WMenu,
  },
  methods: {
    getAllData(val){
      console.log('获取所有的值',val)
    }
  },
}
</script>

<style lang="scss">
@import '../emmenu/assets/css/menu.scss';

.demo {
  position: relative;
  height: 657px;
}

.page {
  position: relative;
  z-index: 9999;
  padding-left: 0;
  margin-left: 20rem;
}
</style>
