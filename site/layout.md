# 真正的页面

<w-layout :env="env" active="home" :rule="menuTestRule" class="demo" logoutAction="https://www.easy-mock.com/mock/5ab386ecca15e11ded65b593/chinese/getLoginOutCallBackUrl" :navs="barTestRule" menuName="123123" barName="二级导航" :show="true">
  <h1>这是真正的标题</h1>
  <p>这是真正内容</p>
</w-layout>

<script>
import WLayout from '../emmenu/core/layout/Layout';
//  权限测试数据
import menuTestRule from './menudata';
//  二级白色导航测试数据
import barTestRule from './barDatas';
//  环境地址配置
import envConf from './env';

export default {
  data() {
    return {
      env: envConf.production,
      barTestRule,
      menuTestRule,
    };
  },
  components: {
    WLayout,
  },
  methods: {
  },
}
</script>

<style lang="scss">
@import '../emmenu/assets/css/layout.scss';
@import '../emmenu/assets/css/menu.scss';
@import '../emmenu/assets/css/bar.scss';

.demo {
  position: relative;
  height: 657px;
  border: 1px solid #dcdcdc;
}
</style>
