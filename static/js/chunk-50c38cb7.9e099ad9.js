(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50c38cb7"],{"64e8":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"dashboard-container"},[l("div",{staticClass:"filter-container"},[l("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{label:"任务名称",placeholder:"任务名称"}}),t._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"需求负荷(kW)"}}),t._v(" "),l("el-date-picker",{staticClass:"filter-item",attrs:{type:"date",placeholder:"发布日期"}}),t._v("-\n    "),l("el-date-picker",{staticClass:"filter-item",attrs:{type:"date",placeholder:"提报截止日期"}}),t._v(" "),l("el-select",{attrs:{placeholder:"任务状态"}},[l("el-option",[t._v("起草")]),t._v(" "),l("el-option",[t._v("发布")]),t._v(" "),l("el-option",[t._v("结束")])],1),t._v(" "),l("el-button",{staticClass:"filter-item",attrs:{plain:"",type:"primary",icon:"search"}},[t._v("查 询")]),t._v(" "),l("el-button",{staticClass:"filter-item",attrs:{plain:"",type:"",icon:"search"}},[t._v("重 置")]),t._v(" "),l("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{plain:"",type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){return t.handleJumpAdd()}}},[t._v("新增")])],1),t._v(" "),l("el-container",{staticStyle:{"margin-top":"20px"}},[l("el-table",{attrs:{border:"",stripe:"",data:t.tableData}},[l("el-table-column",{attrs:{label:"序号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"任务名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"响应时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"需求负荷(kW)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.fuhe))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"可响应负荷(kW)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.kexiangyingfuhe))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"奖励金额(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.jianglijine))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"任务状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.renwuhzuangtai))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"发布日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"}},[t._v("修改")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"}},[t._v("删除")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleDialogConfirm()}}},[t._v("发布")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleDialogTable()}}},[t._v("查看领取")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"}},[t._v("执行情况")])]}}])})],1),t._v(" "),l("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[l("span",[t._v("确定发布该任务?")]),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)]),t._v(" "),l("el-dialog",{attrs:{title:"查看任务响应情况",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[l("p",{staticStyle:{color:"green"}},[l("span",[t._v("需求负荷：500kW")]),t._v(" "),l("span",[t._v("可响应负荷：300kW")])]),t._v(" "),l("el-table",{attrs:{data:t.gridData}},[l("el-table-column",{attrs:{label:"响应用户"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"响应负荷（kW）"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"参与时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.address))]}}])},[t._v("{\n        ")])],1)],1)],1)],1)},n=[],i=l("3556"),s=l("52c1"),o={name:"Dashboard",computed:Object(i["a"])({},Object(s["b"])(["name"])),data:function(){return{tableData:[{date:"2016-05-03",name:"任务1",fuhe:"500",kexiangyingfuhe:"200",jianglijine:"1000",renwuhzuangtai:"起草"},{date:"2016-05-03",name:"任务2",fuhe:"500",kexiangyingfuhe:"200",jianglijine:"1000",renwuhzuangtai:"发布"},{date:"2016-05-03",name:"任务3",fuhe:"500",kexiangyingfuhe:"200",jianglijine:"1000",renwuhzuangtai:"结束"}],gridData:[{date:"户1",name:"100",address:"2019-4-17 11:15"},{date:"户2",name:"223",address:"2019-4-17 11:15"}],dialogVisible:!1,dialogTableVisible:!1}},created:function(){},methods:{handleJumpAdd:function(){this.$router.push({name:"ktadd"})},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handleDialogConfirm:function(){this.dialogVisible=!0},handleDialogTable:function(){this.dialogTableVisible=!0}}},r=o,u=(l("e880"),l("17cc")),c=Object(u["a"])(r,a,n,!1,null,"8e4133d0",null);e["default"]=c.exports},e880:function(t,e,l){"use strict";var a=l("f561"),n=l.n(a);n.a},f561:function(t,e,l){}}]);