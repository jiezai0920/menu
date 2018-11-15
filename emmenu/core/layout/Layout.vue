<template>
  <div class="w-layout" :class="{'on': !mainStatus}">
    <w-menu :env="env" :active="activeValue" :rule="rule" :logoutAction="logoutAction"></w-menu>
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
      mainStatus: true,
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
    changeShowStatus(val) {
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
