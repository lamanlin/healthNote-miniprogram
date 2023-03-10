"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../common/request.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const itemList = common_vendor.reactive([
      {
        _id: 0,
        title: "新增血压",
        imgSrc: "../../static/press.png",
        bgColor: "uni-primary-disable-bg",
        pageLink: "./addPress"
      },
      {
        _id: 1,
        title: "新增血糖",
        imgSrc: "../../static/suger.png",
        bgColor: "uni-error-disable-bg",
        pageLink: "./addPress"
      }
    ]);
    common_vendor.onMounted(() => {
    });
    function goPage(link) {
      common_vendor.index.navigateTo({
        url: link
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(itemList, (item, k0, i0) => {
          return {
            a: item.imgSrc,
            b: common_vendor.t(item.title),
            c: item._id,
            d: common_vendor.n(item.bgColor),
            e: common_vendor.o(($event) => goPage(item.pageLink), item._id)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-89f6901d"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/pages/add/index.vue"]]);
wx.createPage(MiniProgramPage);
