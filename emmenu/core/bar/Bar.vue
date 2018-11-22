<template>
  <div class="w-bar" :class="{'w-bar-hide': !showValue}">
    <h3 class="w-bar-title-box"><span class="w-bar-title">{{titleValue}}</span></h3>
    <span class="w-bar-collapse" :class="{'w-bar-collapse-hide': collapseValue && !showValue}" v-if="collapseValue" @click="handleCollapse">
      <img class="w-bar-collapse-icon" :src="require('assets/img/corrw.png')">
    </span>
    <ul class="w-bar-list">
      <li class="w-bar-item" v-for="(value, valueIndex) in goValue">
        <router-link class="w-bar-link" :class="{'disabled': disabledValue}" :to="value.to" active-class="on" exact-active-class="exact" :target="value.target || '_self'" v-if="value.to">{{value.title}}</router-link>
        <a class="w-bar-link" :class="{'disabled': disabledValue, 'on': activeValue === value.title}" :href="value.url" v-if="value.url" :target="value.target || '_self'">{{value.title}}</a>
        <div class="w-bar-fold" :class="{'on': value.open || value.child.some(children=>children.title === activeValue), 'disabled': disabledValue}" v-if="value.child" @click="childLink(value, valueIndex)">{{value.title}}</div>
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:after-enter="afterEnter"
          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
          v-on:after-leave="afterLeave">
          <ul class="w-bar-child" v-if="value.child" v-show="value.open || value.child.some(children=>children.title === activeValue)">
            <li class="w-bar-item" v-for="(childValue, childIndex) in value.child">
              <router-link class="w-bar-link-child" :class="{'disabled': disabledValue, 'on': activeValue === childValue.title}" :to="childValue.to" active-class="on" exact-active-class="exact" :target="childValue.target || '_self'" v-if="childValue.to" :ref="`link${valueIndex}${childIndex}`">{{childValue.title}}</router-link>
              <a class="w-bar-link-child" :class="{'disabled': disabledValue, 'on': activeValue === childValue.title}" :href="childValue.url" v-if="childValue.url" :target="childValue.target || '_self'">{{childValue.title}}</a>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
  import { addClass, removeClass, css } from '../../helper/node';

  const commonTransitionClass = 'w-bar-gradual';

  export default {
    name: 'WBar',
    data() {
      return {
        goValue: [],
        titleValue: '',
        disabledValue: false,
        status: false,
        showValue: false,
        openValue: this.open,
        activeValue: '',
        collapseValue: false,
      };
    },
    props: {
      title: String,
      show: {
        type: Boolean,
        default: true,
      },
      navs: {
        type: Array,
        default: () => [],
      },
      active: String,
      open: {
        type: Boolean,
        default: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      collapse: { // 是否有收起
        type: Boolean,
        default: true,
      },
    },
    mounted() {
      this.updateNavs(this.navs);
      this.updateTitle(this.title);
      this.updateDisabled(this.disabled);
      this.updateShow(this.show);
      this.updateOpen();
      this.updateActive(this.active);
      this.updateCollapse(this.collapse);
    },
    methods: {
      childLink(value, valueIndex) {
        const newValue = Object.assign({}, value, {
          open: !value.open,
        });
        this.goValue.splice(valueIndex, 1, newValue);
      },
      handleCollapse() {
        if (this.collapseValue) {
          this.showValue = !this.showValue;
          this.$emit('collapsed', this.showValue);
        }
      },
      updateCollapse(val) {
        this.collapseValue = val;
      },
      updateNavs(val) {
        this.goValue = val.slice();
        this.addOpen();
      },
      updateTitle(val) {
        this.titleValue = val;
      },
      updateDisabled(val) {
        this.disabledValue = val;
      },
      updateShow(val) {
        this.showValue = val;
      },
      updateActive(val) {
        this.activeValue = val;
      },
      updateOpen() {
        const { href } = window.location;
        this.goValue.forEach((go) => {
          if (go.child) {
            const result = go.child.findIndex((goChild) => {
              const indexOfValue = goChild.to ? goChild.to.path : goChild.url;
              return href.indexOf(indexOfValue) > -1;
            });
            go.open = go.open || this.openValue || result > -1;
          }
        });
      },
      addOpen() {
        this.goValue = this.goValue.map((val) => {
          if (val.child) {
            val.open = val.open || this.openValue;
          }
          return val;
        });
      },
      beforeEnter(el) {
        addClass(el, commonTransitionClass);
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        css(el, {
          height: '0',
          paddingTop: 0,
          paddingBottom: 0,
        });
      },
      enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        const hasHeight = el.scrollHeight !== 0;

        css(el, {
          height: hasHeight ? `${el.scrollHeight}px` : '',
          paddingTop: el.dataset.oldPaddingTop,
          paddingBottom: el.dataset.oldPaddingBottom,
          overflow: 'hidden',
        });
      },
      afterEnter(el) {
        removeClass(el, commonTransitionClass);

        css(el, {
          height: '',
          overflow: el.dataset.oldOverflow,
        });
      },
      beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        css(el, {
          height: `${el.scrollHeight}px`,
          overflow: 'hidden',
        });
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          addClass(el, commonTransitionClass);
          css(el, {
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
          });
        }
      },
      afterLeave(el) {
        removeClass(el, commonTransitionClass);
        css(el, {
          height: '',
          overflow: el.dataset.oldOverflow,
          paddingTop: el.dataset.oldPaddingTop,
          paddingBottom: el.dataset.oldPaddingBottom,
        });
      },
    },
    watch: {
      navs: {
        handler(val) {
          this.updateNavs(val);
        },
        deep: true,
      },
      title(val) {
        this.updateTitle(val);
      },
      disabled(val) {
        this.updateDisabled(val);
      },
      show(val) {
        this.updateShow(val);
      },
      collapse(val) {
        this.updateCollapse(val);
      },
      active(val) {
        this.updateActive(val);
      },
    },
  };
</script>
