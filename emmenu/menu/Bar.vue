<template>
  <div class="w-menu-bar" :class="{['w-menu-bar-on']: barStatus}">
    <h4 class="w-menu-bar-title" v-show="barData.module_name || typeof data === 'string'">{{barTitle[barData.module_name || data]}}</h4>
    <ul class="w-menu-bar-list" v-show="barData.child || barData">
      <li class="w-menu-bar-item" :class="{on: curName === child.name}" v-for="child in (barData.child || barData)" @click="goToBarPath(child, barData)">{{child.name}}</li>
    </ul>
  </div>
</template>
<script>
  import hOwnProperty from 'em-underline/hOwnProperty';
  import { getStorage } from '../tools/localstorage';
  import CONSTANT from './common/constant';

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
      data: [Object, String],
      name: String,
    },
    mounted() {
      this.modifyAttr('barStatus', this.status);
      this.modifyAttr('barData', this.data, typeof this.data === 'string');
      this.modifyAttr('curName', this.name);
    },
    methods: {
      modifyAttr(attr, val, isGetStorage = false) {
        this[attr] = val;
        if (isGetStorage) {
          try {
            const cacheData = getStorage(CONSTANT[`${val.toUpperCase()}_BAR`]) || '{}';
            this[attr] = cacheData.split(',,').map(item=> JSON.parse(item));
          } catch (e) {

          }
        }
      },
      goToBarPath(item, allData) {
        if (hOwnProperty(item, 'path') || hOwnProperty(item, 'url')) {
          this.curMenuObject = allData.name;
          this.curBarObject = item.name;
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
        this.modifyAttr('barData', val, typeof val === 'string');
      },
      name(val) {
        this.modifyAttr('curName', val);
      },
    },
  };
</script>
