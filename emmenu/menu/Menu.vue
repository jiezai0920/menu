<template>
  <div class="w-menu-warp">
    <div class="w-menu" :class="{'w-menu-hover': hover}" @mouseenter="menuEnter" @mouseleave="menuLeave">
      <div class="w-menu-header">
        <img class="w-menu-header-icon" :src="icon">
        <span class="w-menu-header-title">{{title}}</span>
      </div>
      <ul class="w-menu-list">
        <li class="w-menu-list-item">
          <a href="#" class="w-menu-list-link on">
            <img class="w-menu-list-img" src="../assets/img/form_normal.png">
            <img class="w-menu-list-img" src="../assets/img/form_selected.png">
            <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
          </a>
        </li>
      </ul>
      <a href="javascript:;" class="w-menu-release" @click="goIndex">
        <img class="w-menu-release-img" src="../assets/img/release.png">
        <span class="w-menu-release-title">免费发活动</span>
      </a>
      <a class="w-menu-quit" @click="logout">
        <img class="w-menu-quit-img" src="../assets/img/quit.png">
        <img class="w-menu-quit-img" src="../assets/img/quit_hover.png">
        <span class="w-menu-quit-title">退出</span>
      </a>
    </div>
    <!-- 免费发活动 start -->
    <div v-if="isMask" class="w-menu-mask">
      <div class="w-menu-mask-box">
        <span class="w-menu-mask-close" @click="closeMask">+</span>
        <h4 class="w-menu-mask-title">选择发布的活动类型</h4>
        <div class="w-menu-mask-modal">
          <a :href="`${env.ACTIVITY}light`" class="w-menu-mask-light">
            <img class="w-menu-mask-img" src="../assets/img/light.svg">
            <span class="w-menu-mask-name">报名</span>
            <span class="w-menu-mask-content">聚会、沙龙、排队、培训、会议、粉丝赠票、签到二维码、可审核、可付费、邀请函</span>
          </a>
          <a :href="`${env.EVENTT}event/pub`" class="w-menu-mask-light">
            <img class="w-menu-mask-img" src="../assets/img/event.svg">
            <span class="w-menu-mask-name">票务</span>
            <span class="w-menu-mask-content">剧场、音乐节、巡演、赛事、会议、展览、游园、多票种、多场次、选座、秒杀抢票、多种核销、代金券、年卡、外币支付</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 免费发活动 end -->
    <!-- 退出弹框 start -->
    <div class="w-menu-modal" v-if="modalShow">
      <div class="w-menu-modal-mask"></div>
      <div class="w-menu-modal-wrap">
        <div class="w-menu-modal-header">
          <div class="w-menu-modal-inner">退出账号</div>
          <div class="w-menu-modal-close" @click="modalClose">＋</div>
        </div>
        <div class="w-menu-modal-main">确定要退出账号？</div>
        <div class="w-menu-modal-footer">
          <button class="w-menu-modal-cancel" @click="modalCancel">取消</button>
          <button class="w-menu-modal-ok" @click="modalOk">确定</button>
        </div>
      </div>
    </div>
    <!-- 退出弹框 end -->
  </div>
</template>
<script>
  import 'em-cookie';
  import 'em-jsonp';
  import message from '../component/message/index';
  import CONSTANT from '../helper/constant';
  import ajax from '../helper/ajax';

  export default {
    name: 'WMenu',
    data() {
      return {
        url: this.env,
        // hover: false,
        hover: true,

        isMask: false,
        user: '',
        modalShow: false,
        callbackUrl: [],
      };
    },
    props: {
      env: {
        type: Object,
        default: () => {},
      },
      title: {
        type: String,
        default: '活动主办自己的系统',
      },
      icon: {
        type: String,
        default: 'https://static2.evente.cn/static/img/icon.jpg',
      },
      logoutAction: String,
      rule: Object,
    },
    mounted() {
      console.log(message, 'WMessage');
    },
    methods: {
      menuEnter() {
        this.hover = true;
      },
      menuLeave() {
        this.hover = false;
      },
      // 免费发活动和退出 start
      logout() {
        this.modalShow = true;
      },
      modalClose() {
        this.modalShow = false;
      },
      modalCancel() {
        this.modalShow = false;
      },
      modalOk() {
        this.modalShow = false;
        this.goOut();
      },
      goOut() {
        ajax({
          type: 'GET',
          action: this.logoutAction,
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
      goIndex() {
        this.isMask = true;
      },
      closeMask() {
        this.isMask = false;
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
          window.location.href = `${this.env.ACCOUNT}login`;
        }, 0);
      },
      // 免费发活动和退出 end
    },
  };
</script>
