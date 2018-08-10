import development from '../menu/common/development';

export default (listArr, iconObj) => {
  const obj = {
    header: {},
    menuList: [[], [], []],
    bar: [],
    root: {},
    market: [],
    id: {},
    control: [],
    lightActive: [],
  };
  listArr.forEach((item, index) => {
    if (item.module_name === 'account') {
      obj.control = listArr.splice(index, 1);
    }
  });
  listArr.forEach((item) => {
    if (item.module_name === 'home') {
      obj.header = Object.assign(obj.header, {
        name: '控制台',
        path: `${development.ACCOUNT}console`,
        icon: iconObj[item.module_name],
      });
    }

    if (item.module_name === 'event') {
      obj.lightActive = item.children;
      if (item.is_auth === 0) {
        obj.menuList[0].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: `${development.MENBER}error`,
        });
      } else {
        obj.menuList[0].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: `${development.ACTIVITY}activity`,
        });
      }
    } else if (item.module_name === 'goods') {
      if (item.is_auth === 0) {
        obj.menuList[0].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: `${development.MENBER}error`,
        });
      } else {
        obj.menuList[0].push({
          name: item.name,
          icon: iconObj[item.module_name],
          url: `${development.GOODS}${item.route}`,
        });
      }
    } else if (item.module_name === 'form') {
      if (item.is_auth === 0) {
        obj.menuList[0].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: `${development.MENBER}error`,
        });
      } else {
        obj.menuList[0].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: development.FORM,
        });
      }
    }

    if (item.module_name === 'order') {
      if (item.is_auth === 0) {
        obj.menuList[1].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: `${development.MENBER}error`,
        });
      } else {
        obj.menuList[1].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: development.ORDER,
        });
      }
    } else if (item.module_name === 'finance') {
      if (item.is_auth === 0) {
        obj.menuList[1].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: `${development.MENBER}error`,
        });
      } else {
        obj.menuList[1].push({
          name: item.name,
          icon: iconObj[item.module_name],
          path: development.FINANCE,
        });
      }
    }

    if (item.module_name === 'marketing') {
      obj.root[item.aliases] = item.is_auth;
      obj.menuList[2].push({
        name: item.name,
        icon: iconObj[item.module_name],
        path: `${development.ACCOUNT}markettool`,
      });
      obj.market = item.children;
      item.children.forEach((child) => {
        obj.root[child.aliases] = child.is_auth;
        obj.id[child.aliases] = child.id;
        if (child.children && child.children.length) {
          child.children.forEach((childItem) => {
            obj.id[childItem.aliases] = childItem.id;
          });
        }
      });
    } else if (item.module_name === 'added') {
      obj.menuList[2].push({
        name: item.name,
        icon: iconObj[item.module_name],
        path: `${development.ACCOUNT}added`,
      });
      item.children.forEach((child) => {
        obj.root[child.aliases] = child.is_auth;
      });
    }
  });
  return obj;
};
