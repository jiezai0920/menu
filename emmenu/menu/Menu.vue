<template>
  <div class="w-menu" :class="{[`${prefix}-menu`]: !!prefix}" ref="menu"
  @mouseleave="hideTime()">
    <div class="w-menu-main">
      <h3 class="w-menu-header" :class="{'w-menu-header-on': curMenuObject === header.name}">
        <router-link v-if="header.router" :to="header.router" class="w-menu-header-link"
                     exact-active-class="w-menu-header-on">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_selected.png')"
               v-if="header.icon && curMenuObject === header.name">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_normal.png')"
               v-if="header.icon && curMenuObject !== header.name">
          <span class="w-menu-header-text">{{header.name}}</span>
        </router-link>
        <div v-else class="w-menu-header-link" @click="goToPath(header)">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_selected.png')"
               v-if="header.icon && curMenuObject === header.name">
          <img class="w-menu-list-li-img" v-bind:src="require('./img/'+header.icon+'_normal.png')"
               v-if="header.icon && curMenuObject !== header.name">
          <span class="w-menu-header-text">{{header.name}}</span>
        </div>
      </h3>
      <ul class="w-menu-list">
        <template v-for="(item, itemIndex) in datas">
          <router-link v-if="item.router" class="w-menu-list-li" :to="item.router" tag="li"
                       exact-active-class="w-menu-list-li-on"
                       @mouseenter="hideTime()">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected.png')"
                 v-if="item.icon && curMenuObject === item.name">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal.png')"
                 v-if="item.icon && curMenuObject !== item.name">
            <span class="w-menu-text">{{item.name}}</span>
          </router-link>
          <li v-else-if="item.path" class="w-menu-list-li"
              :class="{'w-menu-list-li-on': curMenuObject === item.name}"
              @click="goToPath(item)"
              @mouseenter="hideTime()">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected.png')"
                 v-if="item.icon && curMenuObject === item.name">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal.png')"
                 v-if="item.icon && curMenuObject !== item.name">
            <span class="w-menu-text">{{item.name}}</span>
          </li>
          <li v-else-if="item.source" class="w-menu-list-li"
              :class="{'w-menu-list-li-on': curMenuObject === item.name}"
              @mouseenter="showTime(item)">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected.png')"
                 v-if="item.icon && curMenuObject === item.name">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal.png')"
                 v-if="item.icon && curMenuObject !== item.name">
            <span class="w-menu-text">{{item.name}}</span>
          </li>
          <li v-else-if="item.url" class="w-menu-list-li"
              :class="{'w-menu-list-li-on': curMenuObject === item.name}"
              @click="goToUrl(item)"
              @mouseenter="hideTime()">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_selected.png')"
                 v-if="item.icon && curMenuObject === item.name">
            <img class="w-menu-list-li-img" v-bind:src="require('./img/'+item.icon+'_normal.png')"
                 v-if="item.icon && curMenuObject !== item.name">
            <span class="w-menu-text">{{item.name}}</span>
          </li>
        </template>
      </ul>
    </div>
    <div class="w-menu-bar" :class="{['w-menu-bar-on']: barStatus}">
      <h4 class="w-menu-bar-title" v-show="barData.name">{{barData.name}}</h4>
      <ul class="w-menu-bar-list" v-show="barData.children">
        <li class="w-menu-bar-item" :class="{on: curBarObject === child.name}" v-for="child in barData.child" @click="goToBarPath(child, barData)">{{child.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import hOwnProperty from 'em-underline/hOwnProperty';
  import CONSTANT from './common/constant';
  import ajax from '../tools/ajax';
  import newRoot from '../tools/newRoot';
  import { setStorage, getStorage } from '../tools/localstorage';
  import menuMessage from './component/message/index';
  import development from '../menu/common/development';

  const {
    ALIASES,
    MODULE_NAME,
    CUR_MENU_OBJECT,
    CUR_BAR_OBJECT,
    SUCCESS,
  } = CONSTANT;

  export default {
    name: 'WMenu',
    data() {
      return {
        iconObj: {
          home: 'kzt',
          event: 'pw',
          meetup: 'bm',
          goods: 'sp',
          form: 'bd',
          order: 'dd',
          data: 'sj',
          finance: 'cw',
          marketing: 'yx',
          member: 'hy',
          shop: 'dp',
        },
        curMenuObject: '',
        curBarObject: '',
        user: '',
        menusData: {},
        header: {},
        headers: {},
        datas: [],
        barStatus: false,
        barData: [],
        pathNoAuth: `${development[this.processEnv].member}error`,
      };
    },
    props: {
      mode: {
        type: String,
        default: 'handle', // 菜单模式， handle 只是处理一下 业务里面返回的数据 , ajax 请求权限 v2 接口并处理数据
      },
      handleMenu: Array,
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
      this.headers = Object.assign({}, this.ajaxHeaders);
      if (this.mode === 'handle') {
        this.handleData();
      } else {
        this.getMenu();
      }
    },
    methods: {
      handleData() {
        if (this.handleMenu) {
          this.afterrHandle(this.handleMenu);
        }
      },
      getMenu() {
        if (this.getMenuAction) {
          ajax({
            headers: this.headers,
            type: 'GET',
            action: this.getMenuAction,
            onSuccess: (res) => {
              if (res.code === SUCCESS) {
                this.afterrHandle(res.data);
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
      afterrHandle(data) {
        this.menusData = newRoot(data, this.processEnv, this.iconObj);
        this.header = this.menusData.header;
        this.datas = this.menusData.menuList;
        const { dataauth } = this.menusData;
        const shopAuth = this.menusData.marketingauth[ALIASES.SHOP].is_auth;
        this.marketBar = [{
          name: '促销',
          path: `${development[this.processEnv].account}salespromotion`,
        }, {
          name: '店铺',
          path: shopAuth ? development[this.processEnv].shop : this.pathNoAuth,
        }, {
          name: '分销',
          path: development[this.processEnv].distri,
        }, {
          name: '其他',
          path: `${development[this.processEnv].account}theother`,
        }];
        this.dataBar = [{
          name: '手机号分析',
          path: dataauth[ALIASES.DATA_MOBILE_ANALYZE] ? `${development[this.processEnv].data}mobileanalyze` : this.pathNoAuth,
        }, {
          name: '身份证分析',
          path: dataauth[ALIASES.DATA_IDENTITY_ANALYZE] ? `${development[this.processEnv].data}identityanalyze` : this.pathNoAuth,
        }, {
          name: '数据大屏',
          path: dataauth ? `${development[this.processEnv].data}profile` : this.pathNoAuth,
        }];
        this.$emit('getAllData', this.menusData);

        if (getStorage(CUR_MENU_OBJECT)) {
          this.curMenuObject = getStorage(CUR_MENU_OBJECT);
        } else {
          this.curMenuObject = this.header.name;
          setStorage(CUR_MENU_OBJECT, this.curMenuObject);
        }
        if (getStorage(CUR_BAR_OBJECT)) {
          this.curBarObject = getStorage(CUR_BAR_OBJECT);
        }
        this.matchUrl();
      },
      // 如果直接按浏览器返回按钮，状态会失效
      matchUrl() {
        const {
          href,
        } = window.location;
        // 检测主要除了 bar 之外的一级菜单
        let inSite = this.datas.filter(dataKey => href.indexOf(dataKey.path) > -1);
        // 检测头部
        if (inSite.length === 0) {
          inSite = href.indexOf(this.header.path) > -1 ? [this.header] : [];
        }

        this.curMenuObject = inSite.length > 0 ? inSite[0].name : '';
        // 如果一级 不带有 bar 菜单中并未匹配到
        // 匹配营销
        if (!this.curMenuObject) {
          inSite = this.marketBar.filter(dataKey => href.indexOf(dataKey.path) > -1);
          this.curMenuObject = inSite.length > 0 ? '营销' : '';
          this.curBarObject = inSite.length > 0 ? inSite[0].name : '';
        }
        // 匹配数据
        if (!this.curMenuObject) {
          inSite = this.dataBar.filter(dataKey => href.indexOf(dataKey.path) > -1);
          this.curMenuObject = inSite.length > 0 ? '数据' : '';
          this.curBarObject = inSite.length > 0 ? inSite[0].name : '';
        }
      },
      goToPath(item) {
        if (hOwnProperty(item, 'path')) {
          this.curMenuObject = item.name;
          setStorage(CUR_MENU_OBJECT, this.curMenuObject);
          if (typeof window !== 'undefined') {
            window.location.href = item.path;
          }
        }
      },
      goToUrl(item) {
        if (hOwnProperty(item, 'url')) {
          this.curMenuObject = item.name;
          setStorage(CUR_MENU_OBJECT, this.curMenuObject);
          if (typeof window !== 'undefined') {
            window.open(item.url);
          }
        }
      },
      goToBarPath(item, allData) {
        if (hOwnProperty(item, 'path')) {
          this.curMenuObject = allData.name;
          this.curBarObject = item.name;
          setStorage(CUR_MENU_OBJECT, this.curMenuObject);
          setStorage(CUR_BAR_OBJECT, this.curBarObject);
          if (typeof window !== 'undefined') {
            window.location.href = item.path;
          }
        }
      },
      showTime(item) {
        this.barStatus = true;
        let newItem = null;
        if (item.source.module_name === MODULE_NAME.MARKET) {
          newItem = this.showMarket(item);
        } else {
          newItem = this.showData(item);
        }
        this.barData = newItem.source;
      },
      showMarket(item) {
        item.source.child = this.marketBar.slice();
        return item;
      },
      showData(item) {
        item.source.child = this.dataBar.slice();
        return item;
      },
      hideTime() {
        this.barStatus = false;
        this.barData = [];
      },
    },
    components: {
      menuMessage,
    },
    watch: {
      curMenuObject: {
        handler() {
          this.$emit('curMenuStatus', this.curMenuObject);
          this.$emit('curBarStatus', this.curBarObject);
        },
        deep: true,
      },
    },
  };
</script>
