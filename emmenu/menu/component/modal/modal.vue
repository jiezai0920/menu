<template>
  <div class="w-header-modal" v-if="show">
    <div class="w-header-modal-mask"></div>
    <div class="w-header-modal-wrap" :style="{width: `${width}px`}">
      <div class="w-header-modal-header">
        <div class="w-header-modal-header-inner">{{ title }}</div>
        <div class="w-header-modal-header-close" @click="closeModal">＋</div>
      </div>
      <div class="w-header-modal-main" :class="mainName">
        <slot name="modal-main"></slot>
      </div>
      <div class="w-header-modal-footer" v-if="footerFlg">
        <button class="w-header-modal-cancle" @click="cancel" v-if="cancelFlg">{{cancelText}}</button>
        <button class="w-header-modal-ok" @click="ok" v-if="okFlg">{{okText}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WModal',
  data() {
    return {
      footerFlg: true,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 440,
    },
    title: {
      type: String,
      default: '提示',
    },
    className: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancelFlg: {
      type: [String, Boolean],
      default: true,
    },
    okFlg: {
      type: [String, Boolean],
      default: true,
    },
    tip: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    if (!this.cancelFlg && !this.okFlg) {
      this.footerFlg = false;
    }
  },
  computed: {
    mainName() {
      return [
        {
          [`${this.className}-modal-main`]: !!this.className,
          'w-header-modal-main-tip': this.tip,
        },
      ];
    },
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    ok() {
      this.$emit('ok');
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
