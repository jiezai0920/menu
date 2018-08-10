<template>
  <div class="w-menu" ref="menu">
    <h3 class="w-menu-header" :class="{'w-menu-header-on': curMenuObject === header.name}">
      <router-link v-if="header.router" :to="header.router" class="w-menu-header-link"
                   exact-active-class="w-menu-header-on">
        <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_selected@2x.png')"
             v-if="header.icon && curMenuObject === header.name">
        <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_normal@2x.png')"
             v-if="header.icon && curMenuObject !== header.name">
        <span class="w-menu-header-text">{{header.name}}</span>
      </router-link>
      <div v-else class="w-menu-header-link" @click="goToPath(header)">
        <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_selected@2x.png')"
             v-if="header.icon && curMenuObject === header.name">
        <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_normal@2x.png')"
             v-if="header.icon && curMenuObject !== header.name">
        <span class="w-menu-header-text">{{header.name}}</span>
      </div>
    </h3>
    <ul class="w-menu-list" v-for="(menu, menuIndex) in datas" :key="menuIndex">
      <template v-for="(item, itemIndex) in menu">
        <router-link v-if="item.router" class="w-menu-list-li" :to="item.router" tag="li"
                     exact-active-class="w-menu-list-li-on">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected@2x.png')"
               v-if="item.icon && curMenuObject === item.name">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal@2x.png')"
               v-if="item.icon && curMenuObject !== item.name">
          <span class="w-menu-text">{{item.name}}</span>
        </router-link>
        <li v-else-if="item.path" class="w-menu-list-li"
            :class="{'w-menu-list-li-on': curMenuObject === item.name}"
            @click="goToPath(item)">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected@2x.png')"
               v-if="item.icon && curMenuObject === item.name">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal@2x.png')"
               v-if="item.icon && curMenuObject !== item.name">
          <span class="w-menu-text">{{item.name}}</span>
        </li>
        <li v-else-if="item.url" class="w-menu-list-li"
            :class="{'w-menu-list-li-on': curMenuObject === item.name}"
            @click="goToUrl(item)">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected@2x.png')"
               v-if="item.icon && curMenuObject === item.name">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal@2x.png')"
               v-if="item.icon && curMenuObject !== item.name">
          <span class="w-menu-text">{{item.name}}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
  import vue from 'vue';
  import 'em-cookie';
  import CONSTANT from './common/constant';
  import ajax from '../tools/ajax';
  import newRoot from '../tools/newRoot';
  import WMessage from './component/message/index';

  if (!vue.prototype.$WMessage) {
    Object.defineProperties(vue.prototype, {
      $WMessage: {
        get() {
          return WMessage;
        },
      },
    });
  }
  export default {
    name: 'WMenu',
    data() {
      return {
        iconObj: {
          home: 'wodediannao',
          event: 'yanchu',
          goods: 'wodeshangpin',
          form: 'wenjuantiaocha1',
          order: 'dingdanzhongxin1',
          finance: 'caiwuzhongxin',
          marketing: 'yingxiaogongju',
          added: 'zengzhigongju',
        },
        curMenuObject: '',
        user: '',
        AllDataToParent: {},
        header: {},
        headers: {},
        datas: [
          [],
          [],
          [],
        ],
      };
    },
    props: {
      className: {
        type: String,
        default: '',
      },
      getMenuAction: String,
      processEnv: {
        type: String,
        default: 'development',
      },
      ajaxHeaders: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    mounted() {
      window.processEnv = this.processEnv;
      this.headers = Object.assign({}, this.ajaxHeaders);
      this.getMenu();
    },
    watch: {
      curMenuObject: {
        handler() {
          this.$emit('curMenuStatus', this.curMenuObject);
        },
        deep: true,
      },
    },
    methods: {
      getMenu() {
        ajax({
          headers: this.headers,
          type: 'GET',
          action: this.getMenuAction,
          onSuccess: (res) => {
            if (res.code === CONSTANT.SUCCESS) {
              this.AllDataToParent = newRoot(res.data, this.iconObj);
              this.header = newRoot(res.data, this.iconObj).header;
              this.datas = newRoot(res.data, this.iconObj).menuList;
              this.$emit('getAllData', this.AllDataToParent);
              if (window.$cookie.get(CONSTANT.CURMENUOBJECT)) {
                this.curMenuObject = window.$cookie.get(CONSTANT.CURMENUOBJECT);
              } else {
                this.curMenuObject = this.header.name;
                window.$cookie.set(CONSTANT.CURMENUOBJECT, this.curMenuObject);
              }
            } else {
              this.$WMessage.error({
                content: res.message,
              });
            }
          },
          onError: (err, response) => {
            this.$WMessage.error({
              content: response.message,
            });
          },
        });
      },
      goToPath(item) {
        if (this.hOwnProperty(item, 'path')) {
          window.location.href = item.path;
          this.curMenuObject = item.name;
          window.$cookie.set(CONSTANT.CURMENUOBJECT, this.curMenuObject);
        }
      },
      goToUrl(item) {
        if (this.hOwnProperty(item, 'url')) {
          window.open(item.url);
          this.curMenuObject = item.name;
          window.$cookie.set(CONSTANT.CURMENUOBJECT, this.curMenuObject);
        }
      },
      hOwnProperty(item, attr) {
        return Object.prototype.hasOwnProperty.call(item, attr);
      },
    },
  };
</script>
