import hOwnProperty from 'em-underline/hOwnProperty';
import CONSTANT from './constant';


export default (rule, env) => {
  const {
    MODULE_NAME,
  } = CONSTANT;
  const pathDefult = {};
  const obj = {
    menuList: [],
    control: [],
    title: rule.title,
    logo: rule.logo,
  };
  const newRoot = rule.root.slice();
  // 默认每个项目跳转地址
  pathDefult[MODULE_NAME.EVENT] = `${env.MEET}activity?nav=match`;
  pathDefult[MODULE_NAME.MEET] = `${env.MEET}activity?nav=light`;
  pathDefult[MODULE_NAME.GOODS] = `${env.GOODS}Goods/list`;
  pathDefult[MODULE_NAME.FORM] = env.FORM;
  pathDefult[MODULE_NAME.ORDER] = env.ORDER;
  pathDefult[MODULE_NAME.DATA] = `${env.DATA}mobileanalyze`;
  pathDefult[MODULE_NAME.HOME] = `${env.ACCOUNT}console`;
  pathDefult[MODULE_NAME.MARKET] = `${env.ACCOUNT}salespromotion`;
  pathDefult[MODULE_NAME.MEMBER] = `${env.CRM}contacts`;
  pathDefult[MODULE_NAME.SHOP] = `${env.SHOP}`;
  pathDefult[MODULE_NAME.FINANCE] = env.FINANCE;
  const pathNoAuth = `${env.MEMBER}error`;
  // 获取账户管理权限
  [obj.control] = newRoot.splice(
    newRoot.findIndex(item => item.module_name === MODULE_NAME.ACCOUNT),
    1,
  );
  // 递归累加所有权限输出
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

  // pathDefult 中配置好，即可显示，成为导航
  newRoot.forEach((item) => {
    const moduleName = item.module_name;
    const baseList = {
      name: item.name,
      icon: moduleName,
    };
    obj[`${moduleName}source`] = item;
    // 如果是在事先准备好的路径中
    if (hOwnProperty(pathDefult, moduleName)) {
      const isAuth = item.is_auth;
      // 如果有权限，如果没权限
      baseList.path = isAuth ? pathDefult[moduleName] : pathNoAuth;
      baseList.noAuth = !!isAuth;
    } else {
      baseList.source = item;
    }
    obj.menuList.push(baseList);
    obj[moduleName] = item.children;
    // 如果有子级权限， 直接列岛 XXXauth 字段中，其中 XXX 代表某一权限
    handleReduce(item, item);
  });

  return obj;
};
