import hOwnProperty from 'em-underline/hOwnProperty';
import CONSTANT from './constant';


export default (rule, env) => {
  const {
    API_KEY,
  } = CONSTANT;
  const { NAME } = API_KEY;
  const showName = NAME.toLocaleLowerCase();
  const constName = CONSTANT[NAME];
  console.log(rule, 'rule');
  const { org_logo, org_name }= rule.org;
  const obj = {
    menuList: [],
    control: [],
    title: org_name,
    logo: org_logo,
  };
  const newRoot = rule.menus.slice();
  // 获取账户管理权限
  [obj.control] = newRoot.splice(
    newRoot.findIndex(item => item[showName] === constName.ACCOUNT),
    1,
  );
  // 递归累加所有权限输出
  const handleReduce = (item, kids) => {
    if (hOwnProperty(kids, 'children') && kids.children.length > 0) {
      if (!hOwnProperty(obj, `${item[showName]}auth`)) {
        obj[`${item[showName]}auth`] = {};
      }
      const newKidAliases = kids.children.reduce((kidKeys, kid) => {
        kidKeys[kid.aliases] = kid;
        handleReduce(item, kid);
        return kidKeys;
      }, {});
      obj[`${item[showName]}auth`] = Object.assign(obj[`${item[showName]}auth`], newKidAliases);
    }
  };

  // pathDefult 中配置好，即可显示，成为导航
  newRoot.forEach((item) => {
    const moduleName = item[showName];
    const baseList = {
      name: item.name,
      icon: moduleName,
    };
    const { options, path, tags, type, } = item;
    obj[`${moduleName}source`] = item;
    // 如果是在事先准备好的路径中
    if (type == 1) {
      const isAuth = item.permission_code;
      const { domain, target, } = options
      baseList.target = target;
      baseList.tags = tags;
      // 如果有权限，如果没权限
      baseList.path = isAuth ? `${domain}${path}` : obj.error;
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
