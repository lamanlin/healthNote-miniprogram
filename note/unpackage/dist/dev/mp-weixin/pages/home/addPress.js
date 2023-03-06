"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_datetime_picker + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "addPress",
  setup(__props) {
    const ruleFormRef = common_vendor.ref(null);
    const formData = common_vendor.reactive({
      high: "",
      low: "",
      datetimesingle: Date.parse(new Date()),
      comment: ""
    });
    const rules = {
      high: {
        rules: [{
          required: true,
          errorMessage: "输入高压值"
        }]
      },
      low: {
        rules: [{
          required: true,
          errorMessage: "输入低压值"
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
        a: common_vendor.o(($event) => formData.high = $event),
        b: common_vendor.p({
          placeholder: "收缩压(高压)",
          type: "digit",
          trim: "all",
          maxlength: 8,
          modelValue: formData.high
        }),
        c: common_vendor.p({
          name: "high",
          label: "高压值",
          required: true
        }),
        d: common_vendor.o(($event) => formData.low = $event),
        e: common_vendor.p({
          placeholder: "舒张压(低压)",
          type: "digit",
          trim: "all",
          maxlength: 8,
          modelValue: formData.low
        }),
        f: common_vendor.p({
          name: "low",
          label: "低压值",
          required: true
        }),
        g: common_vendor.o(($event) => formData.datetimesingle = $event),
        h: common_vendor.p({
          type: "datetime",
          ["return-type"]: "timestamp",
          ["clear-icon"]: false,
          modelValue: formData.datetimesingle
        }),
        i: common_vendor.p({
          name: "date",
          label: "日期时间"
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
        n: common_vendor.sr(ruleFormRef, "b0a5ba48-0", {
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b0a5ba48"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/pages/home/addPress.vue"]]);
wx.createPage(MiniProgramPage);
