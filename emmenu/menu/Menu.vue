<template>
  <div class="w-menu" :class="{[`${prefix}-menu`]: !!prefix}" ref="menu">
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
  import hOwnProperty from 'em-underline/hOwnProperty';
  import CONSTANT from './common/constant';
  import ajax from '../tools/ajax';
  import newRoot from '../tools/newRoot';
  import { setStorage, getStorage } from '../tools/localstorage';
  import menuMessage from './component/message/index';

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
      mode: {
        type: String,
        default: 'handle', // 菜单模式， handle 只是处理一下 业务里面返回的数据 , ajax 请求权限 v2 接口并处理数据
      },
      handleMenu: String,
      prefix: String,
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
      if (this.mode === 'handle') {
        this.handleData();
      } else {
        this.getMenu();
      }
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
      handleData() {
        if (this.handleMenu) {
          this.AllDataToParent = newRoot(this.handleMenu, this.iconObj);
          this.$emit('getAllData', this.AllDataToParent);
        }
      },
      getMenu() {
        if (this.getMenuAction) {
          ajax({
            headers: this.headers,
            type: 'GET',
            action: this.getMenuAction,
            onSuccess: (res) => {
              if (res.code === CONSTANT.SUCCESS) {
                this.AllDataToParent = newRoot(res.data, this.iconObj);
                this.header = this.AllDataToParent.header;
                this.datas = this.AllDataToParent.menuList;
                this.$emit('getAllData', this.AllDataToParent);
                if (getStorage(CONSTANT.CURMENUOBJECT)) {
                  this.curMenuObject = getStorage(CONSTANT.CURMENUOBJECT);
                } else {
                  this.curMenuObject = this.header.name;
                  setStorage(CONSTANT.CURMENUOBJECT, this.curMenuObject);
                }
              } else {
                menuMessage.error({
                  content: res.message,
                });
              }
            },
            onError: (err, response) => {
              menuMessage.error({
                content: response.message,
              });
            },
          });
        }
      },
      goToPath(item) {
        if (hOwnProperty(item, 'path')) {
          this.curMenuObject = item.name;
          setStorage(CONSTANT.CURMENUOBJECT, this.curMenuObject);
          window.location.href = item.path;
        }
      },
      goToUrl(item) {
        if (hOwnProperty(item, 'url')) {
          this.curMenuObject = item.name;
          setStorage(CONSTANT.CURMENUOBJECT, this.curMenuObject);
          window.open(item.url);
        }
      },
    },
    components: {
      menuMessage,
    },
  };
</script>
