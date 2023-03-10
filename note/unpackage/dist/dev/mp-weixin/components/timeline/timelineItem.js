"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    leftTime: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.leftTime),
    b: $props.color == "" ? "" : $props.color,
    c: $props.color == "" ? "" : $props.color
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5b601e31"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/components/timeline/timelineItem.vue"]]);
wx.createComponent(Component);
