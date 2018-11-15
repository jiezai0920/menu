export default {
  EVENT_USER: 'EVENT_USER',
  EVENT_TOKE: 'Authorization',
  EVENT_PHONE: 'EVENT_PHONE',
  SUCCESS: 10000,
  EXPIRED: 3600 * 24,
  MARKETING_BAR: 'EVENT_MARKETING_BAR',
  DATA_BAR: 'EVENT_DATA_BAR',
  MODULE_NAME: { // 模块名字
    ACCOUNT: 'account',
    HOME: 'home',
    EVENT: 'event', // 演出赛事(票务)
    MEET: 'meetup', // 轻活动(报名)
    GOODS: 'goods',
    FORM: 'form',
    ORDER: 'order',
    FINANCE: 'finance',
    MARKET: 'marketing',
    MEMBER: 'member',
    DATA: 'data',
    SHOP: 'shop', // 店铺
    CRM: 'crm',
  },
  ALIASES: { // 别名
    HOMEPAGE: 'homepage',
    ACCOUNT: 'account',
    ACCOUNT_INFO: 'AccountInfo', // 账户管理
    ACCOUNT_ORG_INFO: 'AccountOrgInfo', // 账户信息
    ACCOUNT_ORG_AUTH: 'AccountOrgAuth', // 认证信息
    ACCOUNT_LOGIN_AND_SAFE: 'AccountLoginAndSafe', // 安全中心
    ACCOUNT_SUB_MANAGE: 'AccountSubManage', // 子账号
    CHILDREN_ACCOUNT: 'childrenAccount', // 账号列表
    CHILDREN_ORG_AUTH: 'ChildrenOrgAuth', // 角色权限
    EVENT: 'event', // 演出赛事(票务)
    EVENT_OVERVIEW: 'event_overview', // 活动概览
    EVENT_MANAGE: 'event_manage', // 活动管理
    EVENT_MANAGE_EDIT: 'event_manage_edit', // 活动编辑
    EVENT_MANAGE_SCREENINGS: 'event_manage_screenings', // 场次管理
    EVENT_MANAGE_PRICE: 'event_manage_price', // 票品管理
    EVENT_ADVANCE_SETTINGS: 'event_advance_settings', // 高级设置
    EVENT_ADVANCE_ACCCUSTOM: 'event_setting_acccustom', // 访问设置
    EVENT_ADVANCE_PURCHASING: 'event_setting_purchasing', // 限购设置
    EVENT_ADVANCE_TICKETS: 'event_setting_tickets', // 批量出票
    EVENT_ADVANCE_INFOCUSTOM: 'event_setting_infocustom', // 信息定制
    EVENT_ADVANCE_TICKET_CHECKED: 'event_setting_ticket_checked', // 活动验票
    EVENT_ADVANCE_SEATINGMAP: 'event_setting_seatingmap', // 座位图
    EVENT_FORM: 'event_form', // 表单管理
    EVENT_FORM_FORMLIST: 'event_form_formlist', // 表单列表
    EVENT_FORM_FORMEDIT: 'event_form_formedit', // 创建表单
    MEET: 'meetup', // 轻活动(报名)
    MEET_LIST: 'meetupList', // 活动列表
    MEET_SUBMIT: 'meetupSubmit', // 活动发布
    GOODS: 'goodsAndStore',
    FORM: 'form',
    CRM: 'crm',
    ORDER: 'orderCenterThree',
    ORDER_ALL: 'orderAll', // 全部
    ORDER_EVENT: 'orderEvent', // 活动 演出赛事 票务
    ORDER_GOODS: 'orderGoods', // 商品
    ORDER_CARD: 'orderCard', // 年卡
    ORDER_STONE_VALUE: 'orderStoreValue', // 储值
    ORDER_PAY_MEMBER: 'orderPayMember', // 付费会员
    ORDER_MEET: 'orderMeetup', // 轻活动 报名
    FINANCE: 'financeThree',
    MARKET: 'marketing', // 营销
    MARKET_OVERVIEW: 'MarketingOverview', // 营销概览
    MARKET_CARD: 'MarketingECard', // 年卡
    MARKET_COUPON: 'MarketingBaseInfo', // 卡券优惠
    MARKET_ACTIVE: 'MarketingInteractive', // 互动营销
    DATA: 'data', // 数据
    DATA_IDENTITY_ANALYZE: 'dataIdentityanalyze', // 身份证号分析
    DATA_MOBILE_ANALYZE: 'dataMobileanalyze', // 手机号分析
    SHOP: 'shop', // 店铺
  },
};
