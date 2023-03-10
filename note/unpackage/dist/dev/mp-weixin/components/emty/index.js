"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    onTap() {
      this.$emit("onClick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.onTap && $options.onTap(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a625a927"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/components/emty/index.vue"]]);
wx.createComponent(Component);
