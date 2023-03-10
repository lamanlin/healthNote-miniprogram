"use strict";const e=require("../../common/vendor.js");if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-datetime-picker")+e.resolveComponent("uni-data-select")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js")+(()=>"../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js")+(()=>"../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms/uni-forms.js"))();const t={__name:"addSuger",setup(t){const n=e.ref(null),o=e.reactive({suger:"",low:"",create_time:Date.parse(new Date),timeRange:"",comment:""}),a=[{value:0,text:"午餐前"},{value:1,text:"午餐后"},{value:2,text:"晚餐前"},{value:3,text:"晚餐前"}],i={suger:{rules:[{required:!0,errorMessage:"输入血糖值"}]}};function u(e){n.value.validate((e=>{e?console.log(1):console.log(2)}))}return e.onMounted((()=>{e.onMounted((()=>{setTimeout((()=>{o.create_time=Date.parse(new Date)}),0)}))})),(t,m)=>({a:e.o((e=>o.suger=e)),b:e.p({placeholder:"输入血糖值",type:"digit",trim:"all",maxlength:8,modelValue:o.suger}),c:e.p({name:"suger",label:"血糖值",required:!0}),d:e.o((e=>o.create_time=e)),e:e.p({type:"create_time","clear-icon":!1,modelValue:o.create_time}),f:e.p({name:"create_time",label:"日期时间"}),g:e.o((e=>o.timeRange=e)),h:e.p({localdata:a,modelValue:o.timeRange}),i:e.p({name:"timeRange",label:"检测时段"}),j:e.o((e=>o.comment=e)),k:e.p({type:"textarea",autoHeight:!0,placeholder:"请输入内容",modelValue:o.comment}),l:e.p({name:"comment",label:"备注"}),m:e.o(u),n:e.sr(n,"5b13a213-0",{k:"ruleFormRef"}),o:e.p({rules:i,value:o,border:!0,"label-width":80})})}},n=e._export_sfc(t,[["__scopeId","data-v-5b13a213"]]);wx.createPage(n);