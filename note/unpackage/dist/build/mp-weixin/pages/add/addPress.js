"use strict";const e=require("../../common/vendor.js");if(require("../../common/request.js"),!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-datetime-picker")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js")+(()=>"../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms/uni-forms.js"))();const o={__name:"addPress",setup(o){const t=e.ref(null),n=e.reactive({high:"",low:"",create_time:Date.now(),comment:""}),i={high:{rules:[{required:!0,errorMessage:"输入高压值"}]},low:{rules:[{required:!0,errorMessage:"输入低压值"}]}};function r(e){console.log(e)}function l(e){t.value.validate().then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}return(o,m)=>({a:e.o((e=>n.high=e)),b:e.p({placeholder:"收缩压(高压)",type:"digit",trim:"all",maxlength:8,modelValue:n.high}),c:e.p({name:"high",label:"高压值",required:!0}),d:e.o((e=>n.low=e)),e:e.p({placeholder:"舒张压(低压)",type:"digit",trim:"all",maxlength:8,modelValue:n.low}),f:e.p({name:"low",label:"低压值",required:!0}),g:e.o(r),h:e.o((e=>n.create_time=e)),i:e.p({type:"create_time","clear-icon":!1,modelValue:n.create_time}),j:e.p({name:"create_time",label:"日期时间"}),k:e.o((e=>n.comment=e)),l:e.p({type:"textarea",autoHeight:!0,placeholder:"请输入内容",modelValue:n.comment}),m:e.p({name:"comment",label:"备注"}),n:e.o(l),o:e.sr(t,"6416b479-0",{k:"ruleFormRef"}),p:e.p({rules:i,value:n,border:!0,"label-width":80})})}},t=e._export_sfc(o,[["__scopeId","data-v-6416b479"]]);wx.createPage(t);