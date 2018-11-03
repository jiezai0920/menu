# em 左侧菜单
> em 公共级左导航业务组件

<w-menu :env="env" :rule="menuTestRule" class="demo" eventUrl="http://www.qq.com/" lightUrl="http://news.qq.com/" logoutAction="https://www.easy-mock.com/mock/5ab386ecca15e11ded65b593/chinese/getLoginOutCallBackUrl"></w-menu>


<script>
import WMenu from '../emmenu/core/menu/Menu';
//  权限测试数据
import menuTestRule from './menudata';

export default {
  data() {
    return {
      env: {
        ACCOUNT: "http://localhost:8180/",
        ACTIVITY: "http://localhost:8382/",
        API: "http://gateway.inner.evente.cn:8000",
        BEVENT: "http://localhost:8183/",
        CDN: "http://localhost:8183",
        COUPON: "http://coupon.inner.evente.cn:30390/",
        DATA: "http://localhost:8184/",
        EVENTT: "http://event.inner.evente.cn:30391/",
        FINANCE: "http://localhost:8186/",
        FORM: "http://localhost:8182/",
        FREIGHT: "http://b.inner.evente.cn:30390/",
        GATEWAY: "http://gateway.inner.evente.cn:8000/",
        GOODS: "http://goods.inner.evente.cn:30390/",
        LIGHTAVTIVE: "http://localhost:8383/",
        MARKETING: "http://localhost:8183/",
        MATCHLINK: "http://e.inner.evente.cn:30370/",
        MENBER: "http://localhost:8181/",
        NODE_ENV: "development",
        ORDER: "http://localhost:8185/",
      },
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
  height: 500px;
}

.page {
  position: relative;
  z-index: 9999;
  padding-left: 0;
  margin-left: 20rem;
}
</style>
