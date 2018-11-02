<template>
  <div class="w-menu" :class="{'w-menu-hover': hover}" @mouseenter="menuEnter" @mouseleave="menuLeave">
    <div class="w-menu-header">
      <img class="w-menu-header-icon" :src="icon">
      <span class="w-menu-header-title">{{title}}</span>
    </div>
    <ul class="w-menu-list">
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link on">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
      <li class="w-menu-list-item">
        <a href="#" class="w-menu-list-link">
          <img class="w-menu-list-img" :src="require('../assets/img/form_normal.png')">
          <img class="w-menu-list-img" :src="require('../assets/img/form_selected.png')">
          <span class="w-menu-list-title">H5/小程序店铺H5/小程序店铺H5/小程序店铺</span>
        </a>
      </li>
    </ul>
    <a href="#" class="w-menu-release">
      <img class="w-menu-release-img" :src="require('../assets/img/release.png')">
      <span class="w-menu-release-title">免费发活动</span>
    </a>
    <a class="w-menu-quit">
      <img class="w-menu-quit-img" :src="require('../assets/img/quit.png')">
      <img class="w-menu-quit-img" :src="require('../assets/img/quit_hover.png')">
      <span class="w-menu-quit-title">退出</span>
    </a>
  </div>
</template>
<script>
  export default {
    name: 'WMenu',
    data() {
      return {
        url: this.env,
        // hover: false,
        hover: true,
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
      rule: Object,
      base: {
        type: String,
        default: '/',
      },
    },
    mounted() {

    },
    methods: {
      menuEnter() {
        this.hover = true;
      },
      menuLeave() {
        this.hover = false;
      },
    },
    components: {
    },
    watch: {
    },
  };
</script>
