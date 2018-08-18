import hOwnProperty from 'em-underline/hOwnProperty';
import development from '../menu/common/development';
import CONSTANT from '../menu/common/constant';

const {
  MODULE_NAME,
} = CONSTANT;

const pathDefult = {};
// 默认每个项目跳转地址
pathDefult[MODULE_NAME.EVENT] = `${development.ACTIVITY}activity`;
pathDefult[MODULE_NAME.MEET] = `${development.ACTIVITY}activity`;
pathDefult[MODULE_NAME.GOODS] = `${development.GOODS}Goods/list`;
pathDefult[MODULE_NAME.FORM] = development.FORM;
pathDefult[MODULE_NAME.ORDER] = development.ORDER;
pathDefult[MODULE_NAME.MEMBER] = `${development.MEMBER}list`;
pathDefult[MODULE_NAME.FINANCE] = development.FINANCE;

const pathNoAuth = `${development.MEMBER}error`;

export default (listArr, iconObj) => {
  const obj = {
    header: {},
    menuList: [],
    control: [],
  };
  // 获取账户管理权限
  obj.control = listArr.splice(listArr.findIndex(item => item.module_name === MODULE_NAME.ACCOUNT), 1);

  // 获取大首页的权限
  listArr.splice(listArr.findIndex(item => item.module_name === MODULE_NAME.HOME), 1);
  obj.header = Object.assign(obj.header, {
    name: '控制台',
    path: `${development.ACCOUNT}console`,
    icon: iconObj[MODULE_NAME.HOME],
  });

  // 处理 报名 | 票务 | 商品 | 表单 | 订单 | 财务 | 数据中心 | 营销
  listArr.forEach((item) => {
    const baseList = {
      name: item.name,
      icon: iconObj[item.module_name],
    };
    // 如果是在事先准备好的路径中
    if (hOwnProperty(pathDefult, item.module_name)) {
      // 如果有权限，如果没权限
      baseList.path = item.is_auth ? pathDefult[item.module_name] : pathNoAuth;
    } else {
      baseList.source = item;
    }
    obj.menuList.push(baseList);
    obj[item.module_name] = item.children;
    // 如果有子级权限
    if (hOwnProperty(item, 'children') && item.children.length > 0) {
      obj[`${item.module_name}auth`] = {};
      const newRootAliases = item.children.reduce((keys, child) => {
        keys[child.aliases] = child;
        if (hOwnProperty(child, 'children')) {
          const newSonAliases = child.children.reduce((keys, son) => {
            keys[son.aliases] = son;
            return keys;
          }, {});
          obj[`${item.module_name}auth`] = Object.assign(obj[`${item.module_name}auth`], newSonAliases);
        }
        return keys;
      }, {});
      obj[`${item.module_name}auth`] = Object.assign(obj[`${item.module_name}auth`], newRootAliases);
    }
  });
  return obj;
};
