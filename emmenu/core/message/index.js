import Message from './src/message';

const prefixKey = 'v_message_key_';

let messageInstance;
let delayTimeNumber = 5000;
let styleObject = {};
let closeFunction = () => {};

function getMessageInstance() {
  messageInstance = messageInstance || Message.newInstance();
  return messageInstance;
}

function notice(params) {
  const instance = getMessageInstance();
  params.name = `${prefixKey}${params.name}`;
  params.delayTime = params.delayTime || delayTimeNumber;
  params.style = params.style || styleObject;
  params.close = params.close || closeFunction;

  instance.notice(params);
}

export default {
  info(params) {
    params.type = 'info';
    return notice(params);
  },
  success(params) {
    params.type = 'success';
    return notice(params);
  },
  warning(params) {
    params.type = 'warning';
    return notice(params);
  },
  error(params) {
    params.type = 'error';
    return notice(params);
  },
  config(params) {
    if (params.delayTime) {
      delayTimeNumber = params.delayTime;
    }
    if (params.style) {
      styleObject = params.style;
    }
    if (params.close) {
      closeFunction = params.close;
    }
  },
};
