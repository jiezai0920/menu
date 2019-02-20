export default {
  "org": {
    "org_id": 100015,
    "org_name": "****",
    "org_service_tel": "4000630260",
    "account_type": "staff", // staff(子账号) || org(主账号)
    "org_logo": "http://moshtest.qiniudn.com/6b/5e/7b/2c6a8c4fad4e0dadbc97b69f3a.jpg"
  },
  "version": {
    "version": "3.0.0",
    "version_name": "v3.0.0"
  },
  "editions": [{
    "edition_code": "starter",
    "edition_sub_code": "starter-default"
  }],
  "menus": [{
      "parent_code": "",
      "module_code": "home",
      "permission_code": "homepage",
      "name": "首页",
      "type": 1,
      "path": "/account/console",
      "tags": ['NEW'],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_blank",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": true,
      "sub_menus": [{
          "parent_code": "homepage",
          "module_code": "home",
          "permission_code": "homepage_stats",
          "name": "数据概览",
          "type": 3,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "buy_editions",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "homepage",
          "module_code": "home",
          "permission_code": "homepage_publish",
          "name": "最近发布",
          "type": 3,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "buy_functions",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        }
      ]
    },
    {
      "parent_code": "",
      "module_code": "account",
      "permission_code": "account",
      "name": "账户",
      "type": 2,
      "path": "/account/accountinformation",
      "tags": [],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": [{
          "parent_code": "account",
          "module_code": "account",
          "permission_code": "account_info",
          "name": "账户信息",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "buy_editions",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "account_info",
              "module_code": "account",
              "permission_code": "account_org",
              "name": "主办信息",
              "type": 1,
              "path": "/account/accountinformation",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "buy_functions",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "account_info",
              "module_code": "account",
              "permission_code": "account_auth",
              "name": "认证信息",
              "type": 1,
              "path": "/account/authinformation",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "account_info",
              "module_code": "account",
              "permission_code": "account_security",
              "name": "安全中心",
              "type": 1,
              "path": "/account/security",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        },
        {
          "parent_code": "account",
          "module_code": "account",
          "permission_code": "account_staff",
          "name": "子账号",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "account_staff",
              "module_code": "account",
              "permission_code": "account_staff_list",
              "name": "账号列表",
              "type": 1,
              "path": "/account/subaccount",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "account_staff",
              "module_code": "account",
              "permission_code": "account_staff_role",
              "name": "角色权限",
              "type": 1,
              "path": "/account/rolepermission",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        },
        {
          "parent_code": "account",
          "module_code": "account",
          "permission_code": "account_services",
          "name": "服务订购",
          "type": 1,
          "path": "/account/service",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        }
      ]
    },
    {
      "parent_code": "",
      "module_code": "event",
      "permission_code": "event",
      "name": "票务",
      "type": 1,
      "path": "/event",
      "tags": [],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": true,
      "sub_menus": [{
          "parent_code": "event",
          "module_code": "event",
          "permission_code": "event_overview",
          "name": "活动概览",
          "type": 1,
          "path": "/event/overview",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "event",
          "module_code": "event",
          "permission_code": "event_manage",
          "name": "活动管理",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "event_manage",
              "module_code": "event",
              "permission_code": "event_manage_edit",
              "name": "活动编辑",
              "type": 1,
              "path": "/event/edit/{id}",
              "icon": "",
              "options": {
                "version": "2.0",
                "domain": "http://event.inner.evente.cn:8000",
                "target": "blank",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "event_manage",
              "module_code": "event",
              "permission_code": "event_manage_screenings",
              "name": "场次管理",
              "type": 1,
              "path": "/{id}/compile/screenings",
              "icon": "",
              "options": {
                "version": "2.0",
                "domain": "http://event.inner.evente.cn:8000",
                "target": "blank",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "event_manage",
              "module_code": "event",
              "permission_code": "event_manage_price",
              "name": "票品管理",
              "type": 1,
              "path": "/{id}/compile/prices",
              "icon": "",
              "options": {
                "version": "2.0",
                "domain": "http://event.inner.evente.cn:8000",
                "target": "blank",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        },
        {
          "parent_code": "event",
          "module_code": "event",
          "permission_code": "event_settings",
          "name": "高级设置",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "event_settings",
              "module_code": "event",
              "permission_code": "event_setting_acccustom",
              "name": "访问设置",
              "type": 1,
              "path": "/event/setting/acccustom",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "event_settings",
              "module_code": "event",
              "permission_code": "event_setting_purchasing",
              "name": "限购设置",
              "type": 1,
              "path": "/event/setting/purchasing",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "event_settings",
              "module_code": "event",
              "permission_code": "event_setting_tickets",
              "name": "批量出票",
              "type": 1,
              "path": "/{id}/tickets/checkout",
              "icon": "",
              "options": {
                "version": "2.0",
                "domain": "http://event.inner.evente.cn:8000",
                "target": "blank",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "event_settings",
              "module_code": "event",
              "permission_code": "event_setting_infocustom",
              "name": "信息定制",
              "type": 1,
              "path": "/event/setting/infocustom",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "event_settings",
              "module_code": "event",
              "permission_code": "event_setting_seatingmap",
              "name": "座位图",
              "type": 1,
              "path": "/event/setting/seatingmap",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": [{
                  "parent_code": "event_setting_seatingmap",
                  "module_code": "event",
                  "permission_code": "event_setting_seatingmap_add",
                  "name": "创建座位图",
                  "type": 5,
                  "path": "/chart/create",
                  "icon": "",
                  "options": {
                    "version": "2.0",
                    "domain": "http://event.inner.evente.cn:8000",
                    "target": "blank",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                  },
                  "is_accessible": false,
                  "sub_menus": []
                },
                {
                  "parent_code": "event_setting_seatingmap",
                  "module_code": "event",
                  "permission_code": "event_setting_seatingmap_edit",
                  "name": "编辑座位图",
                  "type": 5,
                  "path": "/chart/area_list",
                  "icon": "",
                  "options": {
                    "version": "2.0",
                    "domain": "http://event.inner.evente.cn:8000",
                    "target": "blank",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                  },
                  "is_accessible": false,
                  "sub_menus": []
                }
              ]
            }
          ]
        },
        {
          "parent_code": "event",
          "module_code": "event",
          "permission_code": "event_form",
          "name": "信息收集",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
            "parent_code": "event_form",
            "module_code": "event",
            "permission_code": "event_form_list",
            "name": "收集列表",
            "type": 1,
            "path": "/event/formlist",
            "icon": "",
            "options": {
              "version": "3.0",
              "domain": "https://home.evente.cn",
              "target": "_self",
              "denied_type": "error_page",
              "denied_tips": "当前功能无权限访问"
            },
            "is_accessible": false,
            "sub_menus": []
          }]
        },
        {
          "parent_code": "event",
          "module_code": "event",
          "permission_code": "event_spread",
          "name": "活动推广",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
            "parent_code": "event_spread",
            "module_code": "event",
            "permission_code": "event_spread_share",
            "name": "微信分享",
            "type": 1,
            "path": "/event/wechatshare",
            "icon": "",
            "options": {
              "version": "3.0",
              "domain": "https://home.evente.cn",
              "target": "_self",
              "denied_type": "error_page",
              "denied_tips": "当前功能无权限访问"
            },
            "is_accessible": false,
            "sub_menus": []
          }]
        }
      ]
    },
    {
      "parent_code": "",
      "module_code": "meetup",
      "permission_code": "meetup",
      "name": "报名",
      "type": 1,
      "path": "/meetup/activity",
      "tags": [],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": [{
          "parent_code": "meetup",
          "module_code": "meetup",
          "permission_code": "meetup_list",
          "name": "报名列表",
          "type": 2,
          "path": "/meetup/activity",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "meetup",
          "module_code": "meetup",
          "permission_code": "meetup_submit",
          "name": "报名发布",
          "type": 2,
          "path": "/meetup/light",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        }
      ]
    },
    {
      "parent_code": "",
      "module_code": "form",
      "permission_code": "form",
      "name": "表单",
      "type": 1,
      "path": "/form",
      "tags": [],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": []
    },
    {
      "parent_code": "",
      "module_code": "goods",
      "permission_code": "goods",
      "name": "周边",
      "type": 1,
      "path": "/Goods/list",
      "tags": [],
      "icon": "",
      "options": {
        "version": "2.0",
        "domain": "http://goods.inner.evente.cn:8000",
        "target": "blank",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": []
    },
    {
      "parent_code": "",
      "module_code": "shop",
      "permission_code": "shop",
      "name": "店铺",
      "type": 1,
      "path": "/shop/list",
      "tags": [],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": [{
          "parent_code": "shop",
          "module_code": "shop",
          "permission_code": "shop_web",
          "name": "微店铺",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "shop_web",
              "module_code": "shop",
              "permission_code": "shop_web_list",
              "name": "页面装修",
              "type": 1,
              "path": "/shop/list",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "shop_web",
              "module_code": "shop",
              "permission_code": "shop_web_nav",
              "name": "底导航",
              "type": 1,
              "path": "/shop/navlist",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "shop_web",
              "module_code": "shop",
              "permission_code": "shop_web_event",
              "name": "活动列表",
              "type": 1,
              "path": "/shop/eventlist",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "shop_web",
              "module_code": "shop",
              "permission_code": "shop_web_goods",
              "name": "商品列表",
              "type": 1,
              "path": "/shop/goodslist",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        },
        {
          "parent_code": "shop",
          "module_code": "shop",
          "permission_code": "shop_wxapp",
          "name": "小程序店铺",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "shop_wxapp",
              "module_code": "shop",
              "permission_code": "shop_wxapp_manage",
              "name": "小程序管理",
              "type": 1,
              "path": "/shop/weauth",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "shop_wxapp",
              "module_code": "shop",
              "permission_code": "shop_wxapp_page",
              "name": "小程序页面",
              "type": 1,
              "path": "/shop/wepage",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "shop_wxapp",
              "module_code": "shop",
              "permission_code": "shop_wxapp_nav",
              "name": "底导航设置",
              "type": 1,
              "path": "/shop/wechart",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "shop_wxapp",
              "module_code": "shop",
              "permission_code": "shop_wxapp_event",
              "name": "活动列表",
              "type": 1,
              "path": "/shop/welist",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        }
      ]
    },
    {
      "parent_code": "",
      "module_code": "marketing",
      "permission_code": "marketing",
      "name": "营销工具",
      "type": 1,
      "path": "/marketing",
      "tags": ['good'],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": [{
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_coupon",
          "name": "优惠券",
          "type": 2,
          "path": "/bindex/list",
          "icon": "",
          "options": {
            "version": "2.0",
            "domain": "http://coupon.inner.evente.cn:8000",
            "target": "blank",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_discount",
          "name": "限时折扣",
          "type": 2,
          "path": "/marketing/tabulation",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_integral",
          "name": "积分抵现",
          "type": 2,
          "path": "/marketing/coins",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_bargain",
          "name": "砍价",
          "type": 2,
          "path": "/bargain/index",
          "icon": "",
          "options": {
            "version": "2.0",
            "domain": "http://coupon.inner.evente.cn:8000",
            "target": "blank",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_yearcard",
          "name": "年卡",
          "type": 1,
          "path": "/marketing/yearcard",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "marketing_yearcard",
              "module_code": "marketing",
              "permission_code": "marketing_yearcard_list",
              "name": "年卡",
              "type": 1,
              "path": "/marketing/yearcard",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "marketing_yearcard",
              "module_code": "marketing",
              "permission_code": "marketing_yearcard_order",
              "name": "预约订单",
              "type": 1,
              "path": "/marketing/appointment",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_regiment",
          "name": "拼团",
          "type": 1,
          "path": "/collage/activelist",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "marketing_regiment",
              "module_code": "marketing",
              "permission_code": "marketing_regiment_list",
              "name": "拼团列表",
              "type": 1,
              "path": "/marketing/collage/activelist",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "marketing_regiment",
              "module_code": "marketing",
              "permission_code": "marketing_regiment_order",
              "name": "拼团订单",
              "type": 1,
              "path": "/marketing/collage/orderlist",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_distribution",
          "name": "分销",
          "type": 2,
          "path": "/welcome/index",
          "icon": "",
          "options": {
            "version": "2.0",
            "domain": "http://distribution.inner.evente.cn:8000",
            "target": "blank",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_freight",
          "name": "运费设置",
          "type": 2,
          "path": "/freight/index",
          "icon": "",
          "options": {
            "version": "2.0",
            "domain": "http://b.inner.evente.cn:8000",
            "target": "blank",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_wechat",
          "name": "公众号管理",
          "type": 2,
          "path": "/wechat/brief",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_msgpush",
          "name": "微信消息通知",
          "type": 2,
          "path": "/wechat/push",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_logo",
          "name": "白标定制",
          "type": 2,
          "path": "/marketing/whicustom",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "marketing",
          "module_code": "marketing",
          "permission_code": "marketing_sms_sign",
          "name": "短信签名定制",
          "type": 2,
          "path": "/marketing/shortsigncustom",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        }
      ]
    },
    {
      "parent_code": "",
      "module_code": "member",
      "permission_code": "member",
      "name": "会员CRM",
      "type": 1,
      "path": "/crm/contacts",
      "tags": ['热'],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": [{
          "parent_code": "member",
          "module_code": "member",
          "permission_code": "member_contacts",
          "name": "联系人",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "member_contacts",
              "module_code": "member",
              "permission_code": "member_contacts_list",
              "name": "联系人列表",
              "type": 1,
              "path": "/crm/contacts",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "member_contacts",
              "module_code": "member",
              "permission_code": "member_contacts_tags",
              "name": "标签管理",
              "type": 1,
              "path": "/crm/label",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "member_contacts",
              "module_code": "member",
              "permission_code": "member_contacts_message",
              "name": "短信发送",
              "type": 1,
              "path": "/crm/message",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "member_contacts",
              "module_code": "member",
              "permission_code": "member_contacts_msgtemp",
              "name": "模板管理",
              "type": 1,
              "path": "/crm/mestemp",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        },
        {
          "parent_code": "member",
          "module_code": "member",
          "permission_code": "member_settings",
          "name": "会员设置",
          "type": 1,
          "path": "#",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "none",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "member_settings",
              "module_code": "member",
              "permission_code": "member_settings_level",
              "name": "等级设置",
              "type": 1,
              "path": "/crm/levelindex",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "member_settings",
              "module_code": "member",
              "permission_code": "member_settings_integral",
              "name": "积分概览",
              "type": 1,
              "path": "/member/integral",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "member_settings",
              "module_code": "member",
              "permission_code": "member_settings_recharge",
              "name": "储值概览",
              "type": 1,
              "path": "/member/menberstorage",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        }
      ]
    },
    {
      "parent_code": "",
      "module_code": "data",
      "permission_code": "data",
      "name": "数据",
      "type": 1,
      "path": "/data/profile",
      "tags": [],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": [{
          "parent_code": "data",
          "module_code": "data",
          "permission_code": "data_stats",
          "name": "数据大屏",
          "type": 1,
          "path": "/data/profile",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": [{
              "parent_code": "data_stats",
              "module_code": "data",
              "permission_code": "data_stats_dashboard",
              "name": "数据概览",
              "type": 1,
              "path": "/data/profile",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            },
            {
              "parent_code": "data_stats",
              "module_code": "data",
              "permission_code": "data_stats_user",
              "name": "用户分析",
              "type": 1,
              "path": "/data/seguser",
              "icon": "",
              "options": {
                "version": "3.0",
                "domain": "https://home.evente.cn",
                "target": "_self",
                "denied_type": "error_page",
                "denied_tips": "当前功能无权限访问"
              },
              "is_accessible": false,
              "sub_menus": []
            }
          ]
        },
        {
          "parent_code": "data",
          "module_code": "data",
          "permission_code": "data_mobile",
          "name": "手机号分析",
          "type": 1,
          "path": "/data/mobileanalyze",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        },
        {
          "parent_code": "data",
          "module_code": "data",
          "permission_code": "data_idcard",
          "name": "身份证分析",
          "type": 1,
          "path": "/data/identityanalyze",
          "icon": "",
          "options": {
            "version": "3.0",
            "domain": "https://home.evente.cn",
            "target": "_self",
            "denied_type": "error_page",
            "denied_tips": "当前功能无权限访问"
          },
          "is_accessible": false,
          "sub_menus": []
        }
      ]
    },
    {
      "parent_code": "",
      "module_code": "order",
      "permission_code": "order",
      "name": "订单",
      "type": 1,
      "path": "/order/allorder",
      "tags": [],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": true,
      "sub_menus": []
    },
    {
      "parent_code": "",
      "module_code": "finance",
      "permission_code": "finance",
      "name": "财务",
      "type": 1,
      "path": "/finance/overview",
      "tags": ['HOT'],
      "icon": "",
      "options": {
        "version": "3.0",
        "domain": "https://home.evente.cn",
        "target": "_self",
        "denied_type": "error_page",
        "denied_tips": "当前功能无权限访问"
      },
      "is_accessible": false,
      "sub_menus": []
    }
  ]
};
