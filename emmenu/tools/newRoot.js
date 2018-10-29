import hOwnProperty from 'em-underline/hOwnProperty';
import development from '../menu/common/development';
import CONSTANT from '../menu/common/constant';

const {
  MODULE_NAME,
} = CONSTANT;

const pathDefult = {};

export default (listArr, processEnv, iconObj) => {
  const obj = {
    header: {},
    menuList: [],
    control: [],
  };
  const newRoot = listArr.slice();
  // 默认每个项目跳转地址
  pathDefult[MODULE_NAME.EVENT] = `${development[processEnv].activity}activity?nav=match`;
  pathDefult[MODULE_NAME.MEET] = `${development[processEnv].activity}activity?nav=light`;
  pathDefult[MODULE_NAME.GOODS] = `${development[processEnv].goods}Goods/list`;
  pathDefult[MODULE_NAME.FORM] = development[processEnv].form;
  pathDefult[MODULE_NAME.ORDER] = development[processEnv].order;
  pathDefult[MODULE_NAME.MEMBER] = `${development[processEnv].crm}contacts`;
  pathDefult[MODULE_NAME.FINANCE] = development[processEnv].finance;
  // pathDefult[MODULE_NAME.SHOP] = development[processEnv].shop;
  const pathNoAuth = `${development[processEnv].member}error`;
  // 获取账户管理权限
  obj.control = newRoot.splice(
    newRoot.findIndex(item => item.module_name === MODULE_NAME.ACCOUNT),
    1,
  );

  // 获取大首页的权限
  newRoot.splice(newRoot.findIndex(item => item.module_name === MODULE_NAME.HOME), 1);
  obj.header = Object.assign(obj.header, {
    name: '控制台',
    path: `${development[processEnv].account}console`,
    icon: iconObj[MODULE_NAME.HOME],
  });

  const handleReduce = (item, kids) => {
    if (hOwnProperty(kids, 'children') && kids.children.length > 0) {
      if (!hOwnProperty(obj, `${item.module_name}auth`)) {
        obj[`${item.module_name}auth`] = {};
      }
      const newKidAliases = kids.children.reduce((kidKeys, kid) => {
        kidKeys[kid.aliases] = kid;
        handleReduce(item, kid);
        return kidKeys;
      }, {});
      obj[`${item.module_name}auth`] = Object.assign(obj[`${item.module_name}auth`], newKidAliases);
    }
  };

  // 处理 报名 | 票务 | 周边 | 表单 | 订单 | 财务 | 数据中心 | 营销
  newRoot.forEach((item) => {
    const baseList = {
      name: item.name,
      icon: iconObj[item.module_name],
    };
    obj[`${item.module_name}source`] = item;
    // 如果是在事先准备好的路径中
    if (hOwnProperty(pathDefult, item.module_name)) {
      // 如果有权限，如果没权限
      debugger
      if (item.is_auth) {
        baseList.path = pathDefult[item.module_name];
      } else {
        baseList.path = pathNoAuth;
        baseList.noAuth = true;
      }
    } else {
      baseList.source = item;
    }
    obj.menuList.push(baseList);
    obj[item.module_name] = item.children;
    // 如果有子级权限， 直接列岛 XXXauth 字段中，其中 XXX 代表某一权限
    handleReduce(item, item);
  });

  return obj;
};
