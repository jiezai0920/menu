const constant = require('./constantenv');

let account = '""';
let form = '""';
let member = '""';
let marketing = '""';
let data = '""';
let order = '""';
let finance = '""';
let activity = '""';
let eventt = '""';
let ligthActive = '""';
let matchlink = '""';
let goods = '""';
let coupon = '""';
let freight = '""';
let shop = '';
let distri = '';

if (typeof window !== 'undefined') {
  switch (window.processEnv) {
    case 'testing':
      account = constant.ACCOUNT_TESTING;
      form = constant.FORM_TESTING;
      member = constant.MEMBER_TESTING;
      marketing = constant.MARKETING_TESTING;
      data = constant.DATA_TESTING;
      order = constant.ORDER_TESTING;
      finance = constant.FINANCE_TESTING;
      activity = constant.ACTIVITY_TESTING;
      eventt = constant.EVENTT_TESTING;
      ligthActive = constant.LIGHT_ACTIVE_TESTING;
      matchlink = constant.MATCHLINK_TESTING;
      goods = constant.GOODS_TESTING;
      coupon = constant.COUPON_TESTING;
      freight = constant.FREIGHT_TESTING;
      shop = constant.SHOP_TESTING;
      distri = constant.DISTRI_TESTING;
      break;
    case 'labing':
      account = constant.ACCOUNT_LABING;
      form = constant.FORM_LABING;
      member = constant.MEMBER_LABING;
      marketing = constant.MARKETING_LABING;
      data = constant.DATA_LABING;
      order = constant.ORDER_LABING;
      finance = constant.FINANCE_LABING;
      activity = constant.ACTIVITY_LABING;
      eventt = constant.EVENTT_LABING;
      ligthActive = constant.LIGHT_ACTIVE_LABING;
      matchlink = constant.MATCHLINK_LABING;
      goods = constant.GOODS_LABING;
      coupon = constant.COUPON_LABING;
      freight = constant.FREIGHT_LABING;
      shop = constant.SHOP_LABING;
      distri = constant.DISTRI_LABING;
      break;
    case 'production':
      account = constant.ACCOUNT_PRODUCTION;
      form = constant.FORM_PRODUCTION;
      member = constant.MEMBER_PRODUCTION;
      marketing = constant.MARKETING_PRODUCTION;
      data = constant.DATA_PRODUCTION;
      order = constant.ORDER_PRODUCTION;
      finance = constant.FINANCE_PRODUCTION;
      activity = constant.ACTIVITY_PRODUCTION;
      eventt = constant.EVENTT_PRODUCTION;
      ligthActive = constant.LIGHT_ACTIVE_PRODUCTION;
      matchlink = constant.MATCHLINK_PRODUCTION;
      goods = constant.GOODS_PRODUCTION;
      coupon = constant.COUPON_PRODUCTION;
      freight = constant.FREIGHT_PRODUCTION;
      shop = constant.SHOP_PRODUCTION;
      distri = constant.DISTRI_PRODUCTION;
      break;
    default:
      account = constant.ACCOUNT_DEVELOPMENT;
      form = constant.FORM_DEVELOPMENT;
      member = constant.MEMBER_DEVELOPMENT;
      marketing = constant.MARKETING_DEVELOPMENT;
      data = constant.DATA_DEVELOPMENT;
      order = constant.ORDER_DEVELOPMENT;
      finance = constant.FINANCE_DEVELOPMENT;
      activity = constant.ACTIVITY_DEVELOPMENT;
      eventt = constant.EVENTT_DEVELOPMENT;
      ligthActive = constant.LIGHT_ACTIVE_DEVELOPMENT;
      matchlink = constant.MATCHLINK_DEVELOPMENT;
      goods = constant.GOODS_DEVELOPMENT;
      coupon = constant.COUPON_DEVELOPMENT;
      freight = constant.FREIGHT_DEVELOPMENT;
      shop = constant.SHOP_DEVELOPMENT;
      distri = constant.DISTRI_DEVELOPMENT;
  }
}

module.exports = {
  NODE_ENV: JSON.parse(constant.NODE_ENV_DEVELOPMENT),
  ACCOUNT: JSON.parse(account),
  FORM: JSON.parse(form),
  MEMBER: JSON.parse(member),
  MARKETING: JSON.parse(marketing),
  DATA: JSON.parse(data),
  ORDER: JSON.parse(order),
  FINANCE: JSON.parse(finance),
  ACTIVITY: JSON.parse(activity),
  EVENTT: JSON.parse(eventt),
  LIGHTAVTIVE: JSON.parse(ligthActive),
  MATCHLINK: JSON.parse(matchlink),
  GOODS: JSON.parse(goods),
  COUPON: JSON.parse(coupon),
  FREIGHT: JSON.parse(freight),
  SHOP: JSON.parse(shop),
  DISTRI: JSON.parse(distri),
};
