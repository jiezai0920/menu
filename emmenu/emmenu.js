// 组件
import WMenu from './core/menu/emmenu';
import WBar from './core/bar/embar';
import WLayout from './core/layout/emlayout';

const waterCpt = {
  WLayout,
  WMenu,
  WBar,
};

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(waterCpt).forEach((key) => {
    Vue.component(key, waterCpt[key]);
  });
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
