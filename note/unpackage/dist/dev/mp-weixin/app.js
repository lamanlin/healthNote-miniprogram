"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/chart/index.js";
  "./pages/news/index.js";
  "./pages/login/index.js";
  "./pages/add/index.js";
  "./pages/add/addPress.js";
  "./pages/add/addSuger.js";
  "./pages/add/addCustom.js";
}
const _sfc_main = {
  onLaunch: async function() {
    console.log("App Launch");
    common_vendor.Es.initSecureNetworkByWeixin();
    const userInfo = JSON.parse(common_vendor.index.getStorageSync("userInfo") || "{}");
    const token = userInfo.token;
    if (token) {
      plus.navigator.closeSplashscreen();
    } else {
      common_vendor.index.reLaunch({
        url: "/pages/login/index",
        success: () => {
          plus.navigator.closeSplashscreen();
        }
      });
    }
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
