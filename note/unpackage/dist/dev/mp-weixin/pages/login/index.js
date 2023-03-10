"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function getUserInfo() {
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "亲，授权微信登录后才能正常使用小程序功能",
        success(res) {
          if (res.confirm) {
            common_vendor.index.getUserProfile({
              desc: "注册用户信息使用",
              lang: "zh_CN",
              success: (res2) => {
                common_vendor.index.login({
                  provider: "weixin",
                  success: function(loginRes) {
                    common_vendor.Es.callFunction({
                      name: "user",
                      data: {
                        code: loginRes.code,
                        avatarUrl: res2.userInfo.avatarUrl,
                        gender: res2.userInfo.gender,
                        nickName: res2.userInfo.nickName
                      }
                    }).then((res3) => {
                      common_vendor.index.setStorageSync("userInfo", JSON.stringify(res3.result));
                      common_vendor.index.redirectTo({
                        url: "/pages/home/index",
                        success: () => {
                          console.log(2);
                        }
                      });
                    });
                  }
                });
              }
            });
          } else {
            common_vendor.index.showToast({
              title: "您取消了授权",
              duration: 2e3
            });
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getUserInfo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/miniprogram/healthNote-miniprogram/note/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
