<template>
  <div class="w-menu-bar" :class="{['w-menu-bar-on']: barStatus}">
    <h4 class="w-menu-bar-title" v-show="barData.name">{{barTitle[barData.module_name]}}</h4>
    <ul class="w-menu-bar-list" v-show="barData.children">
      <li class="w-menu-bar-item" :class="{on: curName === child.name}" v-for="child in barData.child" @click="goToBarPath(child, barData)">{{child.name}}</li>
    </ul>
  </div>
</template>
<script>
  import hOwnProperty from 'em-underline/hOwnProperty';

  export default {
    name: 'WBar',
    data() {
      return {
        barStatus: false,
        barTitle: {
          marketing: '营销应用',
          data: '数据中心',
        },
        barData: [],
        curName: '',
      };
    },
    props: {
      status: Boolean,
      data: Object,
      name: String,
    },
    mounted() {
      this.modifyAttr('barStatus', this.status);
      this.modifyAttr('barData', this.data);
      this.modifyAttr('curName', this.name);
    },
    methods: {
      modifyAttr(attr, val) {
        this[attr] = val;
      },
      goToBarPath(item, allData) {
        if (hOwnProperty(item, 'path') || hOwnProperty(item, 'url')) {
          this.curMenuObject = allData.name;
          this.curBarObject = item.name;
          // setStorage(CUR_MENU_OBJECT, this.curMenuObject);
          // setStorage(CUR_BAR_OBJECT, this.curBarObject);
          if (typeof window !== 'undefined') {
            if (hOwnProperty(item, 'url')) {
              window.open(item.url);
            } else {
              window.location.href = item.path;
            }
          }
        }
      },
    },
    watch: {
      status(val) {
        this.modifyAttr('barStatus', val);
      },
      data(val) {
        this.modifyAttr('barData', val);
      },
      name(val) {
        this.modifyAttr('curName', val);
      },
    },
  };
</script>
