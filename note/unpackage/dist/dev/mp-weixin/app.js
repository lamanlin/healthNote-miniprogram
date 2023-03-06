"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/chart/index.js";
  "./pages/me/index.js";
  "./pages/home/addPress.js";
  "./pages/home/addSuger.js";
  "./pages/home/addBlood.js";
}
const _sfc_main = {
  onLaunch: async function() {
    console.log("App Launch");
    common_vendor.Es.initSecureNetworkByWeixin();
  },
  mounted() {
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/miniprogram/healthNote-miniprogram/note/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
