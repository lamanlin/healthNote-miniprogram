"use strict";
const common_vendor = require("../../common/vendor.js");
const common_request = require("../../common/request.js");
const common_util = require("../../common/util.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + timelineItem + emty)();
}
const emty = () => "../../components/emty/index.js";
const timelineItem = () => "../../components/timeline/timelineItem.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      dataList: []
    });
    common_vendor.onShow(() => {
      common_request.request({
        name: "dataList",
        data: {
          action: "get"
        },
        success: (res) => {
          console.log(res.result);
          res.result.forEach((item) => {
            var _a;
            item.data.create_time = common_util.formatTime((_a = item == null ? void 0 : item.data) == null ? void 0 : _a.create_time);
          });
          state.dataList.push(...res.result);
        }
      });
    });
    function goPage() {
      common_vendor.index.redirectTo({
        url: "/pages/add/index"
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: state.dataList.length > 0
      }, state.dataList.length > 0 ? {
        b: common_vendor.f(state.dataList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.data_type),
            b: common_vendor.t(item.data.comment),
            c: common_vendor.t(item.data.high),
            d: "4978fed5-1-" + i0 + "," + ("4978fed5-0-" + i0),
            e: item._id,
            f: "4978fed5-0-" + i0,
            g: common_vendor.p({
              index: item._id,
              leftTime: common_vendor.unref(common_util.formatTime)(item.data.create_time)
            })
          };
        }),
        c: common_vendor.p({
          type: "forward",
          color: "#18bc37"
        })
      } : {
        d: common_vendor.o(($event) => goPage())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
