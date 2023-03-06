"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_data_select2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_datetime_picker + _easycom_uni_data_select + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "addSuger",
  setup(__props) {
    const ruleFormRef = common_vendor.ref(null);
    const formData = common_vendor.reactive({
      suger: "",
      low: "",
      datetimesingle: Date.parse(new Date()),
      timeRange: "",
      comment: ""
    });
    const range = [
      {
        value: 0,
        text: "午餐前"
      },
      {
        value: 1,
        text: "午餐后"
      },
      {
        value: 2,
        text: "晚餐前"
      },
      {
        value: 3,
        text: "晚餐前"
      }
    ];
    const rules = {
      suger: {
        rules: [{
          required: true,
          errorMessage: "输入血糖值"
        }]
      }
    };
    common_vendor.onMounted(() => {
    });
    function submit(ref) {
      ruleFormRef.value.validate((valid) => {
        if (valid) {
          console.log(1);
        } else {
          console.log(2);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => formData.suger = $event),
        b: common_vendor.p({
          placeholder: "输入血糖值",
          type: "digit",
          trim: "all",
          maxlength: 8,
          modelValue: formData.suger
        }),
        c: common_vendor.p({
          name: "suger",
          label: "血糖值",
          required: true
        }),
        d: common_vendor.o(($event) => formData.datetimesingle = $event),
        e: common_vendor.p({
          type: "datetime",
          ["return-type"]: "timestamp",
          ["clear-icon"]: false,
          modelValue: formData.datetimesingle
        }),
        f: common_vendor.p({
          name: "date",
          label: "日期时间"
        }),
        g: common_vendor.o(($event) => formData.timeRange = $event),
        h: common_vendor.p({
          localdata: range,
          modelValue: formData.timeRange
        }),
        i: common_vendor.p({
          name: "timeRange",
          label: "检测时段"
        }),
        j: common_vendor.o(($event) => formData.comment = $event),
        k: common_vendor.p({
          type: "textarea",
          autoHeight: true,
          placeholder: "请输入内容",
          modelValue: formData.comment
        }),
        l: common_vendor.p({
          name: "comment",
          label: "备注"
        }),
        m: common_vendor.o(submit),
        n: common_vendor.sr(ruleFormRef, "44de2afe-0", {
          "k": "ruleFormRef"
        }),
        o: common_vendor.p({
          rules,
          value: formData,
          border: true,
          ["label-width"]: 80
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-44de2afe"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/pages/home/addSuger.vue"]]);
wx.createPage(MiniProgramPage);
