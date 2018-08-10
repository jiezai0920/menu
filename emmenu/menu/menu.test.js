import { mount } from 'vue-test-utils';
import Menu from './Menu';

describe('Menu.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(Menu);
  });

  it("updates the .textContent to '这是一个菜单组件。'", (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.text()).toBe('这是一个菜单组件。');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it("检测快照是否一样。", (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.text()).toMatchSnapshot();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
