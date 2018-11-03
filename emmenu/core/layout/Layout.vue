<template>
  <div>
    <w-bar class="demo" :navs="navs" :title="title"></w-bar>
layout
  </div>
</template>
<script>
import WBar from '../bar/Bar';
export default {
  name: 'WLayout',
  data() {
    return {
      navsValue: [],
      titleValue: '',
      disabledValue: '',
    };
  },
  props: {
    title: String,
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
  },
  components: {
    WBar,
  },
  methods: {
    updateNavs(val) {
      this.navsValue = val.slice();
    },
    updateTitle(val) {
      this.titleValue = val;
    },
    updateDisabled(val) {
      this.disabledValue = val;
    },
  },
  watch: {
    navs(val) {
      this.updateNavs(val);
    },
    title(val) {
      this.updateTitle(val);
    },
    disabled(val) {
      this.updateDisabled(val);
    },
  },
}
</script>
