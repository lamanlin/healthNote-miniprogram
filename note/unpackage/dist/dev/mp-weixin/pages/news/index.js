"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = [
      {
        "id": "bd47e875582d22929e7272a1f0e0014e",
        "ctime": "2021-02-04 05:00",
        "title": "别大意！这些症状可能是癌症信号",
        "description": "又到水痘高发季。这是一种由水痘-带状疱疹病毒初次感染引起的急性传染病，任何年龄人群均可感染水痘-带状疱疹病毒，以婴幼儿、学龄前和学龄期儿童发病较多，6个月以下的婴儿较少见。",
        "source": "网易健康",
        "picUrl": "http://cms-bucket.ws.126.net/2021/0203/665e3bf5p00qnyb26007jc000dw008cc.png?imageView&thumbnail=150y100",
        "url": "https://jiankang.163.com/21/0204/04/G1VDBEO60038804U.html"
      },
      {
        "id": "2b96db130795d6692d71766fa82291b2",
        "ctime": "2021-02-03 08:00",
        "title": "多种食品涉疫，“物传人”会存在吗？",
        "description": "网易健康",
        "source": "网易健康",
        "picUrl": "http://cms-bucket.ws.126.net/2021/0203/909043b6p00qnxe2b003lc0009c0070c.png?imageView&thumbnail=150y100",
        "url": "https://jiankang.163.com/21/0203/07/G1T6NMC50038804U.html"
      },
      {
        "id": "d5941edbde8e489f2533500a49ffd5e8",
        "ctime": "2021-02-02 16:00",
        "title": "新冠疫苗到底安不安全？有副作用么？",
        "description": "网易健康",
        "source": "网易健康",
        "picUrl": "http://cms-bucket.ws.126.net/2021/0202/cff6a66dp00qnw4dj00e4c0009c0070c.png?imageView&thumbnail=150y100",
        "url": "https://jiankang.163.com/21/0201/19/G1P91K7H00388AD5.html"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list, (item, k0, i0) => {
          return {
            a: item.id,
            b: "52cd24e9-1-" + i0 + ",52cd24e9-0",
            c: common_vendor.p({
              title: item.title,
              note: item.ctime,
              showArrow: true
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-52cd24e9"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/pages/news/index.vue"]]);
wx.createPage(MiniProgramPage);
