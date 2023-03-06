"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_icons2 + _easycom_uni_fab2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_icons + timelineItem + emty + _easycom_uni_fab)();
}
const emty = () => "../../components/emty/index.js";
const timelineItem = () => "../../components/chenbin-timeline/timelineItem.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const pattern = {
      color: "#3a3a3a",
      backgroundColor: "#fff",
      selectedColor: "#18bc37",
      buttonColor: "#18bc37",
      iconColor: "#fff"
    };
    const addBtnContent = [
      {
        iconPath: "../../static/blood.png",
        selectedIconPath: "../../static/blood1.png",
        text: "血常规",
        active: false
      },
      {
        iconPath: "../../static/press.png",
        selectedIconPath: "../../static/press.png",
        text: "血压",
        active: false
      },
      {
        iconPath: "../../static/suger.png",
        selectedIconPath: "../../static/suger.png",
        text: "血糖",
        active: false
      }
    ];
    const dataList = [{
      id: 0,
      type: 0,
      text: "血常规",
      date: "2023-03-05 10:22",
      remark: "fg地方好地dfhdfhdffh三个复旦复华方好",
      data: "133333333823.55"
    }];
    function trigger(val) {
      console.log(val);
      let url = "";
      switch (val.index) {
        case 1:
          url = "./addPress";
          break;
        case 2:
          url = "./addSuger";
          break;
        case 0:
          url = "./addBlood";
          break;
      }
      common_vendor.index.navigateTo({
        url
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: dataList.length === 0
      }, dataList.length === 0 ? {
        b: common_vendor.f(dataList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.t(item.remark),
            c: common_vendor.t(item.data),
            d: "4978fed5-1-" + i0 + "," + ("4978fed5-0-" + i0),
            e: "4978fed5-0-" + i0,
            f: common_vendor.p({
              index: item.id,
              leftTime: item.date
            })
          };
        }),
        c: common_vendor.p({
          type: "forward",
          color: "#18bc37"
        })
      } : {}, {
        d: common_vendor.o(trigger),
        e: common_vendor.p({
          pattern,
          content: addBtnContent,
          horizontal: "right",
          vertical: "bottom"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
