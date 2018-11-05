<template>
  <div class="w-layout" :class="{'on': !mainStatus}">
    <w-menu :env="env" :icon="iconValue" :rule="rule" :logoutAction="logoutAction" :title="menuNameValue"></w-menu>
    <w-bar :navs="navsValue" :disabled="disabledValue" :title="barNameValue" :show="showStatus" v-if="navsValue.length" :collapse="collapseValue" @collapsed="changeShowStatus"></w-bar>
    <div class="w-layout-main">
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
      navsValue: [],
      barNameValue: '',
      menuNameValue: '',
      disabledValue: false,
      iconValue: '',
      showStatus: true,
      mainStatus: true,
      collapseValue: false,
    };
  },
  props: {
    barName: String,
    menuName: String,
    icon: String,
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
    show: Boolean, // 二级是否显示
    logoutAction: String,
    rule: Array,
  },
  mounted() {
    this.updateIcon(this.icon);
    this.updateNavs(this.navs);
    this.updateMenuName(this.menuName);
    this.updateBarName(this.barName);
    this.updateDisabled(this.disabled);
    this.updateShow(this.show);
    this.updateCollapse(this.collapse);
  },
  methods: {
    changeShowStatus(val) {
      this.updateMain(val);
    },
    updateNavs(val) {
      this.navsValue = val.slice();
    },
    updateCollapse(val) {
      this.collapseValue = val;
    },
    updateMenuName(val) {
      this.menuNameValue = val;
    },
    updateBarName(val) {
      this.barNameValue = val;
    },
    updateDisabled(val) {
      this.disabledValue = val;
    },
    updateIcon(val) {
      this.iconValue = val;
    },
    updateShow(val) {
      this.showStatus = val;
    },
    updateMain(val) {
      this.mainStatus = val;
    },
  },
  components: {
    WMenu,
    WBar,
  },
  watch: {
    navs(val) {
      this.updateNavs(val);
    },
    menuName(val) {
      this.updateMenuName(val);
    },
    barName(val) {
      this.updateBarName(val);
    },
    disabled(val) {
      this.updateDisabled(val);
    },
    icon(val) {
      this.updateIcon(val);
    },
    show(val) {
      this.updateShow(val);
    },
    collapse(val) {
      this.updateCollapse(val);
    },
  },
}
</script>
