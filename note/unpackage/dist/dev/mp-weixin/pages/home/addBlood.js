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
  __name: "addBlood",
  setup(__props) {
    const ruleFormRef = common_vendor.ref(null);
    const formData = common_vendor.reactive({
      platelets: "",
      leukocyte: "",
      cea: "",
      ca199: "",
      datetimesingle: Date.parse(new Date()),
      comment: ""
    });
    const rules = {
      platelets: {
        rules: [{
          required: true,
          errorMessage: "输入血小板"
        }]
      },
      leukocyte: {
        rules: [{
          required: true,
          errorMessage: "输入白细胞"
        }]
      },
      cea: {
        rules: [{
          required: true,
          errorMessage: "输入cea"
        }]
      },
      ca199: {
        rules: [{
          required: true,
          errorMessage: "输入ca199"
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
        a: common_vendor.o(($event) => formData.platelets = $event),
        b: common_vendor.p({
          placeholder: "输入血小板总数量",
          type: "digit",
          trim: "all",
          maxlength: 8,
          modelValue: formData.platelets
        }),
        c: common_vendor.p({
          name: "platelets",
          label: "血小板",
          required: true
        }),
        d: common_vendor.o(($event) => formData.leukocyte = $event),
        e: common_vendor.p({
          placeholder: "输入白细胞计数",
          type: "digit",
          trim: "all",
          maxlength: 8,
          modelValue: formData.leukocyte
        }),
        f: common_vendor.p({
          name: "leukocyte",
          label: "白细胞",
          required: true
        }),
        g: common_vendor.o(($event) => formData.cea = $event),
        h: common_vendor.p({
          placeholder: "输入癌胚抗原",
          type: "digit",
          trim: "all",
          maxlength: 8,
          modelValue: formData.cea
        }),
        i: common_vendor.p({
          name: "cea",
          label: "CEA(癌胚抗原)",
          required: true
        }),
        j: common_vendor.o(($event) => formData.ca199 = $event),
        k: common_vendor.p({
          placeholder: "输入糖类抗原",
          type: "digit",
          trim: "all",
          maxlength: 8,
          modelValue: formData.ca199
        }),
        l: common_vendor.p({
          name: "ca199",
          label: "CA199",
          required: true
        }),
        m: common_vendor.o(($event) => formData.datetimesingle = $event),
        n: common_vendor.p({
          type: "datetime",
          ["return-type"]: "timestamp",
          ["clear-icon"]: false,
          modelValue: formData.datetimesingle
        }),
        o: common_vendor.p({
          name: "date",
          label: "日期时间"
        }),
        p: common_vendor.o(($event) => formData.comment = $event),
        q: common_vendor.p({
          type: "textarea",
          autoHeight: true,
          placeholder: "请输入内容",
          modelValue: formData.comment
        }),
        r: common_vendor.p({
          name: "comment",
          label: "备注"
        }),
        s: common_vendor.o(submit),
        t: common_vendor.sr(ruleFormRef, "d7de71ec-0", {
          "k": "ruleFormRef"
        }),
        v: common_vendor.p({
          rules,
          value: formData,
          border: true,
          ["label-width"]: 80
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d7de71ec"], ["__file", "D:/code/miniprogram/healthNote-miniprogram/note/pages/home/addBlood.vue"]]);
wx.createPage(MiniProgramPage);
