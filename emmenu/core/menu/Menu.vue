<template>
  <div class="w-menu-warp">
    <div class="w-menu">
      <div class="w-menu-header">
        <img class="w-menu-header-icon" :src="power.logo" @error="errorFn">
      </div>
      <div class="w-menu-cont">
        <ul class="w-menu-list" v-if="listHome.length">
          <li class="w-menu-list-item" v-for="(rule, ruleIndex) in listHome" :key="ruleIndex">
            <!-- on -->
            <a href="javascript:;" class="w-menu-list-link" :class="{on: activeValue === rule.icon}" @click="goPath(rule)">
              <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_normal.png`)">
              <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_selected.png`)">
              <span class="w-menu-list-title">
                {{rule.name}}
              </span>
            </a>
          </li>
        </ul>
        <ul class="w-menu-list" v-if="listShop.length">
          <li class="w-menu-list-item" v-for="(rule, ruleIndex) in listShop" :key="ruleIndex">
            <a href="javascript:;" class="w-menu-list-link" :class="{on: activeValue === rule.icon}" @click="goPath(rule)">
              <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_normal.png`)">
              <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_selected.png`)">
              <span class="w-menu-list-title">
                {{rule.name}}
              </span>
            </a>
          </li>
        </ul>
        <ul class="w-menu-list margin0" v-if="listOrder.length">
          <li class="w-menu-list-more">更多服务</li>
          <li class="w-menu-list-item" v-for="(rule, ruleIndex) in listOrder" :key="ruleIndex">
            <a href="javascript:;" class="w-menu-list-link" :class="{on: activeValue === rule.icon}" @click="goPath(rule)">
              <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_normal.png`)">
              <img class="w-menu-list-img" :src="require(`assets/img/${rule.icon}_selected.png`)">
              <span class="w-menu-list-title">
                {{rule.name}}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="w-menu-footer">
        <a class="w-menu-quit" @click="modalShow = true">
          <img class="w-menu-quit-img" title="退出" :src="require(`assets/img/quit.png`)">
          <img class="w-menu-quit-img" title="退出" :src="require(`assets/img/quit_hover.png`)">
        </a>

        <a class="w-menu-quit" :href="`${env.ACCOUNT||env.VUE_APP_ACCOUNT}accountinformation`" target="_blank">
          <img class="w-menu-quit-img" title="账户" :src="require(`assets/img/setting.png`)">
          <img class="w-menu-quit-img" title="账户" :src="require(`assets/img/setting_hover.png`)">
        </a>
      </div>
    </div>
    <!-- 退出弹框 start -->
    <div class="w-menu-modal" v-if="modalShow">
      <div class="w-menu-modal-mask"></div>
      <div class="w-menu-modal-wrap">
        <div class="w-menu-modal-header">
          <div class="w-menu-modal-inner">退出账号</div>
          <div class="w-menu-modal-close" @click="modalShow = false">＋</div>
        </div>
        <div class="w-menu-modal-main">确定要退出账号？</div>
        <div class="w-menu-modal-footer">
          <button class="w-menu-modal-cancel" @click="modalShow = false">取消</button>
          <button class="w-menu-modal-ok" @click="modalOk">确定</button>
        </div>
      </div>
    </div>
    <!-- 退出弹框 end -->
    <!-- 实名认证 start -->
    <div v-if="needGuideAuth" class="w-menu-modal">
      <div class="w-menu-modal-mask"></div>
      <div class="w-menu-modal-authent">
        <div class="w-menu-modal-authent-head">
          实名认证提示
        </div>
        <div class="w-menu-modal-authent-body">
          <div>
            为了进一步规范平台内容管理，更好地保障商家和用户的合法权益，通过实名认证的商户才能正常使用平台功能。
          </div>
          <div v-if="needGuideType === 'auth'" class="w-menu-modal-authent-body-box">
            <div class="w-menu-modal-authent-body-box-list">
              <img  class="w-menu-modal-authent-body-box-list-image" :src="require(`assets/img/renzheng/jibenxinxi.png`)">
              <p class="w-menu-modal-authent-body-box-list-text">基本信息</p>
            </div>
            <div  class="w-menu-modal-authent-body-box-line"></div>
            <div class="w-menu-modal-authent-body-box-list">
              <img  class="w-menu-modal-authent-body-box-list-image" :src="require(`assets/img/renzheng/zhutixinxi.png`)">
              <p class="w-menu-modal-authent-body-box-list-text">主体信息</p>
            </div>
            <div  class="w-menu-modal-authent-body-box-line"></div>
            <div class="w-menu-modal-authent-body-box-list">
              <img  class="w-menu-modal-authent-body-box-list-image" :src="require(`assets/img/renzheng/tijiaoxinxi.png`)">
              <p class="w-menu-modal-authent-body-box-list-text">提交信息</p>
            </div>
            <div  class="w-menu-modal-authent-body-box-line"></div>
            <div class="w-menu-modal-authent-body-box-list">
              <img  class="w-menu-modal-authent-body-box-list-image" :src="require(`assets/img/renzheng/dengdaishenhe.png`)">
              <p class="w-menu-modal-authent-body-box-list-text">等待审核</p>
            </div>
          </div>
          <div v-if="needGuideType === 'info'" class="w-menu-modal-authent-body-box">
            <div class="w-menu-modal-authent-body-box-list">
              <img  class="w-menu-modal-authent-body-box-list-image" :src="require(`assets/img/renzheng/pinpai.png`)">
              <p class="w-menu-modal-authent-body-box-list-text">专属品牌露出</p>
            </div>
            <div  class="w-menu-modal-authent-body-box-line"></div>
            <div class="w-menu-modal-authent-body-box-list">
              <img  class="w-menu-modal-authent-body-box-list-image" :src="require(`assets/img/renzheng/touxiang.png`)">
              <p class="w-menu-modal-authent-body-box-list-text">专属头像标识</p>
            </div>
            <div  class="w-menu-modal-authent-body-box-line"></div>
            <div class="w-menu-modal-authent-body-box-list">
              <img  class="w-menu-modal-authent-body-box-list-image" :src="require(`assets/img/renzheng/kefu.png`)">
              <p class="w-menu-modal-authent-body-box-list-text">专属客服电话</p>
            </div>
          </div>
        </div>
        <div class="w-menu-modal-authent-footer">
          <div @click="goToAuth" class="w-menu-modal-authent-footer-btn">
            去实名认证
          </div>
        </div>
      </div>
    </div>
    <!-- 实名认证 end -->
  </div>
</template>
<script>
  import 'em-cookie';
  import 'em-jsonp';
  import message from 'message/index';
  import CONSTANT from 'helper/constant';
  import ajax from 'helper/ajax';
  import newRoot from 'helper/newRoot';

  export default {
    name: 'WMenu',
    data() {
      return {
        user: '',
        modalShow: false,
        callbackUrl: [],
        power: {},
        listHome: [],
        listShop: [],
        listOrder: [],
        needGuideType: '',
        needGuidePath: '',
        needGuideAuth: false,
      };
    },
    props: {
      env: {
        type: Object,
        default: () => {},
      },
      active: {
        type: String,
        default: '',
      },
      quitAction: String,
      rule: Object,
    },
    computed: {
      activeValue() {
        return this.active;
      },
    },
    watch: {
      $route() {
        const url = window.location.href;
        const flag = url.indexOf('accountinformation') >= 0 || url.indexOf('authinformation') >= 0;
        this.needGuideAuth = !flag && this.rule.org.need_guide_auth;
      },
    },
    mounted() {
      this.handleData();
    },
    methods: {
      errorFn() {
        // 如果报错就是默认图片
        this.power = Object.assign({}, this.power, {
          logo: 'https://static2.evente.cn/static/img/icon.jpg',
        });
      },
      // 处理权限接口数据
      handleData() {
        this.power = newRoot(this.rule, this.env);
        const menuFirstBlock = ['home', 'shop', 'event', 'member', 'order', 'finance'];
        const menuTwoBlock = ['distribution', 'marketing', 'data'];
        const menuThreeBlock = ['goods', 'form', 'meetup'];

        this.needGuidePath = this.rule.org.need_guide_path;
        this.needGuideType = this.rule.org.need_guide_type;

        const url = window.location.href;
        const flag = url.indexOf('accountinformation') >= 0 || url.indexOf('authinformation') >= 0;
        this.needGuideAuth = !flag && this.rule.org.need_guide_auth;

        this.power.menuList.forEach((item) => {
          if (menuFirstBlock.includes(item.icon)) {
            this.listHome.push(item);
          } else if (menuTwoBlock.includes(item.icon)) {
            this.listShop.push(item);
          } else if (menuThreeBlock.includes(item.icon)) {
            this.listOrder.push(item);
          }
        });
        this.$emit('analysised', this.power);
      },
      goPath(rule) {
        // staff
        if (rule.denied_tips) {
          message.error({
            content: rule.denied_tips,
          });
        } else if (rule.target === '_blank') {
          window.open(rule.path);
        } else {
          window.location.href = rule.path;
        }
      },
      modalOk() {
        this.modalShow = false;
        // this.goOut();
        this.logoutSuc();
      },
      goOut() {
        ajax({
          type: 'GET',
          action: this.quitAction,
          onSuccess: (res) => {
            if (res.code === CONSTANT.SUCCESS) {
              this.callbackUrl = res.data.url_list.slice();
              this.afterLogout(this.callbackUrl.length - 1);
            } else {
              message.error({
                content: res.message,
              });
            }
          },
          onError: (err, response) => {
            message.error({
              content: response.message,
            });
          },
        });
      },
      afterLogout(inow) {
        let theIndex = inow;
        window.$jsonp({
          url: this.callbackUrl[theIndex],
          success: (res) => {
            if (res.code === CONSTANT.SUCCESS) {
              if (theIndex === 0) {
                this.logoutSuc();
              } else {
                this.afterLogout(--theIndex);
              }
            } else {
              message.error({
                content: '登录失败',
              });
            }
          },
          error: () => {
            message.error({
              content: '登录失败',
            });
          },
        });
      },
      logoutSuc() {
        window.$cookie.remove(CONSTANT.EVENT_TOKE);
        window.$cookie.remove(CONSTANT.EVENT_USER);
        // 不加定时器，登录cookie还在
        setTimeout(() => {
          window.location.href = `${this.env.ACCOUNT || this.env.VUE_APP_ACCOUNT}login`;
        }, 0);
      },
      //去认证
      goToAuth() {
        window.location.href = this.needGuidePath;
      },
    },
  };
</script>
