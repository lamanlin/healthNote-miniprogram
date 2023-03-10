"use strict";
const common_vendor = require("./vendor.js");
let token = JSON.parse(common_vendor.index.getStorageSync("userInfo") || "{}").token;
function request(option) {
  return new Promise((resolve, reject) => {
    if (!option.data)
      option.data = {};
    if (token)
      option.data.token = token;
    common_vendor.index.showLoading();
    common_vendor.Es.callFunction({
      name: option.name,
      data: option.data,
      success: (res) => {
        if (res.result && res.result.token)
          token = res.result.token;
        if (option.success)
          option.success(res);
        resolve(res);
      },
      fail: (err) => {
        if (option.fail)
          option.fail(err);
        reject();
      },
      complete: () => {
        common_vendor.index.hideLoading();
        if (option.complete)
          option.complete();
      }
    });
  });
}
exports.request = request;
