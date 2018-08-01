import Vue from 'vue';
import Message from './Message.vue';

Message.newInstance = (props = {}) => {
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Message, {
        props,
      });
    },
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const notification = Instance.$children[0];

  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
  };
};

export default Message;
