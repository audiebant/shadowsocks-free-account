webpackJsonp([1],{"+nFJ":function(t,e){},"4giB":function(t,e){},BMUh:function(t,e,a){"use strict";var n=a("mtWM"),s=a.n(n);e.a={name:"IPList",data:function(){return{iplist:[],height:600}},created:function(){this.gData()},methods:{gData:function(){var t=this;s.a.get("http://localhost:3000/data").then(function(e){t.iplist=e.data})}}}},HM2b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.iplist,height:t.height,border:""}},[a("el-table-column",{attrs:{prop:"remarks",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"server",label:"IP地址"}}),t._v(" "),a("el-table-column",{attrs:{prop:"server_port",label:"端口"}}),t._v(" "),a("el-table-column",{attrs:{prop:"password",label:"密码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"method",label:"方法"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"更新时间"}})],1)],1),t._v(" "),t._m(2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"title-container"},[a("span",{staticClass:"title"},[t._v("ShandowSocks ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcode"},[n("p",{staticStyle:{"font-size":"12px"}},[t._v("关注微信公众号及时获取最新消息")]),t._v(" "),n("img",{attrs:{height:"100%",width:"100%",src:a("gpC3")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"download"},[a("a",{attrs:{href:"http://localhost:3000/download",type:"download"}},[a("i",{staticClass:"el-icon-download"})])])}],r={render:n,staticRenderFns:s};e.a=r},M93x:function(t,e,a){"use strict";function n(t){a("mmJa")}var s=a("xJD8"),r=a("zyCL"),i=a("VU/8"),l=n,o=i(s.a,r.a,!1,l,null,null);e.a=o.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("tvR6"),r=(a.n(s),a("zL8q")),i=a.n(r),l=a("M93x"),o=a("YaEn"),c=a("+nFJ");a.n(c);n.default.config.productionTip=!1,n.default.use(i.a),new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:l.a}})},O2A5:function(t,e,a){"use strict";function n(t){a("4giB")}var s=a("BMUh"),r=a("HM2b"),i=a("VU/8"),l=n,o=i(s.a,r.a,!1,l,null,null);e.a=o.exports},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),r=a("O2A5");n.default.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Hello",component:r.a}]})},gpC3:function(t,e,a){t.exports=a.p+"static/img/getqrcode.4644662.jpeg"},mmJa:function(t,e){},tvR6:function(t,e){},xJD8:function(t,e,a){"use strict";e.a={name:"app"}},zyCL:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r={render:n,staticRenderFns:s};e.a=r}},["NHnr"]);
//# sourceMappingURL=app.45df8124efad16bbde18.js.map