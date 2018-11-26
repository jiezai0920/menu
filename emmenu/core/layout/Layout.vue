<template>
  <div class="w-layout" :class="{'on': !mainStatus}">
    <w-menu :env="env" :active="activeValue" :rule="rule" :logoutAction="logoutAction" @analysised="analysised"></w-menu>
    <w-bar :navs="navsValue" :active="barActiveValue" :disabled="disabledValue" :title="barNameValue" :show="showStatus1" v-if="navsValue.length" :collapse="collapseValue" @collapsed="changeShowStatus"></w-bar>
    <div class="w-layout-main" :class="{'w-layout-main-large': !navsValue.length}">
      <span class="w-layout-collapse w-layout-collapse-hide" v-show="!mainStatus" v-if="navsValue.length" @click="openBar">
        <img class="w-bar-collapse-icon" :src="require('assets/img/corrw.png')">
      </span>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import WBar from '../bar/Bar';
import WMenu from '../menu/Menu';

export default {
  name: 'WLayout',
  data() {
    return {
      mainStatus: true,
      showStatus1: true,
    };
  },
  props: {
    barName: String,
    navs: {
      type: Array,
      default: () => [],
    },
    open: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    env: {
      type: Object,
      default: () => {},
    },
    collapse: { // 是否有收起
      type: Boolean,
      default: true,
    },
    active: {
      type: String,
      default: '',
    },
    barActive: String,
    show: Boolean, // 二级是否显示
    logoutAction: String,
    rule: Object,
  },
  computed: {
    activeValue() {
      return this.active;
    },
    navsValue() {
      return this.navs.slice();
    },
    barActiveValue() {
      return this.barActive;
    },
    barNameValue() {
      return this.barName;
    },
    disabledValue() {
      return this.disabled;
    },
    showStatus() {
      return this.show;
    },
    collapseValue() {
      return this.collapse;
    },
  },
  methods: {
    analysised(power) {
      this.$emit('analysised', power);
    },
    openBar() {
      this.showStatus1 = true;
      this.mainStatus = true;
    },
    changeShowStatus(val) {
      this.showStatus1 = val;
      this.updateMain(val);
    },
    updateMain(val) {
      this.mainStatus = val;
    },
  },
  components: {
    WMenu,
    WBar,
  },
};
</script>
