# 导航

<w-bar class="demo" :navs="barTestRule" title="二级导航"></w-bar>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|title|导航标题|String|否|无|
|navs|导航数据。目前 路由跳转只支持 path 方法。|Array|否|[]|
|disabled|禁用|Boolean|否|false|
|open|是否全部打开|Boolean|否|false|
|collapse|是否折叠按钮|Boolean|否|true|
|show|是否展开|Boolean|否|true|

<script>
import WBar from '../emmenu/core/bar/Bar';
//  二级白色导航测试数据
import barTestRule from './barDatas';

export default {
  data() {
    return {
      barTestRule,
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
